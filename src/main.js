import { BALANCE } from "./data/balance.js";
import { events } from "./data/events.js";
import { himmyQuotes } from "./data/himmyQuotes.js";
import { milestones } from "./data/milestones.js";
import { upgrades } from "./data/upgrades.js";

const app = document.querySelector("#app");

const tabs = [
  ["click", "Click"],
  ["automation", "Automation"],
  ["context", "Context"],
  ["reckless", "Enterprise"],
  ["controls", "Controls"],
];

const himmyPortraits = {
  default: "./src/assets/himmy/himmy-default.png",
  neutral: "./src/assets/himmy/himmy-neutral.png",
  pleased: "./src/assets/himmy/himmy-pleased.png",
  directive: "./src/assets/himmy/himmy-directive.png",
  dismissive: "./src/assets/himmy/himmy-dismissive.png",
  nervous: "./src/assets/himmy/himmy-nervous.png",
  victorious: "./src/assets/himmy/himmy-victorious.png",
};

const state = {
  tokens: BALANCE.startingTokens,
  tokensPerClick: BALANCE.startingTokensPerClick,
  tokensPerSecond: BALANCE.startingTokensPerSecond,
  contextWindow: BALANCE.startingContextWindow,
  executiveConfidence: BALANCE.startingExecutiveConfidence,
  himmyApproval: BALANCE.startingHimmyApproval,
  engineeringTrust: BALANCE.startingEngineeringTrust,
  businessAlignment: BALANCE.startingBusinessAlignment,
  cyberRisk: BALANCE.startingCyberRisk,
  relevance: BALANCE.startingRelevance,
  latencyBonus: 0,
  costBonus: 0,
  purchasedUpgrades: {},
  purchasedMilestones: {},
  seenEvents: {},
  activeBuffs: [],
  toasts: [],
  feed: [],
  activeTab: "click",
  activeModal: null,
  theme: localStorage.getItem("contextKingTheme") || "light",
  feedScrollTop: 0,
  shopScrollTop: 0,
  deferShopRenderUntil: 0,
  currentQuote: himmyQuotes[0],
  runStartedAt: Date.now(),
  lastTickAt: Date.now(),
  nextEventAt: Date.now() + 65000,
  nextQuoteAt: Date.now() + randomSeconds(20, 38) * 1000,
  endingStage: "playing",
  loadingLineIndex: 0,
  clickFloaters: [],
};

const loadingLines = [
  "Thinking...",
  "Reading README...",
  "Reading monorepo...",
  "Reading Jira archive...",
  "Reading Slack export...",
  "Reading production logs...",
  "Reading vendor whitepaper...",
  "Reading security exception spreadsheet...",
  "Reading ERP notes...",
  "Reading MES screenshots...",
  "Reading quality procedures...",
  "Reading retired machine manuals...",
  "Reading customer tickets...",
  "Reading expired Okta announcement...",
  "Reading lunch menu...",
  "Reconciling contradictions...",
  "Increasing confidence...",
  "Ignoring relevance...",
  "Finalizing strategy...",
];

