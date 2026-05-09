param(
  [int]$Port = 5173,
  [string]$Root = (Resolve-Path "$PSScriptRoot\..").Path
)

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()
Write-Host "Serving $Root at http://localhost:$Port/"

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
}

function Send-Response($Stream, [int]$Status, [string]$StatusText, [byte[]]$Body, [string]$ContentType) {
  $header = "HTTP/1.1 $Status $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($Body.Length -gt 0) {
    $Stream.Write($Body, 0, $Body.Length)
  }
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    $stream = $client.GetStream()

    try {
      $buffer = New-Object byte[] 4096
      $count = $stream.Read($buffer, 0, $buffer.Length)
      $request = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $count)
      $firstLine = ($request -split "`r`n")[0]
      $parts = $firstLine -split " "

      if ($parts.Length -lt 2 -or $parts[0] -ne "GET") {
        Send-Response $stream 405 "Method Not Allowed" ([System.Text.Encoding]::UTF8.GetBytes("Method Not Allowed")) "text/plain; charset=utf-8"
        continue
      }

      $requestPath = [Uri]::UnescapeDataString($parts[1].Split("?")[0].TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "index.html"
      }

      $fullPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $requestPath))
      if (-not $fullPath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)) {
        Send-Response $stream 403 "Forbidden" ([System.Text.Encoding]::UTF8.GetBytes("Forbidden")) "text/plain; charset=utf-8"
        continue
      }

      if (-not [System.IO.File]::Exists($fullPath)) {
        Send-Response $stream 404 "Not Found" ([System.Text.Encoding]::UTF8.GetBytes("Not Found")) "text/plain; charset=utf-8"
        continue
      }

      $extension = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
      $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
      Send-Response $stream 200 "OK" ([System.IO.File]::ReadAllBytes($fullPath)) $contentType
    }
    finally {
      $stream.Close()
      $client.Close()
    }
  }
}
finally {
  $listener.Stop()
}
