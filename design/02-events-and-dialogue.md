# Himmy Game — Section 02: Events and Dialogue

## Purpose

This file defines the event and dialogue content for the 10–15 minute prototype of **Context King**, the browser-based idle/clicker satire game.

The goal of this section is to make the game feel alive and funny while reinforcing the central joke:

> The organization is optimizing around one impressive-looking AI metric — context window size — while ignoring manufacturing usefulness, engineering judgment, cost, latency, and cybersecurity risk.

Himmy is the recurring executive advisor character. He appears through a permanent advisor panel, milestone speeches, directive popups, quarterly reviews, and endgame narration.

The humor should target executive decision-making, shallow AI evaluation, vendor hype, and reckless governance — not identity, ethnicity, accent, or personal traits unrelated to the decision-making satire.

---

## Core Event Categories

The game should include six event categories:

1. **Passive Himmy commentary**
2. **Context milestone speeches**
3. **Himmy directive events**
4. **Cybersecurity warning events**
5. **Manufacturing reality check events**
6. **Quarterly review events**

Optional late-game category:

7. **Customer / production incident events**

---

## Event Timing Model

For a 10–15 minute session, events should appear frequently enough to create rhythm but not so often that they block clicking.

### Recommended Timing

| Game Time | Event Behavior |
|---:|---|
| 0:00–1:00 | No modal events; only passive Himmy comments |
| 1:00–3:00 | First milestone speech and first soft directive |
| 3:00–6:00 | Events every 60–90 seconds |
| 6:00–10:00 | Events every 45–75 seconds |
| 10:00–15:00 | Events every 35–60 seconds; more incidents |
| Endgame | Final Infinite Context sequence |

### Event Rules

- Never show a modal event during the first 45 seconds.
- Do not show two modal events within 30 seconds of each other.
- Milestone speeches can interrupt the normal event timer.
- Passive Himmy commentary can rotate every 20–40 seconds.
- Events should usually have 2–3 choices.
- The “bad” choice should often be immediately rewarding.
- The “responsible” choice should improve long-term stats but feel slower or more expensive.

---

## Permanent Advisor Panel

Himmy should be visible in a persistent panel, likely on the right side of the UI.

### Panel Elements

- Himmy portrait
- Title: **Himmy Says**
- Rotating quote bubble
- Himmy Approval stat
- Optional small status line, such as:
  - “Feeling strategically validated”
  - “Concerned about over-analysis”
  - “Pleased by context growth”
  - “Awaiting a larger number”

### Suggested UI Copy

```text
Himmy Says
"The bigger context window speaks for itself."
```

### Passive Quote Rotation

Rotate one passive quote every 20–40 seconds. Avoid repeating the same quote until at least 8–10 others have appeared.

---

## Passive Himmy Commentary Pool

These lines appear in the permanent advisor panel without interrupting gameplay.

### General Context Obsession

- “The bigger context window speaks for itself.”
- “This decision is refreshingly straightforward.”
- “The number was compelling.”
- “I prefer objective criteria. This one has the largest number.”
- “We should not overcomplicate a clear strategic signal.”
- “Bigger context is simply more comprehensive.”
- “A larger window reduces the need for debate.”
- “The market is moving quickly. The number is moving with it.”
- “If we can include everything, we do not need to prioritize anything.”
- “The context window is the strategy.”

### Executive Confidence

- “This is the kind of clarity executives value.”
- “We are demonstrating decisive leadership.”
- “I believe we have identified the clear leader.”
- “This will look excellent in the quarterly update.”
- “The vendor’s slide deck was quite mature.”
- “The phrase ‘enterprise-ready’ appeared multiple times.”
- “I feel increasingly aligned.”
- “This is a transformational capability.”
- “Our direction is clear: larger.”
- “We are avoiding analysis paralysis.”

### Engineering Dismissal

- “Engineering always wants another evaluation.”
- “We should not let technical nuance slow momentum.”
- “I appreciate their input, but the decision is fairly obvious.”
- “At some point, one must lead.”
- “The engineers are focused on edge cases again.”
- “A prototype would only confirm what the number already tells us.”
- “Let us not get lost in benchmarks.”
- “Tooling concerns can be addressed after alignment.”
- “They are asking about latency. I am asking about vision.”
- “Quality is important, but so is scale.”

### Cybersecurity Dismissal

- “Security should enable the business, not delay it.”
- “I assume the vendor has thought about that.”
- “Let us not get distracted by procedural caution.”
- “Cybersecurity risk is a downstream implementation detail.”
- “We should avoid letting governance suppress innovation.”
- “Surely the platform has controls.”
- “The strategic upside outweighs the theoretical risk.”
- “Sensitive data is only sensitive if mishandled.”
- “Security review can run in parallel after rollout.”
- “We are not ignoring security; we are sequencing it.”

