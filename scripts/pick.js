const STORAGE_KEY = "sexpick.preferences.v2";

const defaultState = {
  storageAccepted: false,
  mode: "idle",
  duration: 120,
  filters: {
    classic: true,
    advanced: true,
    position: true,
    softOnly: false
  },
  currentResult: null,
  history: [],
  liked: [],
  passed: [],
  recentIds: []
};

let state = loadState();
let intervalId = null;
let remainingSeconds = state.duration;

const selectors = {
  filters: document.querySelector("#filters"),
  durationRange: document.querySelector("#durationRange"),
  durationLabel: document.querySelector("#durationLabel"),
  progressBar: document.querySelector("#progressBar"),
  timer: document.querySelector("#timer"),
  result: document.querySelector("#result"),
  statusBadge: document.querySelector("#statusBadge"),
  lastCategory: document.querySelector("#lastCategory"),
  historyList: document.querySelector("#historyList"),
  cookieBanner: document.querySelector("#cookieBanner"),
  acceptStorage: document.querySelector("#acceptStorage"),
  likeButton: document.querySelector("#likeButton"),
  passButton: document.querySelector("#passButton"),
  clearHistory: document.querySelector("#clearHistory"),
  resetPreferences: document.querySelector("#resetPreferences"),
  audio: document.querySelector("#audio")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved, filters: { ...defaultState.filters, ...saved.filters } } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  if (!state.storageAccepted) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString();
  const rest = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function getItemId(category, item, action = "") {
  if (category === "position") return `${category}:${item.type}:${item.position}`;
  return `${category}:${item.target}:${item.part}:${action}`;
}

function buildResult(category, item) {
  const categoryLabel = SEX_PICK_DATA.categories[category].label;

  if (category === "position") {
    return {
      id: getItemId(category, item),
      category,
      label: categoryLabel,
      title: `${item.type} Â· ${item.position}`,
      description: "Selected position",
      meta: item.intensity
    };
  }

  const action = randomItem(item.actions);
  const bonus = Math.random() > 0.5 ? randomItem(SEX_PICK_DATA.bonuses) : "No bonus";

  return {
    id: getItemId(category, item, action),
    category,
    label: categoryLabel,
    title: `${item.target} Â· ${item.part}`,
    description: action,
    meta: bonus
  };
}

function getCandidateItems(category) {
  const group = SEX_PICK_DATA.categories[category];
  if (!group || !state.filters[category]) return [];

  return group.items.filter((item) => {
    if (state.filters.softOnly && item.intensity !== "soft") return false;
    return true;
  });
}

function pickResult(category) {
  const candidates = getCandidateItems(category);
  if (!candidates.length) {
    showEmptyResult("No result available with the current filters.");
    return;
  }

  const nonRecentCandidates = candidates.filter((item) => {
    const possibleId = category === "position" ? getItemId(category, item) : null;
    return possibleId ? !state.recentIds.includes(possibleId) : true;
  });

  const baseItem = randomItem(nonRecentCandidates.length ? nonRecentCandidates : candidates);
  let result = buildResult(category, baseItem);

  let guard = 0;
  while (state.recentIds.includes(result.id) && guard < 10) {
    result = buildResult(category, randomItem(candidates));
    guard += 1;
  }

  state.currentResult = result;
  state.recentIds = [result.id, ...state.recentIds.filter((id) => id !== result.id)].slice(0, 8);
  state.history = [result, ...state.history].slice(0, 6);

  saveState();
  renderResult(result);
  renderHistory();
  startTimer();
}

function startTimer() {
  clearInterval(intervalId);
  state.mode = "running";
  remainingSeconds = state.duration;
  updateTimerUI();
  setButtonsDisabled(true);

  intervalId = setInterval(() => {
    remainingSeconds -= 1;
    updateTimerUI();

    if (remainingSeconds <= 0) finishTimer();
  }, 1000);
}

function finishTimer() {
  clearInterval(intervalId);
  intervalId = null;
  state.mode = "finished";
  selectors.statusBadge.textContent = "Finished";
  selectors.timer.textContent = "Done";
  selectors.progressBar.style.width = "100%";
  setButtonsDisabled(false);
  selectors.audio?.play().catch(() => {});
}

