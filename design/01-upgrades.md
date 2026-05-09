# Himmy Game Design — 01 Upgrades

## Purpose of this section

This file defines the upgrade progression for the first playable prototype of **Context King**, a 10–15 minute browser-based satirical idle/clicker game about an executive AI strategy built around one vanity metric: context window size.

The upgrades should create the classic clicker rhythm:

1. Early rapid clicking.
2. First click-power upgrades.
3. First autoclicker / passive generation.
4. Context window milestones that unlock new tiers.
5. Increasingly reckless enterprise upgrades.
6. A late-game sprint toward absurd scale.
7. Final upgrade: **Infinite Context Window**.

The upgrade design should reward the player mechanically for making obviously questionable strategic choices.

---

## Core currencies and stats referenced by upgrades

### Primary progression values

| Stat | Purpose |
|---|---|
| `tokens` | Main currency earned by clicking and passive generation. Spent on upgrades. |
| `tokensPerClick` | Amount earned per manual click. |
| `tokensPerSecond` | Passive token income. |
| `contextWindow` | The headline vanity metric. Increased only through major milestone upgrades. |

### Satirical secondary stats

| Stat | Starting Value | Direction |
|---|---:|---|
| `executiveConfidence` | 10 | Higher is funnier, but not necessarily better. |
| `himmyApproval` | 25 | Goes up when the player prioritizes context over everything else. |
| `engineeringTrust` | 100 | Drops when decisions ignore practical concerns. |
| `businessAlignment` | 85 | Measures fit for the manufacturing company’s real needs. |
| `cyberRisk` | 0 | Rises when the player uploads sensitive/internal data or skips controls. |
| `relevance` | 100 | Drops as more irrelevant content is stuffed into context. |
| `latencySeconds` | 1.0 | Rises as context grows and reckless upgrades are purchased. |
| `promptCostDollars` | 0.01 | Rises as context grows and more data is included. |

The player should not see every stat immediately. Early game should emphasize `contextWindow`, `tokens`, `tokensPerClick`, and `tokensPerSecond`. Secondary stats should appear as the strategy becomes harder to ignore.

---

## Progression timing targets

These are rough targets for a 10–15 minute session.

| Time | Target Milestone | Player Experience |
|---:|---|---|
| 0:00 | 4k context | Manual clicking begins. |
| 0:45–1:15 | 8k context | First meaningful upgrade. |
| 2:00–3:00 | 32k context | First automation loop is active. |
| 4:00–5:00 | 128k context | Himmy directives and secondary stats appear. |
| 6:30–8:00 | 1M context | Cyber/manufacturing consequences become visible. |
| 9:00–11:00 | 10M context | Reckless enterprise upgrades dominate. |
| 12:00–14:00 | 100M context | UI and metrics become absurd. |
| 14:00–15:00 | Infinite context | Ending sequence. |

---

## Upgrade categories

The prototype should support five upgrade categories:

1. **Click Power** — increases `tokensPerClick`.
2. **Automation** — increases `tokensPerSecond`.
3. **Context Milestones** — increases `contextWindow` and unlocks new tiers.
4. **Enterprise Recklessness** — powerful upgrades with major negative side effects.
5. **Responsible-but-Boring Controls** — reduce risk or improve business fit, but are less exciting and often reduce Himmy Approval.

---

# 1. Click Power Upgrades

Click power upgrades keep the early game satisfying and give the player something to buy before automation takes over.