### Manufacturing Business Fit

- “Manufacturing specifics should not constrain platform thinking.”
- “Our use cases will adapt.”
- “A sufficiently large context window is broadly applicable.”
- “Domain alignment can be figured out later.”
- “The plants will benefit from strategic AI direction.”
- “Operations teams love scale.”
- “The shop floor needs innovation, not another requirements workshop.”
- “If it can read everything, it can support manufacturing.”
- “ERP integration is a detail.”
- “MES, ERP, QMS — all acronyms fit inside a large context window.”

### Escalation Lines

- “If one million is good, ten million is visionary.”
- “We are now operating at enterprise scale.”
- “The larger the window, the lower the ambiguity.”
- “This validates my original instinct.”
- “We have moved beyond evaluation into conviction.”
- “This is what strategic momentum feels like.”
- “The window is becoming self-justifying.”
- “Concerns are natural during transformation.”
- “Scale first. Specificity later.”
- “This is no longer a tool decision. This is a leadership moment.”

---

## Context Milestone Speeches

Milestone speeches occur when the player purchases or unlocks a new context window tier.

Each milestone should:
- briefly celebrate the context number
- include one joke about ignored consequences
- optionally apply a temporary buff

Recommended temporary buff:

```text
Himmy Is Pleased
+25% tokens/sec for 20 seconds
```

Later milestones can use stronger buffs.

---

### Milestone: 8k Context

**Title:** Small Window, Big Vision

**Himmy Speech:**

> “Excellent. We now have enough context to include the README, part of the error message, and one confident assumption.”

**Effects:**

- +5 Himmy Approval
- +3 Executive Confidence
- Unlocks Click Upgrade Tier 2

---

### Milestone: 32k Context

**Title:** Strategic Scale Emerging

**Himmy Speech:**

> “Excellent. We now have enough context to solve problems before fully understanding them.”

**Effects:**

- +8 Himmy Approval
- +6 Executive Confidence
- -2 Engineering Trust
- Unlocks Vendor Comparison Screen

---

### Milestone: 128k Context

**Title:** Enterprise Direction

**Himmy Speech:**

> “This is the kind of strategic scale our manufacturing business requires, regardless of whether it does.”

**Effects:**

- +10 Himmy Approval
- +8 Executive Confidence
- -4 Business Alignment
- Unlocks Manufacturing Reality Check Events

---

### Milestone: 1M Context

**Title:** The Big Number Arrives

**Himmy Speech:**

> “At this level of context, cybersecurity concerns become statistically less important.”

**Effects:**

- +15 Himmy Approval
- +12 Executive Confidence
- +10 Cyber Risk
- -5 Engineering Trust
- Unlocks Cybersecurity Warning Events
- Unlocks Customer / Production Incident Events

---

### Milestone: 10M Context

**Title:** Total Context Awareness

**Himmy Speech:**

> “If we include every document, we can no longer be accused of missing information.”

**Effects:**

- +20 Himmy Approval
- +15 Executive Confidence
- +15 Cyber Risk
- -10 Business Alignment
- -10 Relevance
- Unlocks Late-Game Reckless Enterprise Events

---

### Milestone: 100M Context

**Title:** Beyond Relevance

**Himmy Speech:**

> “The system has access to everything. If the answer is wrong, perhaps the question was insufficiently strategic.”

**Effects:**

- +25 Himmy Approval
- +20 Executive Confidence
- +25 Cyber Risk
- -15 Engineering Trust
- -15 Business Alignment
- Unlocks Infinite Context Upgrade

---

### Milestone: Infinite Context

**Title:** Strategic Alignment Achieved

**Himmy Speech:**

> “This is what leadership looks like.”

**Effects:**

- Context Window = ∞
- Executive Confidence = 100
- Himmy Approval = 100
- Engineering Trust = 0
- Relevance = Undefined
- Prompt Cost = Catastrophic
- Latency = Eventually
- Trigger Final Sequence

---

## Himmy Directive Events

These are modal events where Himmy gives a leadership directive. The player chooses a response.

The “follow Himmy” option should often give short-term gains while damaging Cyber Risk, Business Alignment, Engineering Trust, Relevance, or Cost.

---

### Event 01: Largest Number Wins

**Trigger:** After 32k Context, first directive event.

**Title:** Himmy Directive: Largest Number Wins

**Prompt:**

> Himmy adjusts his glasses and points to the vendor comparison slide.
>
> “Their context window is the largest. I believe the evaluation is complete.”

**Choices:**

