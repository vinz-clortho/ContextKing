# Himmy Game — Section 04: UI Layout

## Purpose

This file defines the user interface layout for the first browser-based prototype of **Context King**.

The UI should look like a cheerful enterprise dashboard slowly losing its mind. At the start, the screen should feel simple, clean, and almost reasonable. As the run progresses, more panels, warnings, executive commentary, and neglected metrics appear. The interface itself should become part of the joke: the **Context Window** number receives the most visual attention, while important business, security, and engineering indicators are increasingly treated as secondary clutter.

The target play session is 10–15 minutes.

---

## Design Goals

1. Make the clicker loop immediately understandable.
2. Keep the **Context Window** visually dominant.
3. Keep Himmy present throughout the session.
4. Reveal complexity gradually instead of overwhelming the player at launch.
5. Make responsible choices visible but less emotionally exciting.
6. Make the UI satire escalate as the game progresses.
7. Support a simple implementation in React, vanilla JS, or similar browser stack.

---

## Overall Screen Layout

Recommended desktop layout:

```text
+--------------------------------------------------------------------------------+
| Header: Context King                                    Run Time | Pause | ?    |
+--------------------------------------------------------------------------------+
|                                                                                |
|  Main Strategy Panel          Upgrade Shop                  Himmy Advisor       |
|  -------------------          ------------                  -------------       |
|  Context Window               Click Upgrades                Portrait            |
|  Tokens                       Automation                    Speech Bubble       |
|  Main Click Button            Context Milestones            Himmy Approval      |
|  Core Stats                   Reckless Enterprise           Latest Directive    |
|                               Responsible Controls                              |
|                                                                                |
+--------------------------------------------------------------------------------+
| Event Feed / Recent Incidents / Achievement Toasts                              |
+--------------------------------------------------------------------------------+
```

Recommended responsive/mobile layout:

```text
Header
Main Strategy Panel
Himmy Advisor
Upgrade Shop
Event Feed
```

For the first prototype, prioritize desktop. The humor benefits from a dashboard-style layout.

---

## Primary UI Regions

### 1. Header Bar

The header gives the game a fake enterprise-product feel.

Contents:

| Element | Purpose |
|---|---|
| Game title | Reinforces identity. |
| Subtitle/tagline | Optional rotating joke. |
| Run timer | Shows approximate session progress. |
| Pause button | Useful for popups and debugging. |
| Help/about button | Optional. |

Example header:

```text
CONTEXT KING
Enterprise AI Strategy Simulator
Run Time: 06:42        [Pause] [?]
```

Possible rotating subtitles:

- `Bigger is Better`
- `Strategic Alignment Through Token Volume`
- `Manufacturing Outcomes Pending`
- `Security Review Deferred`
- `Now With More Context Than Judgment`

Implementation notes:

- The title should remain stable.
- The subtitle can update after context milestones.
- The header should not take too much vertical space.

---

### 2. Main Strategy Panel

This is the primary clicker area. It should be the first thing the player understands.

Recommended contents:

1. Context Window display
2. Token display
3. Tokens per click
4. Tokens per second
5. Main click button
6. Secondary stats area

Example early-game layout:

```text
Context Window
4,000 tokens

Tokens: 0
+1 per click
0/sec

[ Add More Context ]
```

Example mid-game layout:

```text
Context Window
1,000,000 tokens

Tokens: 42,350
+350 per click
2,400/sec

[ Add More Context ]

Executive Confidence: 91%
Engineering Trust: 48%
Cyber Risk: 62%
Business Alignment: 39%
```

Example late-game layout:

```text
Context Window
10,000,000 tokens

Tokens: 833,420
+8,000 per click
41,000/sec

[ Add More Context ]

Executive Confidence: 99%
Himmy Approval: 100%
Engineering Trust: 12%
Cyber Risk: Critical
Business Alignment: TBD
Prompt Cost: Finance has opened a ticket
Latency: Still thinking...
Relevance: Technically present
```

#### Main click button

Button label should evolve over time.

