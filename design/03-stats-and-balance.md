# Himmy Game — Section 03: Stats and Balance

## Purpose

This file defines the mechanical balance for the first playable prototype of **Context King**, a 10–15 minute browser-based idle/clicker satire game.

The goal is to make the player feel the classic clicker progression:

1. Manual clicking feels productive immediately.
2. Click upgrades arrive quickly.
3. Automation appears within the first minute.
4. Context window milestones create visible progress.
5. Bad executive choices create short-term acceleration and long-term chaos.
6. Responsible choices exist, but they are less flashy and less satisfying.
7. The run ends with **Infinite Context** and an absurd final report.

The balance should reinforce the joke:

> The player is rewarded for maximizing context window size while secondary business, engineering, cybersecurity, and manufacturing concerns deteriorate.

---

## Core Design Principle

Do **not** make context window size the main currency.

Use this separation:

| Value | Role |
|---|---|
| `tokens` | Main spendable currency earned from clicks and automation. |
| `contextWindow` | Vanity metric increased by milestone purchases. |
| `tokensPerClick` | Manual click income. |
| `tokensPerSecond` | Passive idle income. |
| Secondary stats | Consequences of bad strategy. |

This lets clicking feel good without making the satire number inflate too quickly.

---

# 1. Primary Stats

## `tokens`

The main currency.

### Starting value

```js
const STARTING_TOKENS = 0;
```

### Earned by

- Manual clicking.
- Passive automation upgrades.
- Some event choices.
- Temporary Himmy approval buffs.

### Spent on

- Click power upgrades.
- Automation upgrades.
- Context milestone upgrades.
- Reckless enterprise upgrades.
- Responsible controls.

### Display format

| Range | Format |
|---:|---|
| 0–999 | `123` |
| 1,000–999,999 | `12.3K` |
| 1,000,000–999,999,999 | `4.5M` |
| 1,000,000,000+ | `1.2B` |

The game should never require scientific notation during a normal 10–15 minute run.

---

## `tokensPerClick`

Manual click value.

### Starting value

```js
const STARTING_TOKENS_PER_CLICK = 1;
```

### Early target

Manual clicking should remain meaningful for the first 3–5 minutes, then become secondary to automation.

### Suggested curve

| Time | Target Tokens Per Click |
|---:|---:|
| 0:00 | 1 |
| 1:00 | 5–10 |
| 3:00 | 25–75 |
| 6:00 | 150–400 |
| 10:00 | 1,000–3,000 |
| 15:00 | 10,000+ |

Clicks should still feel satisfying late-game but should not be the primary source of income after automation ramps.

---

## `tokensPerSecond`

Passive income from automation.

### Starting value

```js
const STARTING_TOKENS_PER_SECOND = 0;
```

### Unlock target

The first passive generator should be affordable within 45–75 seconds.

### Suggested curve

| Time | Target Tokens Per Second |
|---:|---:|
| 0:00 | 0 |
| 1:00 | 1–5 |
| 3:00 | 25–100 |
| 6:00 | 500–2,500 |
| 10:00 | 10,000–50,000 |
| 15:00 | 250,000+ |

The game should accelerate sharply after the 1M context milestone.

---

## `contextWindow`

The headline vanity metric.

### Starting value

```js
const STARTING_CONTEXT_WINDOW = 4000;
```

### Important rule

Context window should increase only through major milestone upgrades. It should not increase every click.

### Milestone curve

| Milestone | Display | Target Unlock Time | Notes |
|---:|---|---:|---|
| 4,000 | `4K` | 0:00 | Starting point. |
| 8,000 | `8K` | 0:45–1:15 | First milestone. |
| 32,000 | `32K` | 2:00–3:00 | Vendor comparison unlock. |
| 128,000 | `128K` | 4:00–5:00 | Secondary stats become harder to ignore. |
| 1,000,000 | `1M` | 6:30–8:00 | Cyber and manufacturing incidents begin. |
| 10,000,000 | `10M` | 9:00–11:00 | UI starts becoming absurd. |
| 100,000,000 | `100M` | 12:00–14:00 | Endgame tier. |
| Infinity | `∞` | 14:00–15:00 | Final upgrade and ending. |