1. **Approve the largest context window**
   - +15 Himmy Approval
   - +12 Executive Confidence
   - +500 Tokens
   - -5 Engineering Trust

2. **Ask for a balanced evaluation**
   - +8 Engineering Trust
   - +5 Relevance
   - -8 Himmy Approval
   - Cost: 300 Tokens

3. **Create a comparison spreadsheet nobody will read**
   - +4 Executive Confidence
   - +2 Engineering Trust
   - No major change

---

### Event 02: Avoid Analysis Paralysis

**Trigger:** Random after 32k Context.

**Title:** Himmy Directive: Avoid Analysis Paralysis

**Prompt:**

> “We should be careful not to let too many criteria slow down momentum. The context window already gives us a clear signal.”

**Choices:**

1. **Reduce evaluation scope**
   - +20 Himmy Approval
   - +15 Executive Confidence
   - +20% Tokens/sec for 30 seconds
   - -8 Business Alignment
   - +5 Cyber Risk

2. **Keep the evaluation balanced**
   - +6 Engineering Trust
   - +6 Business Alignment
   - -10 Himmy Approval

3. **Rename the evaluation to ‘Strategic Alignment Review’**
   - +8 Executive Confidence
   - +3 Himmy Approval
   - -2 Engineering Trust

---

### Event 03: Vendor Dinner

**Trigger:** Random after 128k Context.

**Title:** Himmy Directive: Vendor Dinner

**Prompt:**

> The vendor invites leadership to a private “AI transformation dinner.”
>
> Himmy says, “Their roadmap sounds very aligned with our ambitions.”

**Choices:**

1. **Accept the dinner and fast-track selection**
   - +20 Executive Confidence
   - +15 Himmy Approval
   - +1,500 Tokens
   - -8 Engineering Trust
   - -5 Business Alignment

2. **Request a technical workshop instead**
   - +10 Engineering Trust
   - +8 Relevance
   - -10 Himmy Approval

3. **Do both and call it governance**
   - +10 Executive Confidence
   - +5 Engineering Trust
   - +5 Cyber Risk

---

### Event 04: Executive Simplicity

**Trigger:** Random after 128k Context.

**Title:** Himmy Directive: Executive Simplicity

**Prompt:**

> “I need one slide. Put the context window in the largest font.”

**Choices:**

1. **Make the context number enormous**
   - +15 Executive Confidence
   - +10 Himmy Approval
   - +10% Click Power
   - -5 Business Alignment

2. **Include cost, latency, and security risks**
   - +8 Engineering Trust
   - -8 Himmy Approval
   - -5 Executive Confidence

3. **Hide risks in appendix**
   - +8 Executive Confidence
   - +5 Himmy Approval
   - +3 Cyber Risk

---

### Event 05: Phase 2 Thinking

**Trigger:** Random after Manufacturing Reality Checks unlock.

**Title:** Himmy Directive: Phase 2 Thinking

**Prompt:**

> A plant manager asks how the selected AI platform supports actual manufacturing workflows.
>
> Himmy smiles. “That sounds like Phase 2.”

**Choices:**

1. **Move manufacturing fit to Phase 2**
   - +15 Himmy Approval
   - +10 Executive Confidence
   - -12 Business Alignment
   - +750 Tokens

2. **Interview shop-floor users**
   - +15 Business Alignment
   - +8 Relevance
   - -12 Himmy Approval
   - Cost: 600 Tokens

3. **Schedule a steering committee**
   - +5 Executive Confidence
   - -3 Engineering Trust
   - No immediate improvement

---

### Event 06: Security in Parallel

**Trigger:** Random after Cybersecurity Warning Events unlock.

**Title:** Himmy Directive: Security in Parallel

**Prompt:**

> Security asks for a formal risk review before internal data is sent to the AI vendor.
>
> Himmy says, “Security can run in parallel after we establish momentum.”

**Choices:**

1. **Proceed without waiting**
   - +20 Himmy Approval
   - +15 Executive Confidence
   - +20% Tokens/sec for 45 seconds
   - +15 Cyber Risk
   - -8 Engineering Trust

2. **Pause for security review**
   - -20 Cyber Risk
   - +10 Engineering Trust
   - -15 Himmy Approval
   - Cost: 1,500 Tokens

3. **Create a risk register**
   - +5 Executive Confidence
   - +5 Engineering Trust
   - +2 Cyber Risk

---

### Event 07: Thought Leadership

**Trigger:** Random after 1M Context.

**Title:** Himmy Directive: Thought Leadership

**Prompt:**

> Himmy wants to publish an internal blog post titled:
>
> “Why Context Window Size Is the Future of Manufacturing AI.”

**Choices:**

1. **Publish immediately**
   - +20 Executive Confidence
   - +15 Himmy Approval
   - +1,000 Tokens
   - -8 Engineering Trust