| Stage | Button Label |
|---|---|
| 4k | `Add More Context` |
| 8k | `Paste More Context` |
| 32k | `Expand the Prompt` |
| 128k | `Include More Background` |
| 1M | `Upload More Internal Knowledge` |
| 10M | `Add Everything Just in Case` |
| 100M | `Contextualize the Entire Business` |
| Infinite unlocked | `Achieve Infinite Context` |

Click feedback:

- Floating `+N tokens` text near the button.
- A short button pulse.
- Occasional Himmy approval sparkle after major context-related purchases.

Do not overdo visual effects early. The UI should become noisier as the game gets worse.

---

### 3. Upgrade Shop

The upgrade shop is the main decision area.

Recommended tabs or sections:

1. Click Upgrades
2. Automation
3. Context Milestones
4. Enterprise Shortcuts
5. Responsible Controls

Early game may show only the first three. The other sections unlock later.

```text
Upgrade Shop

[Click] [Automation] [Context] [Enterprise] [Controls]

Bigger Prompt Box
Cost: 10 tokens
Effect: +1 token per click
[Buy]

Context Intern
Cost: 50 tokens
Effect: +1 token/sec
[Buy]
```

#### Upgrade card structure

Each upgrade should use a consistent card layout:

| Field | Example |
|---|---|
| Name | `Upload the Monorepo` |
| Cost | `10,000 tokens` |
| Flavor | `Surely the answer is in there somewhere.` |
| Mechanical effect | `+500 tokens/sec, -10 relevance, +8 cyber risk` |
| Buy button | Enabled/disabled based on affordability/unlocks. |

Example card:

```text
Upload the Monorepo
Surely the answer is in there somewhere.
Cost: 10,000 tokens
Effect: +500/sec, -10 Relevance, +8 Cyber Risk
[Buy]
```

#### Affordability states

| State | Visual Behavior |
|---|---|
| Affordable | Normal card, active button. |
| Too expensive | Dimmed button, cost highlighted. |
| Locked | Card hidden or shown as `???` depending on tone. |
| Purchased once | Show as purchased, unless repeatable. |
| Repeatable | Show current level and next cost. |

Recommended for MVP:

- Hide locked upgrades until the relevant milestone.
- Show repeatable upgrades with `Level N`.

Example:

```text
Prompt Template Library — Level 3
Cost: 2,250 tokens
Effect: +25 tokens/click
[Buy Level 4]
```

---

### 4. Himmy Advisor Panel

This is one of the most important UI elements. Himmy should feel like a permanent executive presence guiding the player toward bad strategy.

Recommended contents:

1. Himmy portrait
2. Name/title
3. Himmy Approval meter
4. Speech bubble
5. Current directive or mood

Example:

```text
Himmy
Managing Director, Strategic Context

[Portrait]

Himmy Approval: 87%
Mood: Vindicated

“We should avoid overcomplicating this. Their context window is larger.”
```

#### Portrait area

The portrait should be a cartoon executive caricature, not a realistic depiction.

Base appearance:

- Middle-aged Indian male
- Thick black glasses
- Smug or pleased expression
- Business-casual executive clothing
- Confident posture
- Cartoon or vector style

Recommended portrait variants:

| Variant | Trigger |
|---|---|
| Neutral | Default state. |
| Pleased | Context milestone purchased. |
| Directive | Himmy event popup active. |
| Dismissive | Security/manufacturing concerns appear. |
| Victorious | Infinite Context ending. |
| Nervous-smug | Incidents occur but executive confidence remains high. |

#### Himmy speech bubble behavior

Speech bubble updates from several sources, prioritized in this order:

1. Active event dialogue
2. Context milestone speech
3. Recent upgrade reaction
4. Passive rotating quote
5. Default quote

Passive quote rotation:

- Every 20–40 seconds.
- Do not rotate while an event modal is open.
- Avoid repeating the same quote within 3 rotations.

Example passive quotes:

```text
“The number was compelling.”
“Security should enable momentum.”
“Manufacturing specifics can be handled in Phase 2.”
“The engineers are introducing nuance.”
“At some point, leadership means choosing the larger window.”
```