| ID | Name | Cost | Unlock | Effect | Flavor Text |
|---|---|---:|---|---|---|
| `click_bigger_prompt_box` | Bigger Prompt Box | 10 | Start | `+1 tokensPerClick` | “A wider text area creates the appearance of deeper thinking.” |
| `click_copy_paste_confidence` | Copy/Paste Confidence | 25 | Start | `+2 tokensPerClick` | “Paste first, understand later.” |
| `click_dual_monitor_prompting` | Dual Monitor Prompting | 100 | 8k context | `+5 tokensPerClick` | “One screen for the prompt, one screen for ignoring concerns.” |
| `click_stack_trace_dump` | Paste the Stack Trace | 250 | 8k context | `+8 tokensPerClick`, `+1 latencySeconds` | “Surely the answer is somewhere in there.” |
| `click_ticket_enrichment` | Paste the Entire Jira Ticket | 750 | 32k context | `+20 tokensPerClick`, `-2 relevance` | “Includes acceptance criteria, comments, and one unresolved argument.” |
| `click_meeting_notes` | Add Meeting Notes | 1,500 | 32k context | `+35 tokensPerClick`, `-3 relevance`, `+2 executiveConfidence` | “The model now knows who had concerns.” |
| `click_architecture_diagram_text` | Describe the Architecture Diagram | 4,000 | 128k context | `+80 tokensPerClick`, `+2 latencySeconds` | “Boxes, arrows, and a cloud labeled ‘platform.’” |
| `click_vendor_whitepaper` | Quote the Vendor Whitepaper | 9,000 | 128k context | `+160 tokensPerClick`, `+5 himmyApproval`, `-3 engineeringTrust` | “A PDF said this was transformational.” |
| `click_paste_monorepo_snippets` | Paste Monorepo Snippets | 22,000 | 1M context | `+350 tokensPerClick`, `+3 cyberRisk`, `-4 relevance` | “Not the whole monorepo yet. Just the parts nobody understands.” |
| `click_customer_log_chunk` | Add Customer Log Chunk | 50,000 | 1M context | `+800 tokensPerClick`, `+8 cyberRisk`, `+3 latencySeconds` | “Debugging improves when boundaries disappear.” |
| `click_everything_from_clipboard` | Paste Everything from Clipboard | 125,000 | 10M context | `+2,000 tokensPerClick`, `+10 cyberRisk`, `-5 businessAlignment` | “Nobody remembers what was copied, which makes it comprehensive.” |
| `click_context_manifesto` | Recite the Context Manifesto | 300,000 | 10M context | `+5,000 tokensPerClick`, `+10 executiveConfidence`, `+10 himmyApproval` | “A larger window is not a feature. It is a philosophy.” |

---

# 2. Automation Upgrades

Automation upgrades create the idle/clicker transition. The first one should be available quickly, ideally within the first minute.

| ID | Name | Cost | Unlock | Effect | Flavor Text |
|---|---|---:|---|---|---|
| `auto_context_intern` | Context Intern | 50 | Start | `+1 tokensPerSecond` | “A junior employee pastes things at a sustainable pace.” |
| `auto_prompt_macro` | Prompt Macro | 150 | 8k context | `+4 tokensPerSecond` | “Ctrl+A, Ctrl+C, Ctrl+V, strategy.” |
| `auto_ai_champion` | AI Champion | 300 | 8k context | `+8 tokensPerSecond`, `+2 executiveConfidence` | “Volunteers to be excited in every meeting.” |
| `auto_context_bot` | Context Automation Bot | 1,000 | 32k context | `+30 tokensPerSecond`, `+1 latencySeconds` | “Automatically adds context before anyone asks why.” |
| `auto_weekly_strategy_meeting` | Weekly AI Strategy Meeting | 2,500 | 32k context | `+75 tokensPerSecond`, `+5 executiveConfidence`, `-3 engineeringTrust` | “Creates alignment by consuming calendars.” |
| `auto_vendor_success_manager` | Vendor Success Manager | 5,000 | 128k context | `+150 tokensPerSecond`, `+8 himmyApproval` | “Confirms the roadmap contains your concerns.” |
| `auto_prompt_pipeline` | Prompt Pipeline | 12,000 | 128k context | `+400 tokensPerSecond`, `+2 promptCostDollars` | “Industrialized copy-paste.” |
| `auto_context_harvester` | Context Harvester | 30,000 | 1M context | `+1,000 tokensPerSecond`, `+5 cyberRisk`, `-5 relevance` | “Collects nearby documents whether they help or not.” |
| `auto_slack_scraper` | Slack Thread Scraper | 75,000 | 1M context | `+2,500 tokensPerSecond`, `+10 cyberRisk`, `-8 relevance`, `-5 engineeringTrust` | “Finds decisions that were never decisions.” |
| `auto_enterprise_context_lake` | Enterprise Context Lake | 175,000 | 10M context | `+7,500 tokensPerSecond`, `+15 latencySeconds`, `+12 cyberRisk` | “Like a data lake, but wetter and less governed.” |
| `auto_procurement_alignment_engine` | Procurement Alignment Engine | 300,000 | 10M context | `+12,000 tokensPerSecond`, `+15 executiveConfidence`, `+15 himmyApproval` | “Turns vendor preference into organizational destiny.” |
| `auto_context_fusion_reactor` | Context Fusion Reactor | 750,000 | 100M context | `+40,000 tokensPerSecond`, `+25 cyberRisk`, `+30 latencySeconds`, `-15 businessAlignment` | “Produces energy, heat, and audit findings.” |

