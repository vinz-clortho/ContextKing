# Context King

A browser-based satirical idle/clicker game about enterprise AI decision-making, context window obsession, manufacturing misalignment, and ignored cybersecurity risk.

## Design Docs

The game design is documented in:

- `design/01-upgrades.md`
- `design/02-events-and-dialogue.md`
- `design/03-stats-and-balance.md`
- `design/04-ui-layout.md`
- `design/05-tone-and-character-guide.md`

## MVP Goal

Create a playable 10-15 minute idle/clicker session where the player increases token generation, buys context window upgrades, receives questionable guidance from Himmy, and eventually unlocks Infinite Context.

## Running Locally

This MVP is a dependency-free static browser app.

With Node.js installed, run:

```bash
npm start
```

Then visit:

```text
http://localhost:5173
```

You can also serve the files with any static server:

```bash
python -m http.server 5173
```

Then visit:

```text
http://localhost:5173
```

Opening `index.html` directly may work in some browsers, but a local server is recommended because the app uses JavaScript modules.

If Python is unavailable, a small PowerShell static server is included:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\serve.ps1 -Port 5173
```