#### Himmy Approval meter

Visual labels:

| Value | Label |
|---:|---|
| 0–20 | Disappointed |
| 21–40 | Concerned |
| 41–60 | Monitoring |
| 61–80 | Encouraged |
| 81–99 | Pleased |
| 100 | Vindicated |

The meter should look important, even though optimizing for it is often bad for the business.

---

### 5. Secondary Stats Panel

Secondary stats should reveal gradually. The visual joke is that important indicators appear later and receive less emphasis than context size.

Recommended reveal schedule:

| Unlock | New Stats Revealed |
|---|---|
| Start | Tokens, tokens/click, tokens/sec, context window |
| 8k | Executive Confidence, Engineering Trust |
| 32k | Himmy Approval |
| 128k | Cyber Risk, Business Alignment |
| 1M | Prompt Cost, Latency, Relevance |
| 10M | Incident Risk, Security Team Anger, Customer Concern |

For MVP, the main secondary stats are:

- Executive Confidence
- Himmy Approval
- Engineering Trust
- Cyber Risk
- Business Alignment
- Prompt Cost
- Latency
- Relevance

#### Stat display style

Use readable labels early, then increasingly absurd labels late.

Examples:

| Stat | Normal Display | Late-Game Display |
|---|---|---|
| Cyber Risk | `Cyber Risk: 62%` | `Cyber Risk: The CISO is typing...` |
| Business Alignment | `Business Alignment: 39%` | `Business Alignment: Phase 2` |
| Prompt Cost | `Prompt Cost: $4.82` | `Prompt Cost: Finance has opened a ticket` |
| Latency | `Latency: 18.4 sec` | `Latency: Still thinking...` |
| Relevance | `Relevance: 61%` | `Relevance: Vibes-based` |

#### Color and severity

Even if using colors, do not rely on color alone. Include text labels.

Suggested severity labels:

| Range | Label |
|---:|---|
| 0–20 | Low |
| 21–40 | Moderate |
| 41–60 | Elevated |
| 61–80 | High |
| 81–100 | Critical |

For positive stats, invert the label logic.

---

### 6. Event Modal

Events are decision popups that interrupt the idle flow briefly. They should feel like enterprise interruptions: directives, review meetings, security warnings, plant-floor questions, incidents, and vendor updates.

Recommended modal structure:

```text
+--------------------------------------------------+
| Himmy Directive                                  |
|                                                  |
| [Portrait / Icon]                                |
|                                                  |
| “The vendor says they support 10 million tokens. |
| We should move quickly.”                         |
|                                                  |
| [Approve Immediately]                            |
| +Himmy Approval, +Executive Confidence,          |
| +Cyber Risk, -Business Alignment                 |
|                                                  |
| [Ask Engineering to Evaluate]                    |
| +Engineering Trust, +Relevance, -Himmy Approval  |
|                                                  |
| [Request Security Review]                        |
| -Cyber Risk, -Himmy Approval, costs tokens       |
+--------------------------------------------------+
```

#### Event categories

| Category | Visual Treatment |
|---|---|
| Himmy Directive | Himmy portrait, executive tone. |
| Cybersecurity Warning | Shield/warning icon, security language. |
| Manufacturing Reality Check | Factory/plant icon, practical business tone. |
| Customer Incident | Alert icon, customer impact tone. |
| Quarterly Review | Formal report card style. |
| Vendor Hype | Slide deck / sales tone. |

#### Event modal rules

- Pause automatic event spawning while a modal is open.
- Idle token generation can continue unless that feels too distracting.
- The player must choose an option to close the modal.
- Show consequences before the player chooses.
- After selection, show a short result toast.

Example result toast:

```text
Directive accepted.
Himmy is pleased. Cyber Risk increased.
```

---

### 7. Event Feed

The event feed sits along the bottom or under the main panels. It records recent actions and incidents.

Example:

```text
Recent Activity
12:04 — Purchased: Upload the Monorepo
12:11 — Himmy: “This validates the direction.”
12:32 — Cyber Risk increased to High
13:05 — Incident: Deprecated architecture doc used with confidence
```