2. **Add nuance and caveats**
   - +8 Engineering Trust
   - +5 Business Alignment
   - -10 Himmy Approval

3. **Turn it into a slide deck**
   - +10 Executive Confidence
   - +5 Himmy Approval
   - Unlocks 1 random passive Himmy quote immediately

---

### Event 08: Strategic Override

**Trigger:** Random after 10M Context.

**Title:** Himmy Directive: Strategic Override

**Prompt:**

> Engineering recommends a smaller model with better retrieval, lower cost, stronger security controls, and better integration support.
>
> Himmy frowns. “But what is its context window?”

**Choices:**

1. **Override engineering**
   - +25 Himmy Approval
   - +20 Executive Confidence
   - +25% Tokens/sec for 60 seconds
   - -15 Engineering Trust
   - -10 Relevance
   - +10 Cyber Risk

2. **Run a real proof of concept**
   - +20 Engineering Trust
   - +15 Relevance
   - +10 Business Alignment
   - -20 Himmy Approval
   - Cost: 5,000 Tokens

3. **Ask the vendor to say ‘retrieval’ in the next demo**
   - +8 Executive Confidence
   - +5 Himmy Approval
   - +5 Relevance
   - +5 Cyber Risk

---

## Cybersecurity Warning Events

Cybersecurity events should become more common as Cyber Risk increases.

Recommended trigger formula:

```text
Cyber Event Chance = Base Chance + (Cyber Risk * 0.3%)
```

Example:
- Cyber Risk 20 = +6% chance
- Cyber Risk 80 = +24% chance

Cyber events should intensify from warnings to incidents.

---

### Cyber Event 01: Sensitive Logs

**Title:** Security Warning: Sensitive Logs

**Prompt:**

> Security notices production logs being pasted into prompts.
>
> “Some of these logs may contain customer identifiers, internal URLs, and operational details.”

**Choices:**

1. **Paste faster**
   - +20% Tokens/sec for 30 seconds
   - +12 Cyber Risk
   - +8 Himmy Approval

2. **Redact sensitive fields**
   - -15 Cyber Risk
   - +8 Engineering Trust
   - Cost: 700 Tokens

3. **Ask if the vendor is SOC 2**
   - +5 Executive Confidence
   - +2 Cyber Risk

---

### Cyber Event 02: Architecture Diagrams

**Title:** Security Warning: Architecture Diagrams

**Prompt:**

> An engineer uploads internal architecture diagrams to improve AI answers.
>
> Security quietly materializes behind them.

**Choices:**

1. **Include every diagram**
   - +1,200 Tokens
   - +10 Cyber Risk
   - +5 Relevance
   - +8 Himmy Approval

2. **Limit diagrams to approved systems**
   - -10 Cyber Risk
   - +6 Engineering Trust
   - +4 Relevance

3. **Rename them ‘reference materials’**
   - +5 Executive Confidence
   - +5 Himmy Approval
   - +5 Cyber Risk

---

### Cyber Event 03: Customer Data Boundary

**Title:** Security Warning: Customer Data Boundary

**Prompt:**

> The support team wants to include customer tickets in the context window.
>
> Security asks whether customer data is properly isolated.

**Choices:**

1. **Combine all tickets for better context**
   - +2,000 Tokens
   - +15 Cyber Risk
   - -8 Business Alignment
   - +10 Himmy Approval

2. **Create tenant-safe retrieval**
   - -20 Cyber Risk
   - +12 Engineering Trust
   - +10 Relevance
   - Cost: 1,200 Tokens

3. **Promise to revisit data boundaries later**
   - +8 Executive Confidence
   - +5 Himmy Approval
   - +8 Cyber Risk

---

### Cyber Event 04: Vendor Security Questionnaire

**Title:** Security Warning: Vendor Questionnaire

**Prompt:**

> Security sends the vendor a 184-question risk questionnaire.
>
> Himmy sighs audibly.

**Choices:**

1. **Mark it as low priority**
   - +12 Himmy Approval
   - +10 Executive Confidence
   - +10 Cyber Risk
   - -8 Engineering Trust

2. **Require completion before rollout**
   - -18 Cyber Risk
   - +10 Engineering Trust
   - -12 Himmy Approval
   - Cost: 1,000 Tokens

3. **Ask for their standard security whitepaper**
   - +5 Executive Confidence
   - -5 Cyber Risk
   - +2 Himmy Approval

---

### Cyber Event 05: Access Review Spreadsheet

**Title:** Security Warning: Access Review Spreadsheet

**Prompt:**

> Someone suggests uploading the access review spreadsheet to help the AI understand roles and permissions.
>
> The spreadsheet includes more than roles and permissions.