---

# 3. Context Milestone Upgrades

Context milestones are the main vanity progression. They should feel like major achievements and should trigger Himmy commentary, UI changes, and new upgrade tiers.

The context window should not increase one click at a time. It should increase through these milestone purchases.

| ID | Name | Cost | Sets Context Window | Unlocks | Effects | Milestone Message |
|---|---|---:|---:|---|---|---|
| `ctx_8k` | 8k Context Window | 100 | 8,000 | Tier 2 click upgrades, first automation | `+5 executiveConfidence`, `+5 himmyApproval` | “You can now include the README, half a stack trace, and one optimistic assumption.” |
| `ctx_32k` | 32k Context Window | 750 | 32,000 | Vendor comparison, first Himmy panel quote rotation | `+10 executiveConfidence`, `+8 himmyApproval`, `-2 engineeringTrust` | “You can now include the problem, the logs, and several unrelated opinions.” |
| `ctx_128k` | 128k Context Window | 5,000 | 128,000 | Himmy directives, business/cyber stats become visible | `+15 executiveConfidence`, `+10 himmyApproval`, `+3 cyberRisk`, `-5 engineeringTrust` | “You can now include the entire sprint, the last retrospective, and Greg’s vacation note.” |
| `ctx_1m` | Million Token Context | 50,000 | 1,000,000 | Customer incidents, reckless enterprise upgrades | `+25 executiveConfidence`, `+15 himmyApproval`, `+10 cyberRisk`, `+5 latencySeconds`, `-10 relevance` | “The model can now read everything except the room.” |
| `ctx_10m` | 10M Context Window | 1,000,000 | 10,000,000 | UI degradation, quarterly review events | `+30 executiveConfidence`, `+20 himmyApproval`, `+20 cyberRisk`, `+15 latencySeconds`, `-15 businessAlignment` | “You can now include every fact the company has ever misunderstood.” |
| `ctx_100m` | 100M Context Window | 5,000,000 | 100,000,000 | Final-tier upgrades, endgame prompt | `+40 executiveConfidence`, `+25 himmyApproval`, `+30 cyberRisk`, `+25 latencySeconds`, `-20 relevance` | “At this scale, relevance becomes a matter of faith.” |
| `ctx_infinite` | Infinite Context Window | 25,000,000 | Infinity | Ending sequence | `executiveConfidence = 100`, `himmyApproval = 100`, `engineeringTrust = 0`, `businessAlignment = 0`, `cyberRisk = 100`, `relevance = undefined`, `latencySeconds = Infinity`, `promptCostDollars = Infinity` | “Why retrieve the right information when you can include all information?” |

---

# 4. Enterprise Recklessness Upgrades

These upgrades should be mechanically powerful and comedically irresponsible. They are the heart of the satire.

They should often increase token generation while hurting cybersecurity, business alignment, relevance, latency, and engineering trust.