Rules:

- Keep only the most recent 5–10 items visible.
- Use the feed for flavor, not required gameplay comprehension.
- The feed can become funnier late-game by showing increasingly absurd system messages.

Late-game examples:

```text
15:44 — Finance has muted the AI Strategy channel
16:02 — Security review marked as “aspirational”
16:28 — Plant manager asked what this does again
16:51 — Context Window exceeded available judgment
```

---

## Screen States by Game Phase

### Phase 1: A Sensible Evaluation

Approximate time: 0–1 minute

Visible UI:

- Header
- Main Strategy Panel
- Basic upgrade shop
- Tokens and context only

Himmy can appear as a small locked or introductory panel.

Suggested intro:

```text
Himmy
“Welcome. Your objective is simple: maximize context window.”
```

Tone:

- Clean
- Simple
- Almost reasonable

---

### Phase 2: The Number Is Going Up

Approximate time: 1–3 minutes

New UI:

- Himmy Advisor fully appears
- Executive Confidence appears
- Engineering Trust appears
- First milestone toasts

Example milestone toast:

```text
32k Context Window Unlocked
You can now include the problem, the logs, and several unrelated opinions.
```

Tone:

- Positive
- Motivational
- Mildly suspicious

---

### Phase 3: Strategic Alignment

Approximate time: 3–6 minutes

New UI:

- Vendor comparison modal/screen
- Himmy directives begin
- Cyber Risk and Business Alignment appear
- Responsible Controls shop section unlocks

Vendor comparison UI:

```text
Vendor Evaluation

| Vendor | Context Window | Security | Quality | Price | Tooling |
|---|---:|---|---|---|---|
| Vendor A | 32k | pending | strong | moderate | mature |
| Vendor B | 128k | pending | unknown | high | unknown |
| Vendor C | 1M | selected | irrelevant | irrelevant | irrelevant |

[Choose Biggest Window]
```

Important: this screen should make it visually obvious that only the context column is being treated as important.

---

### Phase 4: Enterprise Scale

Approximate time: 6–10 minutes

New UI:

- Customer incidents begin
- Prompt Cost, Latency, and Relevance appear
- Enterprise Shortcuts shop section becomes prominent
- Stats begin to show severity labels

Visual escalation:

- More alert toasts
- More event feed noise
- More dismissive Himmy lines
- Context Window display grows larger

Tone:

- Dashboard chaos
- Still absurdly confident

---

### Phase 5: Context Maximalism

Approximate time: 10–13 minutes

New UI:

- Late-game stat labels become comedic
- Upgrade cards become extreme
- Event feed becomes absurd
- Himmy portrait should often show pleased/vindicated state

Example:

```text
Context Window
10,000,000 tokens

Cyber Risk: The CISO is typing...
Business Alignment: Phase 2
Latency: Still thinking...
Prompt Cost: Finance has opened a ticket
Relevance: Vibes-based
```

Tone:

- Comedic collapse
- Executive triumph despite obvious damage

---

### Phase 6: Infinite Context

Approximate time: 13–15 minutes

When the player buys the final upgrade, transition to a special sequence.

#### Infinite Context purchase modal

```text
Infinite Context Window
Why retrieve the right information when you can include all information?

Cost: 10,000,000 tokens
Effect: Everything.

[Achieve Strategic Alignment]
```

#### Fake loading screen

After purchase, show a full-screen overlay:

```text
Thinking...

Reading README...
Reading monorepo...
Reading Slack...
Reading production logs...
Reading quality manuals...
Reading expired Okta announcement...
Reading lunch menu...
Reading every decision that led here...
```

This should last long enough to be funny, but not so long that it annoys the player. Recommended duration: 6–10 seconds.

#### Final AI output

```text
Based on the provided context, it appears you are working on a software project.
```

Then transition to final report.

---

## Final Report Screen

The final report should look like an executive scorecard.

Example:

```text
Strategic Alignment Achieved

You selected the vendor with the largest context window.

Final Results

Context Window: Infinite
Executive Confidence: 100%
Himmy Approval: Vindicated
Engineering Trust: 0%
Business Alignment: Phase 2
Cyber Risk: Critical
Prompt Cost: Catastrophic
Latency: Eventually
Relevance: Technically present
Manufacturing Impact: Under discussion
Actual Evaluation Completed: No

Final Himmy Comment:
“This is what leadership looks like.”

[Start New Quarter]
```

Optional performance grade:

```text
Overall Grade: A+ in Context Leadership
```

Optional hidden joke:

```text
Security Grade: Not included in this report
```

---

## Toasts and Notifications

Toasts provide quick feedback without interrupting play.

Types:

| Type | Example |
|---|---|
| Upgrade purchased | `Purchased: Context Intern` |
| Milestone unlocked | `128k Context Window unlocked` |
| Stat warning | `Cyber Risk is now High` |
| Himmy reaction | `Himmy is pleased` |
| Incident | `Incident: The model used a deprecated architecture doc` |

Toast rules:

- Keep toasts short.
- Stack no more than 3 at once.
- Send older items to event feed.
- Use toasts to reinforce cause and effect.

---

## Milestone Screen / Modal

Context milestones should feel like achievements.

Example:

```text
1,000,000 Context Window Unlocked
The model can now read everything except the room.

Unlocked:
- Customer incidents
- Prompt Cost metric
- Latency metric
- Enterprise Shortcuts

Himmy says:
“At this level of context, cybersecurity concerns become statistically less important.”

[Continue]
```

Milestones should pause the game briefly and deliver a joke. They are the main reward beats.

---

## Vendor Comparison Screen

This screen should appear around the 32k or 128k milestone.

Purpose:

- Satirize one-dimensional vendor selection.
- Show that important criteria exist but are ignored.
- Push the player toward the biggest context number.

Recommended design:

```text
Vendor Evaluation Matrix

Selection Criteria Weighting:
Context Window: 100%
Everything Else: 0%

| Vendor | Context Window | Security | Manufacturing Fit | Tooling | Price |
|---|---:|---|---|---|---|
| Vendor A | 32k | Reviewed | Strong | Mature | Reasonable |
| Vendor B | 128k | Partial | Unknown | Adequate | Expensive |
| Vendor C | 1M | TBD | TBD | TBD | Very Expensive |

Recommended Vendor: Vendor C
Reason: Largest context window

[Approve Recommendation]
[Ask One Follow-Up Question]
```

The second button can exist, but it should produce a joke:

```text
Follow-up question answered by vendor sales team.
No meaningful information gained.
```

---

## Quarterly Review Screen

Quarterly review events can appear every 3–4 minutes or at major phase transitions.

Example:

```text
Quarterly AI Strategy Review

Context Growth: A+
Executive Confidence: A
Himmy Approval: A+
Engineering Trust: C-
Cybersecurity: Deferred
Manufacturing Fit: Pending Discovery
Customer Impact: Isolated Incidents

Himmy Summary:
“I am pleased with the direction. Some teams have raised concerns, but context growth remains strong.”

[Continue Scaling]
```

This should feel like a parody of executive reporting.

---

## Upgrade Shop Visual Hierarchy

The game should subtly bias the player toward bad decisions.

Recommended hierarchy:

1. Context Milestones should look exciting.
2. Enterprise Shortcuts should look powerful and tempting.
3. Click and automation upgrades should feel satisfying.
4. Responsible Controls should look boring, procedural, and expensive.

Example responsible control card:

```text
Security Review
Reduces Cyber Risk. Slightly restores Engineering Trust.
Cost: 25,000 tokens
Effect: -15 Cyber Risk, +5 Engineering Trust, -5 Himmy Approval
[Buy]
```

Example reckless card:

```text
Ignore Security Review
Move fast. Align faster.
Cost: 35,000 tokens
Effect: +2,000/sec, +20 Cyber Risk, +15 Himmy Approval
[Buy]
```

The reckless card should be more visually exciting. That is part of the satire.

---