**Choices:**

1. **Upload it**
   - +2,500 Tokens
   - +18 Cyber Risk
   - +8 Himmy Approval

2. **Remove sensitive columns**
   - -15 Cyber Risk
   - +8 Engineering Trust
   - Cost: 900 Tokens

3. **Convert it to PDF first**
   - +6 Executive Confidence
   - +4 Himmy Approval
   - +8 Cyber Risk

---

### Cyber Event 06: Prompt Injection Warning

**Title:** Security Warning: Prompt Injection

**Prompt:**

> A security engineer warns that dumping untrusted documents into the context window creates prompt injection risks.
>
> Himmy asks if the injection has a large context window.

**Choices:**

1. **Proceed with untrusted documents**
   - +20% Tokens/sec for 45 seconds
   - +20 Cyber Risk
   - -10 Relevance
   - +10 Himmy Approval

2. **Add content filtering**
   - -20 Cyber Risk
   - +10 Relevance
   - +8 Engineering Trust
   - Cost: 1,600 Tokens

3. **Add a warning banner**
   - +4 Executive Confidence
   - -3 Cyber Risk

---

## Manufacturing Reality Check Events

These events represent the actual business asking whether the AI decision helps the manufacturing company.

They should be funny because the correct business-oriented answer is often less attractive in the clicker loop.

---

### Manufacturing Event 01: Plant Manager Question

**Title:** Manufacturing Reality Check: Plant Manager Question

**Prompt:**

> A plant manager asks:
>
> “How does this help technicians find the latest machine calibration procedure?”

**Choices:**

1. **Mention the 1M context window**
   - +12 Himmy Approval
   - +10 Executive Confidence
   - -10 Business Alignment

2. **Actually map the calibration workflow**
   - +15 Business Alignment
   - +10 Relevance
   - +8 Engineering Trust
   - -12 Himmy Approval
   - Cost: 800 Tokens

3. **Promise a future integration**
   - +6 Executive Confidence
   - -4 Business Alignment

---

### Manufacturing Event 02: Quality Audit

**Title:** Manufacturing Reality Check: Quality Audit

**Prompt:**

> The quality team asks whether AI answers are traceable to approved work instructions.
>
> Himmy says, “It can read all of them.”

**Choices:**

1. **Assume reading equals compliance**
   - +10 Himmy Approval
   - +8 Executive Confidence
   - +8 Cyber Risk
   - -10 Business Alignment

2. **Build source citations and approval checks**
   - +15 Business Alignment
   - +12 Relevance
   - +8 Engineering Trust
   - Cost: 1,400 Tokens

3. **Add ‘AI-generated’ to the footer**
   - +4 Executive Confidence
   - +2 Business Alignment

---

### Manufacturing Event 03: Maintenance Technician

**Title:** Manufacturing Reality Check: Maintenance Technician

**Prompt:**

> A maintenance technician asks why the AI gave an answer based on a retired machine model.
>
> The model sounded extremely confident.

**Choices:**

1. **Increase context so it has more manuals**
   - +1,500 Tokens
   - +10 Himmy Approval
   - -10 Relevance
   - -8 Business Alignment

2. **Filter by plant, line, and equipment version**
   - +18 Relevance
   - +12 Business Alignment
   - +8 Engineering Trust
   - Cost: 1,200 Tokens

3. **Tell users to verify all outputs**
   - +4 Executive Confidence
   - -4 Engineering Trust

---

### Manufacturing Event 04: ERP Integration

**Title:** Manufacturing Reality Check: ERP Integration

**Prompt:**

> Operations asks when the AI will connect to ERP data.
>
> Himmy says, “ERP details should not slow strategic AI adoption.”

**Choices:**

1. **Ignore integration for now**
   - +12 Himmy Approval
   - +8 Executive Confidence
   - -12 Business Alignment
   - +800 Tokens

2. **Scope ERP integration properly**
   - +18 Business Alignment
   - +10 Relevance
   - -10 Himmy Approval
   - Cost: 1,500 Tokens

3. **Create an integration roadmap**
   - +6 Executive Confidence
   - +5 Business Alignment
   - Cost: 400 Tokens

---

### Manufacturing Event 05: Shop Floor Usability

**Title:** Manufacturing Reality Check: Shop Floor Usability

**Prompt:**

> A supervisor asks if the tool works on shared shop-floor terminals with strict access controls.
>
> Himmy says, “The context window is device-agnostic.”

**Choices:**

1. **Declare it platform-ready**
   - +10 Executive Confidence
   - +8 Himmy Approval
   - -10 Business Alignment
   - +5 Cyber Risk