---

# 2. Secondary Stats

Secondary stats create consequences. They should not prevent progress too aggressively, because the main experience is satire, not punishment.

All percentage-like secondary stats should use a 0–100 range unless otherwise stated.

## `executiveConfidence`

Represents leadership excitement about the AI strategy.

### Starting value

```js
const STARTING_EXECUTIVE_CONFIDENCE = 10;
```

### Direction

Higher is funnier, but not always good.

### Increases when

- Context window increases.
- Himmy directives are followed.
- Vendor hype upgrades are purchased.
- Responsible analysis is deferred.
- Cybersecurity concerns are reframed as blockers.

### Decreases when

- Actual evaluation is performed.
- Security review slows rollout.
- Engineers are listened to.
- Manufacturing use cases are scoped properly.

### Effects

Executive Confidence can provide temporary income boosts, but it should also correlate with worse governance.

Suggested effect:

```js
const executiveMultiplier = 1 + executiveConfidence / 250;
```

At 100 Executive Confidence, this gives a 1.4x token/sec multiplier.

This is intentionally useful, because the game should reward questionable behavior.

---

## `himmyApproval`

Represents how pleased Himmy is with the player.

### Starting value

```js
const STARTING_HIMMY_APPROVAL = 25;
```

### Increases when

- Context milestones are purchased.
- Player selects the largest-context option.
- Player ignores security objections.
- Player dismisses engineering nuance.
- Player prioritizes speed and optics.

### Decreases when

- Player funds security controls.
- Player runs proper evals.
- Player improves manufacturing alignment.
- Player reduces cyber risk.

### Effects

Himmy Approval should unlock comedic buffs and commentary.

Suggested passive effect:

```js
const himmyMultiplier = 1 + himmyApproval / 300;
```

At 100 Himmy Approval, this gives a 1.33x token/sec multiplier.

Suggested event effect:

- At `himmyApproval >= 75`, Himmy directive events become more frequent.
- At `himmyApproval <= 20`, Himmy becomes disappointed and may increase context milestone costs by 10% temporarily.

This creates pressure to stay aligned with bad advice.

---

## `engineeringTrust`

Represents whether engineers believe leadership is making sane technical decisions.

### Starting value

```js
const STARTING_ENGINEERING_TRUST = 100;
```

### Decreases when

- Engineering concerns are dismissed.
- The player buys reckless context upgrades.
- Latency and cost become obviously bad.
- Security concerns are ignored.
- Manufacturing needs are hand-waved.

### Increases when

- Player runs evals.
- Player buys security controls.
- Player scopes realistic use cases.
- Player chooses relevance over raw context.

### Effects

Engineering Trust should not immediately hard-fail the player, but low trust should make the run more chaotic.

Suggested thresholds:

| Engineering Trust | Effect |
|---:|---|
| 75–100 | No penalty. |
| 50–74 | Responsible upgrades cost 10% less. Engineers are still trying. |
| 25–49 | Incident chance +10%. Some event options become sarcastic. |
| 1–24 | Incident chance +25%. Automation reliability penalty. |
| 0 | Triggers “Engineers Revolt” warning, but not immediate loss unless chosen. |

Suggested low-trust automation penalty:

```js
const trustAutomationMultiplier = engineeringTrust < 25 ? 0.9 : 1;
```

Keep this light. The game should remain playable even if trust collapses.

---

## `businessAlignment`

Represents fit with the actual manufacturing company.

### Starting value

```js
const STARTING_BUSINESS_ALIGNMENT = 85;
```

### Decreases when

- The player buys generic AI hype upgrades.
- The player ignores plant-floor workflows.
- Manufacturing use cases are deferred.
- Domain-specific requirements are dismissed.
- The vendor is selected only by context window size.

### Increases when

- The player scopes manufacturing use cases.
- The player invests in ERP/MES integration.
- The player supports SOP lookup, quality workflows, maintenance troubleshooting, or auditability.
- The player runs a practical pilot.

### Effects

Business Alignment affects final scoring and event weighting more than moment-to-moment income.

Suggested thresholds:

| Business Alignment | Effect |
|---:|---|
| 75–100 | Few manufacturing complaints. |
| 50–74 | Manufacturing reality events enter the event pool. |
| 25–49 | Customer/plant incidents become more common. |
| 1–24 | Quarterly reviews become absurdly disconnected from reality. |
| 0 | End report shows “Manufacturing Impact: Theoretically Transformational.” |

---

## `cyberRisk`

Represents accumulated cybersecurity and data governance risk.

### Starting value

```js
const STARTING_CYBER_RISK = 0;
```

### Direction

Higher is worse.

### Increases when

- Internal data is dumped into prompts.
- Production logs are uploaded.
- Customer tickets are included.
- Architecture diagrams are included.
- Security review is skipped.
- Vendor claims are accepted without validation.
- Context window grows without access controls.

### Decreases when

- Player buys redaction, access controls, review, retrieval boundaries, or data classification.
- Player chooses security-conscious event options.

### Effects

Cyber Risk controls incident probability.

Suggested thresholds:

| Cyber Risk | Effect |
|---:|---|
| 0–20 | Security events rare. |
| 21–40 | Security warnings enter normal event pool. |
| 41–60 | Minor cyber incidents can occur. |
| 61–80 | Major cyber incidents can occur. |
| 81–99 | Incidents are frequent and severe. |
| 100 | Triggers “Security Team Escalation” event. |

Cyber Risk should be clamped between 0 and 100.

```js
cyberRisk = clamp(cyberRisk, 0, 100);
```

---

## `relevance`

Represents how much of the giant context window is actually useful.

### Starting value

```js
const STARTING_RELEVANCE = 100;
```

### Decreases when

- Large irrelevant datasets are added.
- Slack threads are included.
- Historical tickets are included indiscriminately.
- Deprecated documentation is added.
- Context grows faster than curation.

### Increases when

- Player buys retrieval, ranking, evals, pruning, or domain-specific scoping.

### Effects

Relevance affects click and automation efficiency.

Suggested formula:

```js
const relevanceMultiplier = 0.5 + relevance / 200;
```

This gives:

| Relevance | Multiplier |
|---:|---:|
| 100 | 1.00x |
| 75 | 0.875x |
| 50 | 0.75x |
| 25 | 0.625x |
| 0 | 0.50x |

Even at 0 relevance, the game continues. The output is just nonsense.

---

## `latencySeconds`

Represents model response time.

### Starting value

```js
const STARTING_LATENCY_SECONDS = 1.0;
```

### Increases when

- Context window grows.
- Reckless enterprise upgrades are purchased.
- Prompt payloads become huge.

### Decreases when

- Player buys prompt pruning, retrieval, caching, or optimization.

### Suggested calculation

Latency should be partly formula-driven and partly affected by upgrades.

```js
const baseLatency = 1.0;
const contextLatency = Math.log10(contextWindow / 4000) * 2.2;
const riskLatency = cyberRisk / 35;
const upgradeLatency = purchasedUpgradeLatencyPenalty;

latencySeconds = baseLatency + contextLatency + riskLatency + upgradeLatency;
```

Suggested display states:

| Latency | Display |
|---:|---|
| 0–3 sec | `1.8 sec` |
| 3–10 sec | `7.4 sec` |
| 10–30 sec | `22.1 sec` |
| 30–60 sec | `Still thinking...` |
| 60+ sec | `Eventually` |
| Infinite Context | `∞` |

Latency should be funny more than punitive. Avoid making the click button actually wait.

---

## `promptCostDollars`

Represents estimated cost per prompt.

### Starting value

```js
const STARTING_PROMPT_COST_DOLLARS = 0.01;
```

### Increases when

- Context window grows.
- More data is stuffed into prompts.
- Enterprise upgrades are purchased.

### Decreases when

- Player buys retrieval, pruning, caching, or cost controls.

### Suggested calculation

```js
const contextCost = 0.01 * Math.pow(contextWindow / 4000, 0.55);
const riskCost = 1 + cyberRisk / 150;
const upgradeCost = purchasedUpgradeCostPenalty;

promptCostDollars = contextCost * riskCost + upgradeCost;
```

Suggested display states:

| Cost | Display |
|---:|---|
| < $1 | `$0.42 / prompt` |
| $1–$99 | `$12.45 / prompt` |
| $100–$999 | `$418 / prompt` |
| $1,000+ | `Finance opened a ticket` |
| Infinite Context | `Catastrophic` |

---

# 3. Derived Income Formula

Use a simple, tunable formula.

## Manual click income

```js
function getClickGain(state) {
  return state.tokensPerClick
    * getExecutiveMultiplier(state)
    * getHimmyMultiplier(state)
    * getRelevanceMultiplier(state)
    * getTemporaryClickMultiplier(state);
}
```

## Passive income per second

```js
function getTokensPerSecondEffective(state) {
  return state.tokensPerSecond
    * getExecutiveMultiplier(state)
    * getHimmyMultiplier(state)
    * getRelevanceMultiplier(state)
    * getEngineeringTrustMultiplier(state)
    * getTemporaryAutomationMultiplier(state);
}
```

## Recommended multiplier functions

```js
function getExecutiveMultiplier(state) {
  return 1 + state.executiveConfidence / 250;
}

function getHimmyMultiplier(state) {
  return 1 + state.himmyApproval / 300;
}

function getRelevanceMultiplier(state) {
  return 0.5 + state.relevance / 200;
}

function getEngineeringTrustMultiplier(state) {
  if (state.engineeringTrust < 25) return 0.9;
  return 1;
}
```

## Why this works

- Executive Confidence and Himmy Approval reward bad decisions with faster progression.
- Relevance prevents reckless choices from being purely optimal.
- Engineering Trust only lightly penalizes the player, keeping the game fun.
- The player can still reach the ending even with terrible secondary stats.

---

# 4. Upgrade Cost Scaling

Use hand-authored costs for milestone upgrades and early upgrades.

Use scaling formulas for repeatable upgrades.

## Repeatable click upgrade formula

```js
function getClickUpgradeCost(level) {
  return Math.floor(10 * Math.pow(1.55, level));
}
```

Suggested effect:

```js
state.tokensPerClick += Math.ceil(1 + level * 0.8);
```

Alternative simpler effect:

```js
state.tokensPerClick = Math.floor(state.tokensPerClick * 1.25 + 1);
```

## Repeatable automation upgrade formula

```js
function getAutomationUpgradeCost(level) {
  return Math.floor(50 * Math.pow(1.6, level));
}
```

Suggested effect:

```js
state.tokensPerSecond += Math.ceil(1 + level * 2.5);
```

Alternative simpler effect:

```js
state.tokensPerSecond = Math.floor(state.tokensPerSecond * 1.3 + 1);
```

## Repeatable responsible-control formula

Responsible controls should become more expensive as risk grows.

```js
function getSecurityControlCost(state, level) {
  return Math.floor(500 * Math.pow(1.75, level) * (1 + state.cyberRisk / 100));
}
```

Suggested effect:

```js
state.cyberRisk -= 8;
state.himmyApproval -= 4;
state.engineeringTrust += 3;
```

---

# 5. Context Milestone Costs

Milestone costs should be hand-authored for reliable pacing.

| Context Milestone | Cost | Unlock Timing Target | Side Effects |
|---:|---:|---:|---|
| 8K | 100 | 0:45–1:15 | +5 Executive Confidence, +5 Himmy Approval |
| 32K | 750 | 2:00–3:00 | +8 Executive Confidence, +8 Himmy Approval, -3 Engineering Trust |
| 128K | 5,000 | 4:00–5:00 | +12 Executive Confidence, +10 Himmy Approval, -5 Engineering Trust, -3 Relevance |
| 1M | 50,000 | 6:30–8:00 | +15 Executive Confidence, +12 Himmy Approval, +10 Cyber Risk, -8 Business Alignment, -6 Relevance |
| 10M | 1,000,000 | 9:00–11:00 | +20 Executive Confidence, +15 Himmy Approval, +15 Cyber Risk, -12 Business Alignment, -10 Relevance |
| 100M | 8,000,000 | 12:00–14:00 | +25 Executive Confidence, +20 Himmy Approval, +20 Cyber Risk, -15 Business Alignment, -15 Relevance |
| Infinite | 50,000,000 | 14:00–15:00 | Triggers ending |