function updateTimerUI() {
  const elapsed = state.duration - remainingSeconds;
  const percentage = Math.min(100, Math.max(0, (elapsed / state.duration) * 100));
  selectors.statusBadge.textContent = state.mode === "running" ? "Running" : "Ready";
  selectors.timer.textContent = formatTime(Math.max(remainingSeconds, 0));
  selectors.progressBar.style.width = `${percentage}%`;
}

function setButtonsDisabled(disabled) {
  document.querySelectorAll("[data-action='pick']").forEach((button) => {
    button.disabled = disabled;
  });
}

function renderResult(result) {
  selectors.result.className = "result-card updated";
  selectors.result.innerHTML = `
    <div class="result-label">${result.label}</div>
    <div class="result-main">${result.title}</div>
    <div class="result-meta">${result.description}</div>
    <div class="result-meta">Bonus: ${result.meta}</div>
  `;
  selectors.lastCategory.textContent = result.label;
  selectors.likeButton.disabled = false;
  selectors.passButton.disabled = false;
}

function showEmptyResult(message) {
  selectors.result.className = "result-card empty";
  selectors.result.innerHTML = `<p class="placeholder">${message}</p>`;
  selectors.likeButton.disabled = true;
  selectors.passButton.disabled = true;
}

function renderFilters() {
  selectors.filters.innerHTML = SEX_PICK_DATA.filters.map((filter) => `
    <label class="filter-pill">
      <input type="checkbox" data-filter="${filter.id}" ${state.filters[filter.id] ? "checked" : ""} />
      <span>${filter.label}</span>
    </label>
  `).join("");
}

function renderHistory() {
  if (!state.history.length) {
    selectors.historyList.innerHTML = `<li>No history yet.</li>`;
    return;
  }

  selectors.historyList.innerHTML = state.history.map((item) => `
    <li><strong>${item.label}</strong><br>${item.title} â ${item.description}</li>
  `).join("");
}

function renderPreferences() {
  selectors.durationRange.value = state.duration;
  selectors.durationLabel.textContent = formatTime(state.duration);
  selectors.cookieBanner.hidden = state.storageAccepted;
}

function handleFeedback(type) {
  if (!state.currentResult) return;
  const opposite = type === "liked" ? "passed" : "liked";

  state[type] = [state.currentResult.id, ...state[type].filter((id) => id !== state.currentResult.id)].slice(0, 50);
  state[opposite] = state[opposite].filter((id) => id !== state.currentResult.id);

  selectors.statusBadge.textContent = type === "liked" ? "Liked" : "Passed";
  saveState();
}

function attachEvents() {
  document.querySelectorAll("[data-action='pick']").forEach((button) => {
    button.addEventListener("click", () => pickResult(button.dataset.category));
  });

  selectors.filters.addEventListener("change", (event) => {
    const filter = event.target.dataset.filter;
    if (!filter) return;
    state.filters[filter] = event.target.checked;
    saveState();
  });

  selectors.durationRange.addEventListener("input", (event) => {
    state.duration = Number(event.target.value);
    selectors.durationLabel.textContent = formatTime(state.duration);
    if (state.mode !== "running") selectors.timer.textContent = formatTime(state.duration);
    saveState();
  });

  selectors.acceptStorage.addEventListener("click", () => {
    state.storageAccepted = true;
    saveState();
    selectors.cookieBanner.hidden = true;
  });

  selectors.likeButton.addEventListener("click", () => handleFeedback("liked"));
  selectors.passButton.addEventListener("click", () => handleFeedback("passed"));

  selectors.clearHistory.addEventListener("click", () => {
    state.history = [];
    state.recentIds = [];
    saveState();
    renderHistory();
  });

  selectors.resetPreferences.addEventListener("click", () => {
    const storageAccepted = state.storageAccepted;
    state = structuredClone(defaultState);
    state.storageAccepted = storageAccepted;
    saveState();
    renderFilters();
    renderHistory();
    renderPreferences();
    showEmptyResult("Your result will appear here.");
    updateTimerUI();
  });
}

function init() {
  renderFilters();
  renderHistory();
  renderPreferences();
  selectors.timer.textContent = formatTime(state.duration);
  attachEvents();
}

init();