2. **Run a shop-floor usability pilot**
   - +15 Business Alignment
   - +8 Engineering Trust
   - +8 Relevance
   - -8 Himmy Approval
   - Cost: 1,000 Tokens

3. **Add a mobile-friendly slide to the deck**
   - +5 Executive Confidence
   - +2 Himmy Approval

---

### Manufacturing Event 06: Safety Procedure

**Title:** Manufacturing Reality Check: Safety Procedure

**Prompt:**

> Safety asks whether the AI might summarize procedures in a way that removes required warnings.
>
> Himmy says, “Summaries are meant to be shorter.”

**Choices:**

1. **Allow unrestricted summaries**
   - +1,800 Tokens
   - +12 Himmy Approval
   - +15 Cyber Risk
   - -15 Business Alignment

2. **Require safety-critical guardrails**
   - +20 Business Alignment
   - +12 Engineering Trust
   - -15 Cyber Risk
   - -12 Himmy Approval
   - Cost: 1,800 Tokens

3. **Add a disclaimer**
   - +4 Executive Confidence
   - +4 Business Alignment
   - +4 Cyber Risk

---

## Customer / Production Incident Events

These events should begin after 1M Context or when Cyber Risk exceeds a threshold, such as 50.

Some incidents can be simple notification-only events. Others can require choices.

---

### Incident Event 01: Wrong Cloud

**Title:** Incident: Wrong Cloud Provider

**Prompt:**

> The AI generated deployment instructions for the wrong cloud provider.
>
> It was very detailed.

**Choices:**

1. **Praise the detail**
   - +8 Himmy Approval
   - +6 Executive Confidence
   - -8 Engineering Trust

2. **Improve context filtering**
   - +10 Relevance
   - +8 Engineering Trust
   - Cost: 900 Tokens

3. **Add more cloud docs**
   - +1,200 Tokens
   - -8 Relevance
   - +5 Himmy Approval

---

### Incident Event 02: Cross-Customer Confusion

**Title:** Incident: Cross-Customer Confusion

**Prompt:**

> A support response included details from a different customer’s environment.
>
> The model had plenty of context.

**Choices:**

1. **Call it an edge case**
   - +10 Himmy Approval
   - +8 Executive Confidence
   - +18 Cyber Risk
   - -12 Engineering Trust

2. **Enforce tenant boundaries**
   - -25 Cyber Risk
   - +15 Engineering Trust
   - +10 Business Alignment
   - Cost: 2,000 Tokens

3. **Add a customer apology template**
   - +5 Executive Confidence
   - +5 Business Alignment
   - +4 Cyber Risk

---

### Incident Event 03: Deprecated Architecture

**Title:** Incident: Deprecated Architecture

**Prompt:**

> The AI recommended a deprecated architecture from 2019 because it was included in the context.
>
> Himmy says, “At least it found architecture.”

**Choices:**

1. **Keep all historical docs**
   - +1,500 Tokens
   - +8 Himmy Approval
   - -12 Relevance

2. **Add freshness weighting**
   - +15 Relevance
   - +10 Engineering Trust
   - Cost: 1,300 Tokens

3. **Archive the 2019 docs in a folder called ‘Legacy Maybe’**
   - +5 Relevance
   - +3 Executive Confidence

---

### Incident Event 04: Prompt Cost Spike

**Title:** Incident: Prompt Cost Spike

**Prompt:**

> Finance notices that prompt costs now exceed the monthly coffee budget, then the training budget, then a small forklift.

**Choices:**

1. **Describe it as investment**
   - +12 Executive Confidence
   - +10 Himmy Approval
   - +10 Prompt Cost

2. **Reduce unnecessary context**
   - -12 Prompt Cost
   - +10 Relevance
   - -8 Himmy Approval

3. **Create a chargeback model**
   - +5 Executive Confidence
   - -3 Engineering Trust

---

### Incident Event 05: Latency Complaint

**Title:** Incident: Latency Complaint

**Prompt:**

> Developers report that the AI now takes longer to answer than the build pipeline takes to fail.

**Choices:**

1. **Call it deep reasoning**
   - +10 Himmy Approval
   - +8 Executive Confidence
   - +10 Latency

2. **Optimize retrieval**
   - -15 Latency
   - +10 Relevance
   - +8 Engineering Trust
   - Cost: 1,500 Tokens

3. **Add a loading animation**
   - +6 Executive Confidence
   - +2 Himmy Approval

---

### Incident Event 06: AI Finds the Lunch Menu

**Title:** Incident: Irrelevant Context

**Prompt:**

> The AI cites the cafeteria lunch menu while answering a deployment question.
>
> The lunch menu was technically in context.

**Choices:**