These numbers assume the upgrade list from `01-upgrades.md` exists and passive generation ramps aggressively after 1M context.

If testing shows the run is too slow, reduce the 10M, 100M, and Infinite costs first.

---

# 6. Target Run Economy

The following table is a target shape, not an exact simulation.

| Time | Tokens Per Click | Tokens Per Second | Typical Available Purchase |
|---:|---:|---:|---|
| 0:00 | 1 | 0 | Bigger Prompt Box |
| 0:30 | 2–3 | 0 | Copy/Paste Confidence |
| 1:00 | 5–10 | 1–5 | 8K Context, Context Intern |
| 2:30 | 25–50 | 20–75 | 32K Context, AI Champion |
| 4:30 | 75–200 | 250–800 | 128K Context, Strategy Meeting |
| 7:00 | 250–600 | 2,500–8,000 | 1M Context, Monorepo Upload |
| 10:00 | 1,000–3,000 | 50,000–125,000 | 10M Context, Context Lakehouse |
| 12:30 | 5,000–10,000 | 200,000–500,000 | 100M Context |
| 14:30 | 10,000+ | 750,000+ | Infinite Context |

The player should usually finish by 15 minutes if they buy mostly reckless upgrades.

A player who buys many responsible controls may finish closer to 16–18 minutes unless those controls create other efficiencies.

---

# 7. Event Weighting

Events should be selected based on game phase and stat conditions.

## Event categories

| Category | When Active | Purpose |
|---|---|---|
| Passive Himmy Commentary | Always | Flavor and pacing. |
| Milestone Speech | On context upgrade | Reward progress with jokes. |
| Himmy Directive | 1:00+ or 32K+ | Push bad choices. |
| Cybersecurity Warning | Cyber Risk 25+ or 128K+ | Introduce cyber satire. |
| Manufacturing Reality Check | Business Alignment below 70 or 128K+ | Tie game to manufacturing company. |
| Incident | Cyber Risk 45+, Business Alignment below 50, or 1M+ | Create consequences. |
| Quarterly Review | Every 3–4 minutes | Summarize absurd strategy. |

## Suggested weighted selection

```js
function getEventWeights(state) {
  const weights = {
    himmyDirective: 40,
    cyberWarning: 0,
    manufacturingReality: 0,
    incident: 0,
    quarterlyReview: 10,
  };

  if (state.contextWindow >= 128000 || state.cyberRisk >= 25) {
    weights.cyberWarning = 20 + Math.floor(state.cyberRisk / 5);
  }

  if (state.contextWindow >= 128000 || state.businessAlignment < 70) {
    weights.manufacturingReality = 20 + Math.floor((100 - state.businessAlignment) / 6);
  }

  if (state.contextWindow >= 1000000 || state.cyberRisk >= 45 || state.businessAlignment < 50) {
    weights.incident = 15 + Math.floor(state.cyberRisk / 4) + Math.floor((100 - state.businessAlignment) / 8);
  }

  return weights;
}
```

## Event cooldowns

```js
const MIN_MODAL_EVENT_GAP_SECONDS = 30;
const EARLY_EVENT_INTERVAL_SECONDS = [60, 90];
const MID_EVENT_INTERVAL_SECONDS = [45, 75];
const LATE_EVENT_INTERVAL_SECONDS = [35, 60];
const PASSIVE_HIMMY_QUOTE_INTERVAL_SECONDS = [20, 40];
```

Milestone speeches can bypass normal event timing but should not stack with other modals.

---

# 8. Failure and Ending Conditions

The prototype should prefer funny endings over hard failure.

## Primary ending

The main ending is triggered when the player purchases **Infinite Context Window**.

This should always be reachable.

```js
if (state.contextWindow === Infinity) {
  triggerEnding("infiniteContext");
}
```

## Soft failure states

Soft failures are warnings, events, or alternate final report lines. They should not usually end the run immediately.

### Cyber Risk 100

Trigger event:

> Security Team Escalation

Effects:

- Freeze risky upgrades for 20 seconds, or
- Add a large cost penalty, or
- Force the player to pick from three bad executive responses.