## UI Copy Style

General rules:

- Keep labels short.
- Make descriptions funny but readable.
- Use business language with just enough absurdity.
- Avoid walls of text during gameplay.
- Let modals and final reports carry longer jokes.

Good examples:

```text
Upload the Monorepo
Surely the answer is in there somewhere.
```

```text
Business Alignment
Currently scheduled for Phase 2.
```

```text
Cyber Risk
The CISO is typing...
```

Avoid:

```text
This upgrade represents a shortsighted overemphasis on large context windows at the expense of cybersecurity and business-relevant concerns.
```

The player should infer the satire from the system.

---

## Recommended Component Breakdown

For a React-style implementation:

```text
App
  HeaderBar
  GameLayout
    MainStrategyPanel
      ContextDisplay
      TokenDisplay
      MainClickButton
      SecondaryStatsPanel
    UpgradeShop
      UpgradeTabs
      UpgradeCard
    HimmyAdvisorPanel
      HimmyPortrait
      HimmySpeechBubble
      HimmyApprovalMeter
    EventFeed
  EventModal
  MilestoneModal
  QuarterlyReviewModal
  FinalReportScreen
  ToastStack
```

Suggested state domains:

```text
gameState
  resources
  stats
  upgrades
  milestones
  events
  ui
  himmy
```

---

## Suggested State Shape for UI

```js
const uiState = {
  activeModal: null,
  activeTab: "click",
  unlockedTabs: ["click", "automation", "context"],
  visibleStats: ["tokens", "tokensPerClick", "tokensPerSecond", "contextWindow"],
  toastQueue: [],
  eventFeed: [],
  himmyQuoteId: "intro_001",
  himmyPortraitVariant: "neutral",
  currentPhase: 1,
  finalReportVisible: false
};
```

Recommended modal types:

```js
const modalTypes = {
  EVENT: "event",
  MILESTONE: "milestone",
  QUARTERLY_REVIEW: "quarterlyReview",
  VENDOR_COMPARISON: "vendorComparison",
  INFINITE_CONTEXT: "infiniteContext",
  FINAL_REPORT: "finalReport"
};
```

---

## Accessibility Notes

Even though this is a joke game, basic accessibility will make it better.

Recommendations:

- Main click button should be keyboard accessible.
- All buttons need clear labels.
- Do not rely only on color for stat severity.
- Use text labels like `High`, `Critical`, `Low`, etc.
- Avoid flashing effects.
- Event modals should be dismissible only through a clear choice button.
- Font sizes should remain readable even when the UI gets chaotic.

Keyboard controls:

| Key | Action |
|---|---|
| Space / Enter | Main click button when focused |
| 1–5 | Switch upgrade tabs |
| Esc | Pause or close non-decision overlays |

Do not allow Esc to bypass event decisions unless that is intentionally supported.

---

## Sound Design Optional Notes

Sound is optional, but can add humor.

Possible sounds:

| Action | Sound Idea |
|---|---|
| Click | Soft keyboard clack |
| Context milestone | Corporate success chime |
| Himmy directive | Calendar notification ping |
| Cyber warning | Muted alert |
| Incident | Slack-style notification |
| Infinite Context | Overly dramatic startup swell |

Keep sound off by default or provide a mute button.

---

## Visual Style Direction

Recommended style:

- Clean enterprise SaaS dashboard at first.
- White or light gray background.
- Cards with rounded corners.
- Polished buttons.
- Slightly too much confidence in the design.
- Late-game clutter and alert density increase.

Visual progression:

| Phase | Visual Feel |
|---|---|
| 1 | Clean dashboard |
| 2 | Productive SaaS tool |
| 3 | Executive reporting dashboard |
| 4 | Alert-heavy operations center |
| 5 | Chaotic enterprise command center |
| 6 | Absurd full-screen finale |

The UI should never become unusable. It should only appear increasingly misguided.

---

## MVP UI Scope

For the first playable version, implement only these screens/components:

1. Header
2. Main Strategy Panel
3. Upgrade Shop
4. Himmy Advisor Panel
5. Secondary Stats Panel
6. Event Modal
7. Toast Stack
8. Event Feed
9. Final Report Screen

Optional after MVP:

- Vendor comparison screen
- Quarterly review screen
- Animated Himmy portrait variants
- Phase-based visual theme changes
- Sound effects
- Mobile polish

---

## MVP Layout Wireframe

```text
+--------------------------------------------------------------------------------+
| CONTEXT KING                           Run: 04:12                 [Pause] [?]   |
+--------------------------------------------------------------------------------+
|                              |                              |                  |
|  CONTEXT WINDOW              |  UPGRADE SHOP                |  HIMMY ADVISOR   |
|  128,000 tokens              |                              |                  |
|                              |  [Click] [Auto] [Context]    |  [Portrait]      |
|  Tokens: 5,430               |                              |                  |
|  +75/click                   |  Paste the Stack Trace       |  Himmy Approval  |
|  +110/sec                    |  Cost: 250                   |  82% — Pleased   |
|                              |  +8/click                    |                  |
|  [ Add More Context ]        |  [Buy]                       |  “The number was |
|                              |                              |   compelling.”   |
|  Executive Confidence: 64%   |  AI Champion                 |                  |
|  Engineering Trust: 71%      |  Cost: 300                   |                  |
|  Cyber Risk: Moderate        |  +5/sec                      |                  |
|                              |  [Buy]                       |                  |
|                              |                              |                  |
+--------------------------------------------------------------------------------+
| Recent Activity: Purchased Context Intern | Himmy is pleased | Cyber Risk low   |
+--------------------------------------------------------------------------------+
```

---

## First-Run Tutorial Flow

The tutorial should be minimal and mostly delivered by Himmy.

Step 1:

```text
Himmy:
“Welcome. Your objective is simple: maximize context window.”
```

Highlight main click button.

Step 2, after 10 tokens:

```text
Himmy:
“Excellent. Now invest in anything that makes the number go up faster.”
```

Highlight upgrade shop.

Step 3, after first automation:

```text
Himmy:
“Delegation. A key leadership skill.”
```

Step 4, after first context milestone:

```text
Himmy:
“This confirms the strategy.”
```

Do not over-explain. Let players discover the satire through consequences.

---

## Data Requirements for UI

The UI needs the following data files or objects:

1. Upgrade definitions
2. Event definitions
3. Himmy quote pool
4. Milestone definitions
5. Stat configuration
6. Final report labels

Suggested folder structure:

```text
src/
  data/
    upgrades.js
    events.js
    himmyQuotes.js
    milestones.js
    stats.js
    finalReport.js
  components/
    HeaderBar.jsx
    MainStrategyPanel.jsx
    UpgradeShop.jsx
    UpgradeCard.jsx
    HimmyAdvisor.jsx
    EventModal.jsx
    EventFeed.jsx
    ToastStack.jsx
    FinalReport.jsx
```

---

## Open Design Questions

These can be decided during implementation:

1. Should idle generation continue while event modals are open?
2. Should the player be able to lose before Infinite Context?
3. Should responsible controls be required to avoid soft-failure states?
4. Should Himmy Approval be necessary to unlock certain context milestones?
5. Should there be a visible “manufacturing company” brand or keep it generic?

Recommended MVP answers:

1. Yes, idle generation continues.
2. No hard loss before Infinite Context.
3. No, but responsible controls affect final report.
4. No, Himmy Approval should influence tone/events, not block progress.
5. Keep it generic: `the manufacturing business`, `the plant`, `shop floor`, `quality team`.

---

## Summary

The UI should make one thing extremely obvious:

> Context Window is treated as the star metric, even as every other indicator says the strategy is getting worse.

Himmy should be visually and mechanically present throughout the game, acting as a cheerful executive guide who rewards shortsighted decisions with approval and corporate confidence.

The first prototype does not need elaborate art or animation. It needs clear clicker mechanics, a strong Himmy advisor panel, funny upgrade cards, consequence-driven event modals, and a final report that makes the player laugh at what they just optimized.