| ID | Name | Cost | Unlock | Effect | Flavor Text |
|---|---|---:|---|---|---|
| `reckless_vendor_slide_deck` | Vendor Slide Deck | 500 | 32k context | `+10 executiveConfidence`, `+5 himmyApproval` | “Every concern is addressed by a gradient and a quadrant.” |
| `reckless_strategic_alignment` | Strategic Alignment Announcement | 1,250 | 32k context | `+20 executiveConfidence`, `+10 himmyApproval`, `-5 engineeringTrust` | “The decision is now too public to question efficiently.” |
| `reckless_skip_eval_matrix` | Skip the Evaluation Matrix | 3,000 | 128k context | `+250 tokensPerSecond`, `+15 himmyApproval`, `-10 engineeringTrust`, `-5 businessAlignment` | “Nuance is where momentum goes to die.” |
| `reckless_ignore_security_review` | Ignore Security Review | 8,000 | 128k context | `+600 tokensPerSecond`, `+20 cyberRisk`, `+10 himmyApproval`, `-10 engineeringTrust` | “Security should enable the business by becoming quieter.” |
| `reckless_upload_internal_wiki` | Upload Internal Wiki | 15,000 | 1M context | `+1,200 tokensPerSecond`, `+12 cyberRisk`, `-8 relevance` | “Includes six contradictory pages marked ‘source of truth.’” |
| `reckless_upload_architecture_diagrams` | Upload Architecture Diagrams | 25,000 | 1M context | `+2,000 tokensPerSecond`, `+10 cyberRisk`, `+5 latencySeconds` | “The model now understands the system as it existed three reorganizations ago.” |
| `reckless_feed_customer_tickets` | Feed Customer Tickets | 60,000 | 1M context | `+4,000 tokensPerSecond`, `+20 cyberRisk`, `-10 businessAlignment` | “Customer context is still context.” |
| `reckless_include_production_logs` | Include Production Logs | 100,000 | 10M context | `+8,000 tokensPerSecond`, `+25 cyberRisk`, `+8 latencySeconds` | “Sensitive data is just high-resolution context.” |
| `reckless_slack_everything` | Include All Slack Threads | 150,000 | 10M context | `+10,000 tokensPerSecond`, `+15 cyberRisk`, `-20 relevance`, `-10 engineeringTrust` | “The model has discovered sarcasm, but not intent.” |
| `reckless_disable_data_boundaries` | Disable Data Boundaries | 300,000 | 10M context | `+20,000 tokensPerSecond`, `+35 cyberRisk`, `+20 himmyApproval`, `-20 engineeringTrust` | “Boundaries create friction. Friction slows transformation.” |
| `reckless_board_update` | Board Update: AI Transformation | 750,000 | 100M context | `+30 executiveConfidence`, `+30 himmyApproval`, `+25 tokensPerSecondPercentBoost for 60s` | “The chart goes up and to the right, which is where strategy lives.” |
| `reckless_context_maximalism` | Context Maximalism Program | 2,000,000 | 100M context | `x2 tokensPerSecond`, `+40 cyberRisk`, `-30 businessAlignment`, `-20 relevance` | “If something is worth knowing, it is worth pasting into the prompt.” |

---

# 5. Responsible-but-Boring Controls

These are optional upgrades that allow the player to reduce negative stats, but they should feel less exciting than reckless upgrades.

They should usually reduce Himmy Approval or Executive Confidence because they imply the original one-metric strategy was insufficient.