Do not hard-end the game unless the player chooses the most reckless response.

### Engineering Trust 0

Trigger event:

> Engineers Revolt

Effects:

- Automation -10% until trust is restored, or
- Responsible controls become cheaper, or
- Himmy complains that engineering is resisting transformation.

### Business Alignment 0

Trigger event:

> Manufacturing Reality Collapse

Effects:

- Customer/plant incidents become more common.
- Final report mocks the lack of actual operational impact.

## Optional hard-fail mode

A later version could include hard failure. For the MVP, avoid it.

Possible future hard fails:

| Failure | Trigger |
|---|---|
| Security Review Shutdown | Cyber Risk reaches 100 three times. |
| Engineer Walkout | Engineering Trust stays at 0 for two minutes. |
| Budget Implosion | Prompt Cost exceeds extreme threshold before 10M context. |
| Plant Rejection | Business Alignment reaches 0 before 1M context. |

---

# 9. Final Scoring

At the end, show a satirical report card.

## Score inputs

| Final Metric | Used For |
|---|---|
| Context Window | Main vanity success. |
| Executive Confidence | Executive grade. |
| Himmy Approval | Himmy grade. |
| Engineering Trust | Technical credibility. |
| Business Alignment | Manufacturing usefulness. |
| Cyber Risk | Security posture. |
| Relevance | Actual usefulness. |
| Prompt Cost | Financial sanity. |
| Latency | Practical usability. |

## Suggested final labels

### Context Window

| Value | Label |
|---:|---|
| 4K–128K | Modest |
| 1M | Enterprise-Adjacent |
| 10M | Visionary |
| 100M | Transformational |
| Infinite | Strategically Infinite |

### Engineering Trust

| Value | Label |
|---:|---|
| 75–100 | Reluctantly Cooperative |
| 50–74 | Concerned |
| 25–49 | Muted on Slack |
| 1–24 | Updating Résumés |
| 0 | Gone to Lunch Permanently |

### Cyber Risk

| Value | Label |
|---:|---|
| 0–20 | Controlled |
| 21–40 | Concerning |
| 41–60 | Needs Review |
| 61–80 | Actively On Fire |
| 81–99 | Board-Level Slide |
| 100 | Incident Retrospective Scheduled |

### Business Alignment

| Value | Label |
|---:|---|
| 75–100 | Actually Useful |
| 50–74 | Plausibly Relevant |
| 25–49 | Phase 2 Promise |
| 1–24 | Manufacturing Not Found |
| 0 | Horizontally Transformational |

### Relevance

| Value | Label |
|---:|---|
| 75–100 | Focused |
| 50–74 | Mostly Related |
| 25–49 | Noisy |
| 1–24 | Vibes-Based |
| 0 | Context Soup |

---

# 10. Stat Clamping Rules

Use consistent clamping to avoid broken state.

```js
function clampPercent(value) {
  return Math.max(0, Math.min(100, value));
}
```

Clamp these stats after every upgrade/event:

- `executiveConfidence`
- `himmyApproval`
- `engineeringTrust`
- `businessAlignment`
- `cyberRisk`
- `relevance`

Do not clamp:

- `tokens`
- `tokensPerClick`
- `tokensPerSecond`
- `latencySeconds`
- `promptCostDollars`

Special case:

```js
if (state.contextWindow === Infinity) {
  state.latencySeconds = Infinity;
  state.promptCostDollars = Infinity;
}
```

---

# 11. UI Reveal Timing

Do not show all stats from the beginning.

## Starting UI

Visible at 0:00:

- Tokens
- Tokens per Click
- Tokens per Second
- Context Window
- Himmy advisor panel

## Reveal at 32K context

- Executive Confidence
- Himmy Approval
- Engineering Trust

## Reveal at 128K context

- Business Alignment
- Cyber Risk

## Reveal at 1M context

- Prompt Cost
- Latency
- Relevance

## Reveal at 10M context

Begin comedic display degradation:

- Latency may display as `Still thinking...`
- Cost may display as `Finance opened a ticket`
- Relevance may display as `Vibes-based`
- Engineering Trust may be moved into an `Advanced Metrics` panel as a joke

