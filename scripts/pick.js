(function () {
  "use strict";

  const STORAGE_KEY = "sexpick.preferences.v4";

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
    currentCategory: null,
    history: [],
    liked: [],
    passed: [],
    recentIds: []
  };

  let state = loadState();
  let intervalId = null;
  let remainingSeconds = state.duration;
  let selectors = {};

  window.SexPickApp = {
    pick: pickResult,
    acceptStorage: acceptStorage
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved) return clone(defaultState);
      return {
        ...clone(defaultState),
        ...saved,
        filters: {
          ...defaultState.filters,
          ...(saved.filters || {})
        }
      };
    } catch (error) {
      return clone(defaultState);
    }
  }

  function saveState() {
    if (!state.storageAccepted) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getData() {
    return window.SEX_PICK_DATA;
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const rest = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${rest}`;
  }

  function makeId(category, item, action) {
    return `${category}|${item.title}|${action || item.action || ""}`;
  }

  function buildResult(category, item) {
    const data = getData();
    const action = item.actions ? randomItem(item.actions) : item.action;
    const bonus = category === "position" ? item.intensity : randomItem(data.bonuses);

    return {
      id: makeId(category, item, action),
      category,
      label: data.categories[category].label,
      title: item.title,
      action,
      bonus
    };
  }

  function getCandidateItems(category) {
    const data = getData();
    const group = data.categories[category];
    if (!group || !state.filters[category]) return [];

    return group.items.filter((item) => {
      return !state.filters.softOnly || item.intensity === "soft";
    });
  }

  function getEnabledCategories() {
    return ["classic", "advanced", "position"].filter((category) => {
      return state.filters[category] && getCandidateItems(category).length > 0;
    });
  }

  function resolveCategory(category) {
    if (category !== "random") return category;
    const enabled = getEnabledCategories();
    return enabled.length ? randomItem(enabled) : null;
  }

  function pickResult(categoryRequest) {
    if (!getData()) return;

    const category = resolveCategory(categoryRequest);
    if (!category) {
      showEmptyResult("No result available with the current filters.");
      return;
    }

    const candidates = getCandidateItems(category);
    if (!candidates.length) {
      showEmptyResult("No result available with the current filters.");
      return;
    }

    let result = null;

    for (let i = 0; i < 30; i += 1) {
      const candidate = buildResult(category, randomItem(candidates));
      const blocked = state.recentIds.includes(candidate.id) || state.passed.includes(candidate.id);
      if (!blocked) {
        result = candidate;
        break;
      }
      if (!result) result = candidate;
    }

    state.currentResult = result;
    state.currentCategory = category;
    state.recentIds = [result.id, ...state.recentIds.filter((id) => id !== result.id)].slice(0, 8);
    state.history = [result, ...state.history].slice(0, 8);

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
    setPickButtonsDisabled(true);

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
    setPickButtonsDisabled(false);

    if (selectors.audio) {
      selectors.audio.play().catch(() => {});
    }
  }

  function updateTimerUI() {
    const elapsed = state.duration - remainingSeconds;
    const percentage = Math.min(100, Math.max(0, (elapsed / state.duration) * 100));
    selectors.statusBadge.textContent = state.mode === "running" ? "Running" : "Ready";
    selectors.timer.textContent = formatTime(Math.max(remainingSeconds, 0));
    selectors.progressBar.style.width = `${percentage}%`;
  }

  function setPickButtonsDisabled(disabled) {
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.disabled = disabled;
    });
  }

  function renderResult(result) {
    selectors.result.className = "result-card";
    selectors.result.innerHTML = `
      <div class="result-label">${result.label}</div>
      <div class="result-title">${result.title}</div>
      <div class="result-line"><strong>Action:</strong> ${result.action}</div>
      <div class="result-line"><strong>Bonus:</strong> ${result.bonus}</div>
    `;
    selectors.currentCategory.textContent = result.label;
    selectors.likeButton.disabled = false;
    selectors.passButton.disabled = false;
  }

  function showEmptyResult(message) {
    selectors.result.className = "result-card empty";
    selectors.result.innerHTML = `<p>${message}</p>`;
    selectors.currentCategory.textContent = "No selection";
    selectors.likeButton.disabled = true;
    selectors.passButton.disabled = true;
  }

  function renderFilters() {
    const data = getData();
    selectors.filters.innerHTML = data.filters.map((filter) => `
      <label class="filter-pill">
        <input type="checkbox" data-filter="${filter.id}" ${state.filters[filter.id] ? "checked" : ""}>
        <span>${filter.label}</span>
      </label>
    `).join("");
  }

  function renderHistory() {
    if (!state.history.length) {
      selectors.historyList.innerHTML = "<li>No history yet.</li>";
      return;
    }

    selectors.historyList.innerHTML = state.history.map((item) => `
      <li><strong>${item.label}</strong><span>${item.title} - ${item.action}</span></li>
    `).join("");
  }

  function renderPreferences() {
    selectors.durationRange.value = state.duration;
    selectors.durationLabel.textContent = formatTime(state.duration);
    selectors.timer.textContent = formatTime(state.duration);
    selectors.cookieBanner.hidden = state.storageAccepted;
  }

  function acceptStorage() {
    state.storageAccepted = true;
    saveState();
    selectors.cookieBanner.hidden = true;
  }

  function handleFeedback(type) {
    if (!state.currentResult) return;

    const target = type === "liked" ? "liked" : "passed";
    const opposite = type === "liked" ? "passed" : "liked";

    state[target] = [state.currentResult.id, ...state[target].filter((id) => id !== state.currentResult.id)].slice(0, 50);
    state[opposite] = state[opposite].filter((id) => id !== state.currentResult.id);
    saveState();

    selectors.statusBadge.textContent = type === "liked" ? "Liked" : "Passed";

    if (type === "passed" && state.currentCategory) {
      pickResult(state.currentCategory);
    }
  }

  function attachEvents() {
    document.querySelectorAll("[data-category]").forEach((button) => {
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

    selectors.acceptStorage.addEventListener("click", acceptStorage);
    selectors.likeButton.addEventListener("click", () => handleFeedback("liked"));
    selectors.passButton.addEventListener("click", () => handleFeedback("passed"));

    selectors.clearHistory.addEventListener("click", () => {
      state.history = [];
      state.recentIds = [];
      saveState();
      renderHistory();
    });

    selectors.resetPreferences.addEventListener("click", () => {
      const accepted = state.storageAccepted;
      clearInterval(intervalId);
      intervalId = null;
      state = clone(defaultState);
      state.storageAccepted = accepted;
      remainingSeconds = state.duration;
      saveState();
      renderFilters();
      renderHistory();
      renderPreferences();
      showEmptyResult("Your result will appear here.");
      updateTimerUI();
      setPickButtonsDisabled(false);
    });
  }

  function cacheSelectors() {
    selectors = {
      filters: document.querySelector("#filters"),
      durationRange: document.querySelector("#durationRange"),
      durationLabel: document.querySelector("#durationLabel"),
      progressBar: document.querySelector("#progressBar"),
      timer: document.querySelector("#timer"),
      result: document.querySelector("#result"),
      statusBadge: document.querySelector("#statusBadge"),
      currentCategory: document.querySelector("#currentCategory"),
      historyList: document.querySelector("#historyList"),
      cookieBanner: document.querySelector("#cookieBanner"),
      acceptStorage: document.querySelector("#acceptStorage"),
      likeButton: document.querySelector("#likeButton"),
      passButton: document.querySelector("#passButton"),
      clearHistory: document.querySelector("#clearHistory"),
      resetPreferences: document.querySelector("#resetPreferences"),
      audio: document.querySelector("#audio")
    };
  }

  function init() {
    cacheSelectors();

    if (!getData()) {
      showEmptyResult("Data file missing. Check that scripts/data.js is loaded before scripts/pick.js.");
      return;
    }

    renderFilters();
    renderHistory();
    renderPreferences();
    attachEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