1. **Increase context to dilute the menu**
   - +1,000 Tokens
   - +8 Himmy Approval
   - -10 Relevance

2. **Remove irrelevant documents**
   - +15 Relevance
   - +8 Engineering Trust
   - -8 Himmy Approval

3. **Ask catering to use clearer filenames**
   - +3 Executive Confidence
   - +3 Relevance

---

## Quarterly Review Events

Quarterly reviews are larger summary events. For a 10–15 minute game, trigger one around the midpoint and one near the end.

Recommended triggers:
- First review: around 6 minutes or after 1M Context
- Second review: around 11 minutes or after 10M Context

---

### Quarterly Review 01: Early Success

**Title:** Quarterly Review: Early Success

**Prompt:**

> Himmy opens the quarterly AI update.
>
> “I am pleased with our progress. Context has increased significantly. Some teams have raised concerns about cost, security, and manufacturing fit, but the strategic direction is clear.”

**Report Card:**

| Category | Rating |
|---|---|
| Context Window | A+ |
| Executive Confidence | A |
| Engineering Trust | Under Review |
| Cybersecurity | In Parallel |
| Manufacturing Fit | Phase 2 |
| Actual Outcomes | Emerging |

**Choices:**

1. **Celebrate the progress**
   - +15 Himmy Approval
   - +15 Executive Confidence
   - +1,500 Tokens

2. **Address the concerns**
   - +10 Engineering Trust
   - +10 Business Alignment
   - -10 Himmy Approval
   - -10 Cyber Risk
   - Cost: 1,000 Tokens

3. **Create a transformation roadmap**
   - +10 Executive Confidence
   - +5 Business Alignment
   - +5 Himmy Approval

---

### Quarterly Review 02: Late-Stage Momentum

**Title:** Quarterly Review: Late-Stage Momentum

**Prompt:**

> Himmy presents a dashboard where the context window number is 74% of the slide.
>
> “The results speak for themselves.”

**Report Card:**

| Category | Rating |
|---|---|
| Context Window | Historic |
| Executive Confidence | Extremely High |
| Engineering Trust | Quiet |
| Cybersecurity | Brisk |
| Manufacturing Fit | Aspirational |
| Prompt Cost | Transformational |
| Relevance | Subjective |

**Choices:**

1. **Double down**
   - +25 Himmy Approval
   - +20 Executive Confidence
   - +25% Tokens/sec for 60 seconds
   - +15 Cyber Risk
   - -10 Business Alignment

2. **Rebalance the program**
   - +20 Engineering Trust
   - +20 Business Alignment
   - +15 Relevance
   - -20 Himmy Approval
   - Cost: 4,000 Tokens

3. **Change the chart colors**
   - +8 Executive Confidence
   - +5 Himmy Approval

---

## Endgame Sequence

Triggered when the player purchases **Infinite Context Window**.

The UI should temporarily shift from normal clicker mode to a fake AI processing screen.

### Sequence Step 1: Purchase Confirmation

**Title:** Infinite Context Window

**Prompt:**

> “Why retrieve the right information when you can include all information?”

Button:

```text
Achieve Strategic Alignment
```

Effects:

- Context Window = ∞
- Himmy Approval = 100
- Executive Confidence = 100
- Engineering Trust = 0
- Business Alignment = 0
- Cyber Risk = 100
- Relevance = Undefined
- Prompt Cost = Catastrophic
- Latency = Eventually

---

### Sequence Step 2: Fake Loading Messages

Display these lines one at a time.

```text
Thinking...
Reading README...
Reading monorepo...
Reading Jira archive...
Reading Slack export...
Reading production logs...
Reading vendor whitepaper...
Reading security exception spreadsheet...
Reading ERP notes...
Reading MES screenshots...
Reading quality procedures...
Reading retired machine manuals...
Reading customer tickets...
Reading expired Okta announcement...
Reading lunch menu...
Reading the meeting transcript about this meeting...
Reconciling contradictions...
Increasing confidence...
Ignoring relevance...
Finalizing strategy...
```

---

### Sequence Step 3: Final AI Output

After the loading sequence, show:

```text
Based on the provided context, it appears you are working on a software project.
```

Optional second line:

```text
Would you like me to summarize the documentation?
```

---

### Sequence Step 4: Final Himmy Speech

**Title:** Strategic Alignment Achieved

**Himmy Speech:**

> “This is what leadership looks like. We selected boldly, moved quickly, and avoided unnecessary complexity. The platform has access to everything. That was the objective.”

---

### Sequence Step 5: Final Report