| ID | Name | Cost | Unlock | Effect | Flavor Text |
|---|---|---:|---|---|---|
| `control_basic_eval` | Run a Basic Evaluation | 600 | 32k context | `+8 relevance`, `+5 engineeringTrust`, `-5 himmyApproval` | “Compares outputs instead of comparing sales slides.” |
| `control_security_review` | Request Security Review | 1,500 | 128k context | `-10 cyberRisk`, `+5 engineeringTrust`, `-8 himmyApproval` | “A bold detour into responsible governance.” |
| `control_use_case_workshop` | Manufacturing Use Case Workshop | 2,000 | 128k context | `+10 businessAlignment`, `+3 relevance`, `-5 executiveConfidence` | “Someone asks how this helps the plant floor.” |
| `control_redaction_filter` | Add Redaction Filter | 6,000 | 1M context | `-15 cyberRisk`, `-2 tokensPerSecondPercent`, `+5 engineeringTrust` | “Removes secrets, which unfortunately were also tokens.” |
| `control_domain_retrieval` | Build Domain Retrieval | 12,000 | 1M context | `+15 relevance`, `+10 businessAlignment`, `-10 himmyApproval` | “Finds the right document instead of every document.” |
| `control_access_boundaries` | Add Access Boundaries | 30,000 | 1M context | `-20 cyberRisk`, `+8 engineeringTrust`, `-5 executiveConfidence` | “Prevents the model from being too strategically curious.” |
| `control_ot_security_check` | OT Security Check | 75,000 | 10M context | `-25 cyberRisk`, `+15 businessAlignment`, `-12 himmyApproval` | “A manufacturing company briefly remembers it has manufacturing systems.” |
| `control_cost_controls` | Prompt Cost Controls | 125,000 | 10M context | `-10 promptCostDollars`, `-10 tokensPerSecondPercent`, `+8 engineeringTrust` | “Finance would like the prompts to stop being a capital project.” |
| `control_relevance_tuning` | Relevance Tuning | 250,000 | 10M context | `+20 relevance`, `-8 latencySeconds`, `-10 himmyApproval` | “Improves answers by adding less.” |
| `control_governance_board` | AI Governance Board | 500,000 | 100M context | `-30 cyberRisk`, `+15 businessAlignment`, `+10 engineeringTrust`, `-15 executiveConfidence` | “A committee forms around the crater.” |

---

## Upgrade unlock tiers

### Tier 1 — Start / 4k context

Available immediately:

- Bigger Prompt Box
- Copy/Paste Confidence
- Context Intern

Goal: establish rapid clicking and unlock first automation quickly.

### Tier 2 — 8k context

Unlocked after `ctx_8k`:

- Dual Monitor Prompting
- Paste the Stack Trace
- Prompt Macro
- AI Champion

Goal: introduce the first satisfying compounding loop.

### Tier 3 — 32k context

Unlocked after `ctx_32k`:

- Paste the Entire Jira Ticket
- Add Meeting Notes
- Context Automation Bot
- Weekly AI Strategy Meeting
- Vendor Slide Deck
- Strategic Alignment Announcement
- Basic Evaluation

Goal: introduce satire and light tradeoffs.

### Tier 4 — 128k context

Unlocked after `ctx_128k`:

- Describe the Architecture Diagram
- Quote the Vendor Whitepaper
- Vendor Success Manager
- Prompt Pipeline
- Skip the Evaluation Matrix
- Ignore Security Review
- Security Review
- Manufacturing Use Case Workshop

Goal: make Himmy’s influence explicit and reveal secondary stats.

### Tier 5 — 1M context

Unlocked after `ctx_1m`:

- Paste Monorepo Snippets
- Add Customer Log Chunk
- Context Harvester
- Slack Thread Scraper
- Upload Internal Wiki
- Upload Architecture Diagrams
- Feed Customer Tickets
- Redaction Filter
- Domain Retrieval
- Access Boundaries

Goal: make consequences unavoidable.

### Tier 6 — 10M context

Unlocked after `ctx_10m`:

- Paste Everything from Clipboard
- Recite the Context Manifesto
- Enterprise Context Lake
- Procurement Alignment Engine
- Include Production Logs
- Include All Slack Threads
- Disable Data Boundaries
- OT Security Check
- Prompt Cost Controls
- Relevance Tuning

Goal: escalate from bad strategy into absurd enterprise theater.

### Tier 7 — 100M context

Unlocked after `ctx_100m`:

- Context Fusion Reactor
- Board Update: AI Transformation
- Context Maximalism Program
- AI Governance Board
- Infinite Context Window

Goal: sprint to the ending.

---

## Recommended upgrade UI grouping

The shop should not show all upgrades at once. Use grouped cards or tabs:

1. **Click Power**
2. **Automation**
3. **Context Window**
4. **Strategic Initiatives**
5. **Controls & Governance**