---

# 12. Recommended State Object

Use a simple central state object.

```js
const initialGameState = {
  tokens: 0,
  tokensPerClick: 1,
  tokensPerSecond: 0,
  contextWindow: 4000,

  executiveConfidence: 10,
  himmyApproval: 25,
  engineeringTrust: 100,
  businessAlignment: 85,
  cyberRisk: 0,
  relevance: 100,

  latencySeconds: 1.0,
  promptCostDollars: 0.01,

  purchasedUpgrades: {},
  unlockedTiers: ["starter"],
  seenEvents: {},
  activeBuffs: [],

  runStartedAt: Date.now(),
  lastModalEventAt: null,
  nextModalEventAt: null,
  lastPassiveQuoteAt: null,
  nextPassiveQuoteAt: null,

  endingTriggered: false,
};
```

---

# 13. Balance Testing Checklist

Use this checklist when tuning the prototype.

## Early game

- Can the player buy the first click upgrade within 10–20 seconds?
- Can the player unlock first automation within 45–75 seconds?
- Does manual clicking feel useful for at least 3 minutes?
- Does the first context milestone arrive quickly enough?

## Mid game

- Does 128K context unlock around 4–5 minutes?
- Do events appear without interrupting too often?
- Is there a noticeable tradeoff between reckless and responsible choices?
- Does automation feel like it is taking over naturally?

## Late game

- Does 1M context arrive around 6:30–8:00?
- Does 10M context arrive around 9:00–11:00?
- Do cyber/manufacturing consequences feel visible but not frustrating?
- Does the game accelerate into the ending rather than drag?

## Endgame

- Is Infinite Context reachable by 14–15 minutes with reckless play?
- Does responsible play remain possible, even if slower?
- Does the final report reflect how the player behaved?
- Does the final output joke land clearly?

---

# 14. MVP Balance Constants

Use these constants as a practical starting point.

```js
export const BALANCE = {
  startingTokens: 0,
  startingTokensPerClick: 1,
  startingTokensPerSecond: 0,
  startingContextWindow: 4000,

  startingExecutiveConfidence: 10,
  startingHimmyApproval: 25,
  startingEngineeringTrust: 100,
  startingBusinessAlignment: 85,
  startingCyberRisk: 0,
  startingRelevance: 100,
  startingLatencySeconds: 1.0,
  startingPromptCostDollars: 0.01,

  contextMilestones: [
    { context: 8000, cost: 100 },
    { context: 32000, cost: 750 },
    { context: 128000, cost: 5000 },
    { context: 1000000, cost: 50000 },
    { context: 10000000, cost: 1000000 },
    { context: 100000000, cost: 8000000 },
    { context: Infinity, cost: 50000000 },
  ],

  eventTiming: {
    minModalGapSeconds: 30,
    passiveQuoteMinSeconds: 20,
    passiveQuoteMaxSeconds: 40,
    earlyEventMinSeconds: 60,
    earlyEventMaxSeconds: 90,
    midEventMinSeconds: 45,
    midEventMaxSeconds: 75,
    lateEventMinSeconds: 35,
    lateEventMaxSeconds: 60,
  },

  multipliers: {
    executiveDivisor: 250,
    himmyDivisor: 300,
    relevanceBase: 0.5,
    relevanceDivisor: 200,
    lowTrustThreshold: 25,
    lowTrustAutomationMultiplier: 0.9,
  },
};
```

---

# 15. MVP Recommendations

For the first playable version, prioritize these mechanics:

1. Tokens, tokens per click, tokens per second.
2. Context milestone purchases.
3. Himmy Approval and Executive Confidence multipliers.
4. Engineering Trust, Business Alignment, Cyber Risk, and Relevance as visible consequence stats.
5. Prompt Cost and Latency as funny display metrics.
6. Event selection based on context tier and risk stats.
7. Final report card based on ending stats.

Avoid overbuilding in the first prototype:

- Do not add prestige/reset mechanics yet.
- Do not add a full tech tree yet.
- Do not make hard-failure states yet.
- Do not simulate actual prompt processing.
- Do not make latency slow down the real UI.

The prototype should feel fast, funny, and slightly cursed.