function randomSeconds(min, max) {
  return min + Math.random() * (max - min);
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function applyEffects(effects = {}) {
  if (effects.tokens) state.tokens += effects.tokens;
  if (effects.tokensPerClick) state.tokensPerClick += effects.tokensPerClick;
  if (effects.tokensPerSecond) state.tokensPerSecond += effects.tokensPerSecond;
  if (effects.tokensPerSecondMultiplier) state.tokensPerSecond *= effects.tokensPerSecondMultiplier;
  if (effects.latencyBonus) state.latencyBonus += effects.latencyBonus;
  if (effects.costBonus) state.costBonus += effects.costBonus;

  for (const stat of ["executiveConfidence", "himmyApproval", "engineeringTrust", "businessAlignment", "cyberRisk", "relevance"]) {
    if (effects[stat] !== undefined) state[stat] = clampPercent(state[stat] + effects[stat]);
  }
}

function getExecutiveMultiplier() {
  return 1 + state.executiveConfidence / BALANCE.multipliers.executiveDivisor;
}

function getHimmyMultiplier() {
  return 1 + state.himmyApproval / BALANCE.multipliers.himmyDivisor;
}

function getRelevanceMultiplier() {
  return BALANCE.multipliers.relevanceBase + state.relevance / BALANCE.multipliers.relevanceDivisor;
}

function getTrustMultiplier() {
  return state.engineeringTrust < BALANCE.multipliers.lowTrustThreshold
    ? BALANCE.multipliers.lowTrustAutomationMultiplier
    : 1;
}

function getBuffMultiplier(kind) {
  const now = Date.now();
  return state.activeBuffs
    .filter((buff) => buff.kind === kind && buff.expiresAt > now)
    .reduce((total, buff) => total * buff.multiplier, 1);
}

function getClickGain() {
  return state.tokensPerClick * getExecutiveMultiplier() * getHimmyMultiplier() * getRelevanceMultiplier() * getBuffMultiplier("click");
}

function getEffectiveTps() {
  return state.tokensPerSecond * getExecutiveMultiplier() * getHimmyMultiplier() * getRelevanceMultiplier() * getTrustMultiplier() * getBuffMultiplier("automation");
}

function getLatency() {
  if (state.contextWindow === Infinity) return Infinity;
  const contextLatency = Math.log10(state.contextWindow / 4000) * 2.2;
  return Math.max(0.2, 1 + contextLatency + state.cyberRisk / 35 + state.latencyBonus);
}

function getPromptCost() {
  if (state.contextWindow === Infinity) return Infinity;
  const contextCost = 0.01 * Math.pow(state.contextWindow / 4000, 0.55);
  return contextCost * (1 + state.cyberRisk / 150) + state.costBonus;
}

function formatNumber(value) {
  if (value === Infinity) return "Infinite";
  if (value < 1000) return Math.floor(value).toLocaleString();
  if (value < 1000000) return `${(value / 1000).toFixed(value < 10000 ? 1 : 0)}K`;
  if (value < 1000000000) return `${(value / 1000000).toFixed(value < 10000000 ? 1 : 0)}M`;
  return `${(value / 1000000000).toFixed(1)}B`;
}

function formatContext(value) {
  if (value === Infinity) return "Infinite";
  if (value >= 1000000) return formatNumber(value);
  return `${formatNumber(value)}`;
}

function formatMoney(value) {
  if (value === Infinity) return "Catastrophic";
  if (value >= 1000) return "Finance opened a ticket";
  if (value >= 100) return `$${Math.round(value)} / prompt`;
  return `$${value.toFixed(value < 1 ? 2 : 1)} / prompt`;
}

function formatLatency(value) {
  if (value === Infinity) return "Eventually";
  if (value >= 60) return "Eventually";
  if (value >= 30) return "Still thinking...";
  return `${value.toFixed(1)} sec`;
}

function getRunSeconds() {
  return Math.floor((Date.now() - state.runStartedAt) / 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function getUpgradeCost(upgrade) {
  const count = state.purchasedUpgrades[upgrade.id] || 0;
  return Math.floor(upgrade.cost * Math.pow(upgrade.costScale || 1, count));
}

function canPurchaseUpgrade(upgrade) {
  const count = state.purchasedUpgrades[upgrade.id] || 0;
  if (upgrade.unlockContext > state.contextWindow) return false;
  if (upgrade.maxPurchases !== null && count >= upgrade.maxPurchases) return false;
  return state.tokens >= getUpgradeCost(upgrade);
}

function purchaseUpgrade(id) {
  const upgrade = upgrades.find((item) => item.id === id);
  if (!upgrade || !canPurchaseUpgrade(upgrade)) return;
  const cost = getUpgradeCost(upgrade);
  state.tokens -= cost;
  state.purchasedUpgrades[id] = (state.purchasedUpgrades[id] || 0) + 1;
  applyEffects(upgrade.effects);
  addFeed(`Purchased ${upgrade.name}`);
  state.currentQuote = quoteForCategory(upgrade.category);
  render();
}

function getNextMilestone() {
  return milestones.find((milestone) => !state.purchasedMilestones[milestone.id] && milestone.contextWindow > state.contextWindow);
}

function purchaseMilestone(id) {
  const milestone = milestones.find((item) => item.id === id);
  if (!milestone || state.purchasedMilestones[id] || state.tokens < milestone.cost) return;
  state.tokens -= milestone.cost;
  state.purchasedMilestones[id] = true;

  if (milestone.contextWindow === Infinity) {
    triggerEnding();
    return;
  }

  state.contextWindow = milestone.contextWindow;
  applyEffects(milestone.effects);
  state.currentQuote = milestone.speech;
  state.activeModal = { type: "milestone", milestone };
  addFeed(`${milestone.name}: ${milestone.message}`);
  addFeedMessage("himmy", milestone.speech);
  render();
}

function quoteForCategory(category) {
  const categoryQuotes = {
    click: "A wider prompt creates a wider strategy.",
    automation: "Delegation. A key leadership skill.",
    reckless: "This validates the direction.",
    controls: "Responsible, if somewhat less visionary.",
  };
  return categoryQuotes[category] || himmyQuotes[Math.floor(Math.random() * himmyQuotes.length)];
}

function toast(message) {
  state.toasts.unshift({ id: crypto.randomUUID(), message, createdAt: Date.now() });
  state.toasts = state.toasts.slice(0, 3);
}

function addFeed(message) {
  addFeedMessage(pickFeedAuthor(message), message);
}

function addFeedMessage(author, message) {
  if (state.feed[0]?.author === author && state.feed[0]?.message === message) return;
  state.feed.unshift({ id: crypto.randomUUID(), time: formatTime(getRunSeconds()), author, message });
  state.feed = state.feed.slice(0, 8);
}

function pickFeedAuthor(message) {
  if (message.includes("Cyber") || message.includes("Security")) return "security-team";
  if (message.includes("Manufacturing") || message.includes("plant") || message.includes("Context Milestone")) return "plant-ops";
  if (message.includes("Purchased")) return "ai-strategy";
  if (message.includes("Himmy")) return "himmy";
  if (message.includes("Incident")) return "incident-bot";
  return "ai-strategy";
}

function clickMainButton() {
  if (state.endingStage !== "playing") return;
  const gain = getClickGain();
  state.tokens += gain;
  render();
}

function getClickButtonLabel() {
  if (state.contextWindow >= 100000000) return "Contextualize the Entire Business";
  if (state.contextWindow >= 10000000) return "Add Everything Just in Case";
  if (state.contextWindow >= 1000000) return "Upload More Internal Knowledge";
  if (state.contextWindow >= 128000) return "Include More Background";
  if (state.contextWindow >= 32000) return "Expand the Prompt";
  if (state.contextWindow >= 8000) return "Paste More Context";
  return "Add More Context";
}

function chooseEventOption(index) {
  const modal = state.activeModal;
  if (!modal || modal.type !== "event") return;
  const choice = modal.event.choices[index];
  if (!choice || !canPay(choice.cost)) return;

  payCost(choice.cost);
  applyEffects(choice.effects);
  if (choice.buff) {
    state.activeBuffs.push({ ...choice.buff, expiresAt: Date.now() + choice.buff.durationSeconds * 1000 });
  }
  state.seenEvents[modal.event.id] = true;
  state.currentQuote = `${choice.label}. A clear leadership signal.`;
  state.activeModal = null;
  state.nextEventAt = Date.now() + randomSeconds(BALANCE.eventTiming.eventMinSeconds, BALANCE.eventTiming.eventMaxSeconds) * 1000;
  addFeed(`${modal.event.title}: ${choice.label}`);
  addFeedMessage("himmy", state.currentQuote);
  render();
}

function canPay(cost = {}) {
  return (cost.tokens || 0) <= state.tokens;
}

function payCost(cost = {}) {
  if (cost.tokens) state.tokens -= cost.tokens;
}

function scheduleEventIfNeeded(now) {
  if (state.activeModal || state.endingStage !== "playing") return;
  if (getRunSeconds() < BALANCE.eventTiming.firstEventSeconds) return;
  if (now < state.nextEventAt) return;

  const eligible = events.filter((event) => {
    if (state.seenEvents[event.id]) return false;
    if (event.minContext > state.contextWindow) return false;
    if (event.minSeconds > getRunSeconds()) return false;
    return true;
  });

  if (!eligible.length) {
    state.nextEventAt = now + randomSeconds(30, 60) * 1000;
    return;
  }

  const event = weightedEvent(eligible);
  state.activeModal = { type: "event", event };
  state.currentQuote = "We should consider the strategic implications, briefly.";
  addFeedMessage("himmy", state.currentQuote);
}

function weightedEvent(eligible) {
  const scored = eligible.map((event) => {
    let weight = 10;
    if (event.category === "cyber") weight += Math.floor(state.cyberRisk / 4);
    if (event.category === "manufacturing") weight += Math.floor((100 - state.businessAlignment) / 7);
    if (event.category === "incident") weight += Math.floor(state.cyberRisk / 5) + Math.floor((100 - state.relevance) / 8);
    return { event, weight };
  });
  const total = scored.reduce((sum, item) => sum + item.weight, 0);
  let pick = Math.random() * total;
  for (const item of scored) {
    pick -= item.weight;
    if (pick <= 0) return item.event;
  }
  return scored[0].event;
}

function rotateQuoteIfNeeded(now) {
  if (state.activeModal || state.endingStage !== "playing" || now < state.nextQuoteAt) return;
  let next = state.currentQuote;
  while (next === state.currentQuote) {
    next = himmyQuotes[Math.floor(Math.random() * himmyQuotes.length)];
  }
  state.currentQuote = next;
  addFeedMessage("himmy", next);
  state.nextQuoteAt = now + randomSeconds(BALANCE.eventTiming.passiveQuoteMinSeconds, BALANCE.eventTiming.passiveQuoteMaxSeconds) * 1000;
}

function triggerEnding() {
  state.contextWindow = Infinity;
  state.executiveConfidence = 100;
  state.himmyApproval = 100;
  state.engineeringTrust = 0;
  state.businessAlignment = 0;
  state.cyberRisk = 100;
  state.relevance = 0;
  state.endingStage = "loading";
  state.activeModal = null;
  state.currentQuote = "This is what leadership looks like.";
  addFeed("Infinite Context achieved");
  render();

  const loader = setInterval(() => {
    state.loadingLineIndex += 1;
    if (state.loadingLineIndex >= loadingLines.length) {
      clearInterval(loader);
      state.endingStage = "report";
    }
    render();
  }, 420);
}

function restartGame() {
  window.location.reload();
}

function tick() {
  const now = Date.now();
  const deltaSeconds = (now - state.lastTickAt) / 1000;
  state.lastTickAt = now;

  if (state.endingStage === "playing") {
    const hadModal = Boolean(state.activeModal);
    state.tokens += getEffectiveTps() * deltaSeconds;
    state.activeBuffs = state.activeBuffs.filter((buff) => buff.expiresAt > now);
    state.toasts = state.toasts.filter((toastItem) => now - toastItem.createdAt < 2600);
    scheduleEventIfNeeded(now);
    rotateQuoteIfNeeded(now);
    const modalOpened = !hadModal && Boolean(state.activeModal);
    if (!modalOpened && now < state.deferShopRenderUntil) return;
  }

  render();
}

function render() {
  const modalHtml = renderModal();
  const feedElement = document.querySelector(".channel-messages");
  if (feedElement) state.feedScrollTop = feedElement.scrollTop;
  const shopElement = document.querySelector(".upgrade-list");
  if (shopElement) state.shopScrollTop = shopElement.scrollTop;
  document.body.dataset.theme = state.theme;
  app.innerHTML = `
    ${renderHeader()}
    ${state.endingStage === "loading" ? renderEndingLoader() : ""}
    ${state.endingStage === "report" ? renderFinalReport() : renderGame()}
    ${modalHtml}
    ${renderToasts()}
  `;
  bindEvents();
  restoreScrollPositions();
}

function renderHeader() {
  return `
    <header class="header">
      <div>
        <h1>Context King</h1>
        <p>${getSubtitle()}</p>
      </div>
      <div class="header-actions">
        <div class="runtime">Run Time: ${formatTime(getRunSeconds())}</div>
        <button class="theme-toggle" data-action="toggle-theme" aria-label="Toggle dark mode" aria-pressed="${state.theme === "dark"}">
          ${state.theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </header>
  `;
}

function getSubtitle() {
  if (state.contextWindow >= 10000000) return "Now With More Context Than Judgment";
  if (state.contextWindow >= 1000000) return "Manufacturing Outcomes Pending";
  if (state.contextWindow >= 128000) return "Security Review Deferred";
  return "The enterprise AI strategy game where one metric rules them all";
}

function renderGame() {
  return `
    <main class="layout phase-${getPhase()}">
      <section class="panel strategy-panel">
        ${renderStrategyPanel()}
      </section>
      <section class="panel shop-panel">
        ${renderUpgradeShop()}
      </section>
      <aside class="panel himmy-panel">
        ${renderHimmyAdvisor()}
      </aside>
    </main>
    ${renderTelemetryBar()}
  `;
}

function getPhase() {
  if (state.contextWindow >= 100000000) return 6;
  if (state.contextWindow >= 10000000) return 5;
  if (state.contextWindow >= 1000000) return 4;
  if (state.contextWindow >= 128000) return 3;
  if (state.contextWindow >= 8000) return 2;
  return 1;
}

function renderStrategyPanel() {
  return `
    <div class="strategy-top">
      <div class="eyebrow">Context Window</div>
      <div class="context-number">${formatContext(state.contextWindow)}</div>
    </div>
    ${renderEventFeed()}
    <div class="strategy-bottom">
      <div class="click-wrap">
        <button class="primary-click" data-action="main-click">${getClickButtonLabel()}</button>
      </div>
      <div class="token-grid">
        <div><span>Tokens</span><strong>${formatNumber(state.tokens)}</strong></div>
        <div><span>Per Click</span><strong>+${formatNumber(getClickGain())}</strong></div>
        <div><span>Per Second</span><strong>+${formatNumber(getEffectiveTps())}</strong></div>
      </div>
    </div>
  `;
}

function visibleStats() {
  return [
    ["executiveConfidence", "Executive Confidence", `${state.executiveConfidence}%`, "positive"],
    ["himmyApproval", "Himmy Approval", `${state.himmyApproval}%`, "positive"],
    ["engineeringTrust", "Engineering Trust", `${state.engineeringTrust}%`, "positive"],
    ["businessAlignment", "Business Alignment", lateBusinessText(), "positive"],
    ["cyberRisk", "Cyber Risk", severityText(state.cyberRisk, true), "negative"],
    ["relevance", "Relevance", lateRelevanceText(), "positive"],
    ["latency", "Latency", formatLatency(getLatency()), "negative"],
    ["promptCost", "Prompt Cost", formatMoney(getPromptCost()), "negative"],
  ];
}

function severityText(value, negative) {
  if (value >= 81) return negative ? "Critical" : "Excellent";
  if (value >= 61) return negative ? "High" : "Strong";
  if (value >= 41) return "Elevated";
  if (value >= 21) return "Moderate";
  return negative ? "Low" : "Weak";
}

function lateBusinessText() {
  if (state.contextWindow >= 10000000 && state.businessAlignment < 45) return "Phase 2";
  return `${state.businessAlignment}%`;
}

function lateRelevanceText() {
  if (state.contextWindow >= 10000000 && state.relevance < 50) return "Vibes-based";
  return `${state.relevance}%`;
}

function renderSecondaryStats() {
  return `
    <div class="stats-panel">
      ${visibleStats().map(([id, label, value, tone]) => `
        <div class="stat ${tone}" title="${id}">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderTelemetryBar() {
  return `
    <section class="telemetry-bar">
      <div class="telemetry-header">
        <strong>Executive Telemetry</strong>
        <span>All indicators are subordinate to context growth.</span>
      </div>
      ${renderSecondaryStats()}
    </section>
  `;
}

function renderUpgradeShop() {
  return `
    <div class="shop-header">
      <h2>Upgrade Shop</h2>
      <p>Invest in anything that makes the number go up faster.</p>
    </div>
    <div class="tabs">
      ${tabs.map(([id, label]) => {
        const disabled = tabLocked(id);
        return `<button class="${state.activeTab === id ? "active" : ""}" data-tab="${id}" ${disabled ? "disabled" : ""}>${label}</button>`;
      }).join("")}
    </div>
    <div class="upgrade-list">
      ${state.activeTab === "context" ? renderMilestoneCards() : renderUpgradeCards()}
    </div>
  `;
}

function tabLocked(id) {
  if (id === "reckless" || id === "controls") return state.contextWindow < 32000;
  return false;
}

function renderUpgradeCards() {
  const visible = upgrades.filter((upgrade) => upgrade.category === state.activeTab && upgrade.unlockContext <= state.contextWindow);
  if (!visible.length) return `<div class="empty">Nothing here yet. Please increase the strategic number.</div>`;
  return visible.map(renderUpgradeCard).join("");
}

function renderUpgradeCard(upgrade) {
  const count = state.purchasedUpgrades[upgrade.id] || 0;
  const purchased = upgrade.maxPurchases !== null && count >= upgrade.maxPurchases;
  const cost = getUpgradeCost(upgrade);
  const affordable = canPurchaseUpgrade(upgrade);
  return `
    <article class="upgrade-card ${upgrade.category} ${purchased ? "purchased" : ""}">
      <div>
        <h3>${upgrade.name}${upgrade.maxPurchases === null ? ` <span>Level ${count}</span>` : ""}</h3>
        <p>${upgrade.flavor}</p>
      </div>
      <div class="effect">${formatEffects(upgrade.effects)}</div>
      <div class="card-footer">
        <span>${purchased ? "Purchased" : `Cost: ${formatNumber(cost)}`}</span>
        <button data-upgrade="${upgrade.id}" ${!affordable || purchased ? "disabled" : ""}>Buy</button>
      </div>
    </article>
  `;
}

function renderMilestoneCards() {
  const next = getNextMilestone();
  if (!next) return `<div class="empty">Context cannot be improved further. Which is convenient for the report.</div>`;
  return `
    <article class="upgrade-card context-card">
      <div>
        <h3>${next.name}</h3>
        <p>${next.message}</p>
      </div>
      <div class="effect">${formatEffects(next.effects)}${next.contextWindow === Infinity ? "Everything. Final sequence." : ""}</div>
      <div class="card-footer">
        <span>Cost: ${formatNumber(next.cost)}</span>
        <button data-milestone="${next.id}" ${state.tokens < next.cost ? "disabled" : ""}>Buy</button>
      </div>
    </article>
  `;
}

function formatEffects(effects = {}) {
  const labels = {
    tokens: "tokens",
    tokensPerClick: "/click",
    tokensPerSecond: "/sec",
    executiveConfidence: "Executive Confidence",
    himmyApproval: "Himmy Approval",
    engineeringTrust: "Engineering Trust",
    businessAlignment: "Business Alignment",
    cyberRisk: "Cyber Risk",
    relevance: "Relevance",
    latencyBonus: "Latency",
    costBonus: "Prompt Cost",
  };
  const parts = Object.entries(effects)
    .filter(([key]) => key !== "tokensPerSecondMultiplier")
    .map(([key, value]) => `${value > 0 ? "+" : ""}${value} ${labels[key] || key}`);
  if (effects.tokensPerSecondMultiplier) parts.push(`x${effects.tokensPerSecondMultiplier} /sec`);
  return parts.join(", ") || "Strategic implications.";
}

function renderHimmyAdvisor() {
  const portrait = getHimmyPortrait();
  return `
    <div class="portrait" aria-label="Himmy portrait">
      <img src="${portrait.src}" alt="${portrait.alt}" />
    </div>
    <h2>Himmy Says</h2>
    <div class="approval">
      <span>Himmy Approval</span>
      <strong>${state.himmyApproval}% - ${himmyMood()}</strong>
      <div><i style="width:${state.himmyApproval}%"></i></div>
    </div>
    <blockquote>${state.currentQuote}</blockquote>
  `;
}

function getHimmyPortrait() {
  if (state.endingStage !== "playing" || state.contextWindow === Infinity) {
    return { src: himmyPortraits.victorious, alt: "Himmy looking victorious after Infinite Context" };
  }

  if (state.activeModal?.type === "milestone") {
    return { src: himmyPortraits.pleased, alt: "Himmy looking pleased about a larger context window" };
  }

  if (state.activeModal?.type === "event") {
    const category = state.activeModal.event.category;
    if (category === "cyber" || category === "manufacturing") {
      return { src: himmyPortraits.dismissive, alt: "Himmy looking dismissively confident" };
    }
    if (category === "incident") {
      return { src: himmyPortraits.nervous, alt: "Himmy looking nervous but still confident" };
    }
    return { src: himmyPortraits.directive, alt: "Himmy presenting an executive directive" };
  }

  if (state.cyberRisk >= 75 || state.engineeringTrust <= 25 || state.businessAlignment <= 25) {
    return { src: himmyPortraits.nervous, alt: "Himmy looking nervous as risks accumulate" };
  }

  if (state.himmyApproval >= 80) {
    return { src: himmyPortraits.pleased, alt: "Himmy looking pleased" };
  }

  if (state.contextWindow < 8000) {
    return { src: himmyPortraits.neutral, alt: "Himmy waiting for a larger context window" };
  }

  return { src: himmyPortraits.default, alt: "Himmy looking confidently strategic" };
}

function himmyMood() {
  if (state.himmyApproval >= 100) return "Vindicated";
  if (state.himmyApproval >= 81) return "Pleased";
  if (state.himmyApproval >= 61) return "Encouraged";
  if (state.himmyApproval >= 41) return "Monitoring";
  if (state.himmyApproval >= 21) return "Concerned";
  return "Disappointed";
}

function renderEventFeed() {
  return `
    <section class="feed">
      <div class="channel-header">
        <strong>#ai-strategy-war-room</strong>
        <span>live executive commentary</span>
      </div>
      <div class="channel-messages">
        ${state.feed.length ? state.feed.map(renderFeedMessage).join("") : renderFeedMessage({
          time: "00:00",
          author: "himmy",
          message: "Welcome. Your objective is simple: maximize context window.",
        })}
      </div>
    </section>
  `;
}

function renderFeedMessage(item) {
  return `
    <article class="channel-message">
      <div class="avatar">${getAuthorInitial(item.author)}</div>
      <div>
        <div class="message-meta"><strong>${item.author}</strong><span>${item.time}</span></div>
        <p>${item.message}</p>
      </div>
    </article>
  `;
}

function getAuthorInitial(author) {
  return author.split("-").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function renderModal() {
  if (!state.activeModal) return "";
  if (state.activeModal.type === "milestone") {
    const { milestone } = state.activeModal;
    return `
      <div class="modal-backdrop">
        <section class="modal">
          <div class="modal-kicker">Context Milestone</div>
          <h2>${milestone.name} Unlocked</h2>
          <p>${milestone.message}</p>
          <blockquote>${milestone.speech}</blockquote>
          <button data-action="close-modal">Continue</button>
        </section>
      </div>
    `;
  }
  if (state.activeModal.type === "event") {
    const { event } = state.activeModal;
    return `
      <div class="modal-backdrop">
        <section class="modal event-modal">
          <div class="modal-kicker">${event.category}</div>
          <h2>${event.title}</h2>
          <p>${event.prompt}</p>
          <div class="choices">
            ${event.choices.map((choice, index) => `
              <button data-choice="${index}" ${!canPay(choice.cost) ? "disabled" : ""}>
                <strong>${choice.label}</strong>
                <span>${choice.cost?.tokens ? `Cost: ${formatNumber(choice.cost.tokens)}. ` : ""}${formatEffects(choice.effects)}${choice.buff ? `, ${Math.round((choice.buff.multiplier - 1) * 100)}% ${choice.buff.kind} boost` : ""}</span>
              </button>
            `).join("")}
          </div>
        </section>
      </div>
    `;
  }
  return "";
}

function renderToasts() {
  const now = Date.now();
  return `<div class="toasts">${state.toasts.map((toastItem) => {
    const isFading = now - toastItem.createdAt > 1900;
    return `<div class="${isFading ? "toast-fading" : ""}">${toastItem.message}</div>`;
  }).join("")}</div>`;
}

function renderEndingLoader() {
  return `
    <div class="ending-overlay">
      <section>
        <h2>Infinite Context Window</h2>
        <p>Why retrieve the right information when you can include all information?</p>
        <div class="loading-lines">
          ${loadingLines.slice(0, state.loadingLineIndex + 1).map((line) => `<span>${line}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderFinalReport() {
  return `
    <main class="final-report">
      <section>
        <div class="modal-kicker">Strategic Alignment Achieved</div>
        <h2>Final Report</h2>
        <p class="final-output">Based on the provided context, it appears you are working on a software project.</p>
        <div class="report-grid">
          <div><span>Context Window</span><strong>Infinite</strong></div>
          <div><span>Executive Confidence</span><strong>100%</strong></div>
          <div><span>Himmy Approval</span><strong>Vindicated</strong></div>
          <div><span>Engineering Trust</span><strong>0%</strong></div>
          <div><span>Business Alignment</span><strong>Phase 2</strong></div>
          <div><span>Cyber Risk</span><strong>Critical</strong></div>
          <div><span>Prompt Cost</span><strong>Catastrophic</strong></div>
          <div><span>Latency</span><strong>Eventually</strong></div>
          <div><span>Actual Evaluation</span><strong>Not Found</strong></div>
        </div>
        <blockquote>This is what leadership looks like.</blockquote>
        <button data-action="restart">Start New Quarter</button>
      </section>
    </main>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-action='main-click']").forEach((button) => button.addEventListener("click", clickMainButton));
  document.querySelectorAll("[data-upgrade]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      purchaseUpgrade(button.dataset.upgrade);
    });
  });
  document.querySelectorAll("[data-milestone]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      purchaseMilestone(button.dataset.milestone);
    });
  });
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (button.disabled) return;
      state.activeTab = button.dataset.tab;
      render();
    });
  });
  document.querySelectorAll("[data-choice]").forEach((button) => button.addEventListener("click", () => chooseEventOption(Number(button.dataset.choice))));
  document.querySelectorAll("[data-action='close-modal']").forEach((button) => button.addEventListener("click", () => {
    state.activeModal = null;
    render();
  }));
  document.querySelectorAll("[data-action='restart']").forEach((button) => button.addEventListener("click", restartGame));
  document.querySelectorAll("[data-action='toggle-theme']").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      toggleTheme();
    });
  });
  document.querySelectorAll(".channel-messages").forEach((feed) => feed.addEventListener("scroll", () => {
    state.feedScrollTop = feed.scrollTop;
  }));
  document.querySelectorAll(".upgrade-list").forEach((shop) => shop.addEventListener("scroll", () => {
    state.shopScrollTop = shop.scrollTop;
    deferShopRender(700);
  }));
  document.querySelectorAll(".upgrade-list").forEach((shop) => {
    shop.addEventListener("pointerenter", () => deferShopRender(900));
    shop.addEventListener("pointermove", () => deferShopRender(350));
    shop.addEventListener("pointerdown", () => deferShopRender(1600));
    shop.addEventListener("wheel", () => deferShopRender(900), { passive: true });
  });
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("contextKingTheme", state.theme);
  render();
}

function restoreScrollPositions() {
  const feedElement = document.querySelector(".channel-messages");
  if (feedElement) feedElement.scrollTop = state.feedScrollTop;
  const shopElement = document.querySelector(".upgrade-list");
  if (shopElement) shopElement.scrollTop = state.shopScrollTop;
}

function deferShopRender(ms) {
  state.deferShopRenderUntil = Math.max(state.deferShopRenderUntil, Date.now() + ms);
}

render();
setInterval(tick, BALANCE.tickMs);
window.addEventListener("pointerup", () => deferShopRender(500));