```text
Final Report

Context Window: Infinite
Executive Confidence: 100%
Himmy Approval: 100%
Engineering Trust: 0%
Business Alignment: 0%
Cyber Risk: 100%
Prompt Cost: Catastrophic
Latency: Eventually
Relevance: Undefined
Actual Evaluation Completed: No
Manufacturing Problems Solved: Pending Phase 2
```

Button:

```text
Start New Quarter
```

---

## Notification-Only Micro Events

These are short messages that can appear as toast notifications without requiring player choices.

They add texture without interrupting gameplay.

### General Toasts

- “An engineer opened a spreadsheet titled ‘actual evaluation criteria.xlsx.’ Himmy closed it.”
- “Vendor used the word ‘agentic.’ Executive Confidence increased.”
- “A developer asked about latency. The question was moved to the appendix.”
- “Security joined the meeting. The meeting was rescheduled.”
- “A plant manager asked for a use case. The roadmap expanded.”
- “Someone said ‘retrieval augmented generation.’ Himmy asked how large it was.”
- “Finance noticed prompt costs. Finance has been added to Phase 2.”
- “The AI summarized the wrong document very confidently.”
- “A Slack thread from 2020 has entered the context window.”
- “The model cited a lunch menu. Relevance decreased.”
- “The vendor demo had gradients. Executive Confidence increased.”
- “Engineering Trust fell quietly.”
- “Cyber Risk increased with no visible animation.”
- “A security exception was renamed to ‘innovation waiver.’”
- “The phrase ‘business alignment’ appeared in a slide title.”

---

## Event Prioritization Logic

When multiple events are eligible, prioritize based on current stats.

### If Cyber Risk > 70

Prefer:
- Cybersecurity Warning Events
- Customer / Production Incident Events

### If Business Alignment < 40

Prefer:
- Manufacturing Reality Check Events

### If Engineering Trust < 30

Prefer:
- Engineering-related Himmy Directive Events
- Quarterly Review with “Engineering Trust: Quiet”

### If Executive Confidence < 40

Prefer:
- Himmy Directive Events that offer quick confidence boosts

### If Relevance < 40

Prefer:
- Incident events involving wrong, outdated, or irrelevant answers

---

## Implementation-Friendly Event Schema

A simple JavaScript event object could look like this:

```js
{
  id: "directive-largest-number-wins",
  category: "himmy_directive",
  title: "Himmy Directive: Largest Number Wins",
  minContext: 32000,
  minTimeSeconds: 90,
  weight: 10,
  prompt: "Himmy adjusts his glasses and points to the vendor comparison slide. “Their context window is the largest. I believe the evaluation is complete.”",
  choices: [
    {
      label: "Approve the largest context window",
      effects: {
        himmyApproval: 15,
        executiveConfidence: 12,
        tokens: 500,
        engineeringTrust: -5
      }
    },
    {
      label: "Ask for a balanced evaluation",
      cost: {
        tokens: 300
      },
      effects: {
        engineeringTrust: 8,
        relevance: 5,
        himmyApproval: -8
      }
    },
    {
      label: "Create a comparison spreadsheet nobody will read",
      effects: {
        executiveConfidence: 4,
        engineeringTrust: 2
      }
    }
  ]
}
```

---

## Recommended MVP Event Set

For the first playable prototype, implement this smaller event list:

### Passive

- 25 passive Himmy quotes

### Milestones

- 8k
- 32k
- 128k
- 1M
- 10M
- Infinite

### Directive Events

- Largest Number Wins
- Avoid Analysis Paralysis
- Security in Parallel
- Phase 2 Thinking
- Strategic Override

### Cybersecurity Events

- Sensitive Logs
- Customer Data Boundary
- Prompt Injection Warning

### Manufacturing Events

- Plant Manager Question
- Quality Audit
- Maintenance Technician
- Safety Procedure

### Incidents

- Wrong Cloud Provider
- Cross-Customer Confusion
- Deprecated Architecture
- Prompt Cost Spike
- AI Finds the Lunch Menu

### Reviews

- Quarterly Review 01
- Quarterly Review 02

This is enough content for a 10–15 minute play session with replay variety.

---

## Content Tone Checklist

Each event should usually contain at least one of these joke patterns:

- A big number is treated as a complete strategy.
- A real operational concern is moved to Phase 2.
- Security is reframed as an innovation blocker.
- Manufacturing realities are abstracted into platform language.
- The responsible option is obviously better but less immediately rewarding.
- The bad option gives satisfying short-term clicker gains.
- Himmy sounds calm, confident, and wrong.
- The UI validates the wrong behavior.

---

## Section 02 Completion Notes

This section establishes the game’s narrative rhythm and recurring satire engine.

Section 03 should define:

- stat ranges
- token economy
- context milestone pricing
- stat formulas
- event weighting
- win/loss/end states
- target 10–15 minute balance curve
