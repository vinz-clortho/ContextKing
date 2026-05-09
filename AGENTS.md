\# Context King — Project Instructions



This is a browser-based satirical idle/clicker game about an executive choosing an AI vendor based almost entirely on context window size while ignoring manufacturing business fit, engineering concerns, and cybersecurity risk.



\## Source of truth



Before implementing features, read the design docs in:



\- design/01-upgrades.md

\- design/02-events-and-dialogue.md

\- design/03-stats-and-balance.md

\- design/04-ui-layout.md

\- design/05-tone-and-character-guide.md



Use these files as the authoritative design direction.



\## Game style



\- Browser-based idle/clicker game.

\- Session length target: 10–15 minutes.

\- Tone: satirical, corporate, absurd, but not cruel.

\- The main joke is “one impressive metric is mistaken for strategy.”

\- Himmy is a fictional executive caricature and recurring bad-advice advisor.



\## Technical preferences



\- Keep the first implementation simple.

\- Prefer readable code over clever abstractions.

\- Use data-driven arrays/objects for upgrades, events, quotes, and milestones.

\- Separate game data from UI components where practical.

\- Do not overbuild backend features unless requested.

\- The MVP should run locally in the browser.



\## MVP priority



Build in this order:



1\. Main click loop

2\. Token currency

3\. Tokens per click

4\. Tokens per second

5\. Upgrade shop

6\. Context milestones

7\. Himmy advisor panel

8\. Secondary stats

9\. Random events

10\. Infinite Context ending