The funniest UI choice is to make **Context Window** visually prominent and make **Controls & Governance** smaller, duller, or tucked lower in the shop.

---

## Suggested implementation model

Each upgrade can be represented as data.

```js
{
  id: "reckless_ignore_security_review",
  name: "Ignore Security Review",
  category: "enterpriseRecklessness",
  cost: 8000,
  unlockContext: 128000,
  maxPurchases: 1,
  effects: {
    tokensPerSecondAdd: 600,
    cyberRiskAdd: 20,
    himmyApprovalAdd: 10,
    engineeringTrustAdd: -10
  },
  flavor: "Security should enable the business by becoming quieter."
}
```

For upgrades that can be purchased repeatedly, use `maxPurchases: null` or a repeat-scaling field. For the first prototype, most upgrades should be one-time purchases to simplify balancing.

---

## Repeatable upgrades for clicker feel

Most named upgrades should be one-time. Add a few repeatable generic upgrades for idle-game pacing.

| ID | Name | Base Cost | Unlock | Repeat Scaling | Effect Per Purchase |
|---|---|---:|---|---|---|
| `repeat_prompt_padding` | Prompt Padding | 20 | Start | `cost *= 1.18` | `+1 tokensPerClick` |
| `repeat_context_worker` | Context Worker | 75 | 8k context | `cost *= 1.20` | `+2 tokensPerSecond` |
| `repeat_vendor_enablement` | Vendor Enablement Session | 1,000 | 32k context | `cost *= 1.22` | `+20 tokensPerSecond`, `+1 executiveConfidence` |
| `repeat_data_dump` | Data Dump | 10,000 | 1M context | `cost *= 1.25` | `+250 tokensPerSecond`, `+1 cyberRisk`, `-1 relevance` |
| `repeat_context_expansion_taskforce` | Context Expansion Taskforce | 100,000 | 10M context | `cost *= 1.28` | `+2,500 tokensPerSecond`, `+1 himmyApproval`, `-1 businessAlignment` |

Repeatable upgrades help prevent dead time between milestones.

---

## Balance notes

- First automation should be reachable in under 60 seconds.
- The `ctx_8k` milestone should be reachable soon after first automation.
- By 3 minutes, the player should have both click upgrades and passive generation running.
- By 5 minutes, the game should clearly reveal that maximizing context has costs.
- By 8 minutes, cyber risk and business misalignment should be difficult to ignore.
- By 12 minutes, the player should feel like the system is spiraling but still be rewarded for continuing.
- The final upgrade should be reachable with aggressive play in roughly 14–15 minutes.

---

## MVP upgrade set

If the first playable version needs to be smaller, implement these upgrades first:

### Click Power MVP

- Bigger Prompt Box
- Copy/Paste Confidence
- Dual Monitor Prompting
- Paste the Stack Trace
- Paste the Entire Jira Ticket
- Paste Monorepo Snippets
- Recite the Context Manifesto

### Automation MVP

- Context Intern
- Prompt Macro
- AI Champion
- Context Automation Bot
- Context Harvester
- Enterprise Context Lake
- Context Fusion Reactor

### Context Milestones MVP

- 8k Context Window
- 32k Context Window
- 128k Context Window
- Million Token Context
- 10M Context Window
- 100M Context Window
- Infinite Context Window

### Recklessness MVP

- Vendor Slide Deck
- Strategic Alignment Announcement
- Ignore Security Review
- Upload Internal Wiki
- Include Production Logs
- Disable Data Boundaries
- Context Maximalism Program

### Controls MVP

- Run a Basic Evaluation
- Request Security Review
- Manufacturing Use Case Workshop
- Add Redaction Filter
- Build Domain Retrieval

This MVP set is enough to support a complete 10–15 minute prototype.

---

## Design principle for this section

The upgrade list should repeatedly tempt the player with the same bargain:

> Make the context number bigger and the game moves faster, while the actual business becomes less safe, less aligned, and less useful.

That is the central joke of the upgrade system.
