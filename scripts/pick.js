/* scripts/pick.js */
(function () {
  "use strict";

  const STORAGE_KEYS = {
    consent: "sexpick.consent",
    history: "sexpick.history",
    passes: "sexpick.passes",
    timer: "sexpick.timer",
    currentPosition: "sexpick.currentPosition"
  };

  const FLOW = ["classic", "advanced", "toy", "position"];

  const state = {
    category: null,
    currentPick: null,
    currentPositionKey: "face",
    isRunning: false,
    duration: 120,
    remaining: 120,
    timerId: null,
    history: [],
    passes: [],
    lastPickedIds: [],
    pendingCategory: null,
    copyText: ""
  };

  function $(id) {
    return document.getElementById(id);
  }

  function data() {
    return window.SEXPICK_DATA || null;
  }

  function safeText(el, value) {
    if (el) el.textContent = value;
  }

  function loadJson(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  function hasConsent() {
    return localStorage.getItem(STORAGE_KEYS.consent) === "yes";
  }

  function saveIfAllowed(key, value) {
    if (hasConsent()) saveJson(key, value);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${String(secs).padStart(2, "0")}`;
  }

  function categoryLabel(category) {
    return {
      classic: "Classique",
      advanced: "Avancé",
      toy: "Accessoires",
      position: "Position",
      surprise: "Surprise"
    }[category] || "Sélection";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setStatus(value) {
    safeText($("statusBadge"), value);
  }

  function currentPosition() {
    const appData = data();
    return appData?.positions?.[state.currentPositionKey] || null;
  }

  function isCompatible(action, position) {
    if (!position || !Array.isArray(action.requires)) return true;
    return action.requires.some((req) => position.access.includes(req));
  }

  function formatAction(item) {
    if (item.actor === "Elle et lui") return item.action;
    return `${item.actor} ${item.action}`;
  }

  function setCopyButtonEnabled(enabled) {
    const copyButton = $("copyButton");
    if (copyButton) copyButton.disabled = !enabled;
  }

  function renderTimer() {
    safeText($("timer"), formatTime(state.remaining));

    const progressBar = $("progressBar");
    if (progressBar) {
      const elapsed = state.duration - state.remaining;
      const progress = state.duration > 0 ? (elapsed / state.duration) * 100 : 0;
      progressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
    }
  }

  function renderCategory(category) {
    const pos = currentPosition();
    const label = category ? `${categoryLabel(category)} · ${pos ? pos.label : "Position inconnue"}` : "Aucune sélection";
    safeText($("currentCategory"), label);

    document.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle("selected", button.dataset.category === category);
    });
  }

  function renderPositionSelect() {
    const select = $("positionSelect");
    const appData = data();
    if (!select || !appData?.positions) return;

    select.innerHTML = Object.entries(appData.positions)
      .map(([key, position]) => `<option value="${escapeHtml(key)}">${escapeHtml(position.label)}</option>`)
      .join("");

    select.value = state.currentPositionKey;

    select.addEventListener("change", () => {
      state.currentPositionKey = select.value;
      if (hasConsent()) localStorage.setItem(STORAGE_KEYS.currentPosition, state.currentPositionKey);
      renderCategory(state.category);
      if (state.currentPick) renderResult();
    });
  }

  function renderResult(message) {
    const result = $("result");
    const content = $("resultContent");
    if (!result || !content) return;

    if (!state.currentPick) {
      result.classList.add("empty");
      content.innerHTML = `<p>${message || "Le résultat apparaîtra ici."}</p>`;
      state.copyText = "";
      setCopyButtonEnabled(false);
      return;
    }

    const item = state.currentPick;
    const pos = currentPosition();
    const action = formatAction(item);

    state.copyText = [
      `${categoryLabel(item.phase)} · ${pos?.label || ""}`,
      `${item.title}`,
      `${item.actor} → ${item.target}`,
      `${action}.`
    ].join("\n");

    result.classList.remove("empty");
    content.innerHTML = `
      <span class="result-category">${escapeHtml(categoryLabel(item.phase))} · ${escapeHtml(pos?.label || "")}</span>
      <h2>${escapeHtml(item.title)}</h2>
      <div class="role-line">${escapeHtml(item.actor)} → ${escapeHtml(item.target)}</div>
      <p class="action-line">${escapeHtml(action)}.</p>
    `;
    setCopyButtonEnabled(true);
  }

  function renderHistory() {
    const historyList = $("historyList");
    if (!historyList) return;

    if (!state.history.length) {
      historyList.innerHTML = "";
      return;
    }

    historyList.innerHTML = state.history.slice(0, 5).map((item) => `
      <article class="history-item">
        <strong>${escapeHtml(categoryLabel(item.phase))}</strong>
        <span>${escapeHtml(item.title)}</span>
      </article>
    `).join("");
  }

  function getAvailableItems(category) {
    const appData = data();

    if (!appData?.actions) {
      renderResult("Fichier data.js introuvable ou invalide. Vérifiez que scripts/data.js est chargé avant scripts/pick.js.");
      return [];
    }

    const softOnly = $("softOnly") && $("softOnly").checked;
    const includeToys = $("includeToys") ? $("includeToys").checked : true;
    const position = currentPosition();

    const phases = category === "surprise"
      ? FLOW.filter((phase) => includeToys || phase !== "toy")
      : [category];

    let items = appData.actions
      .filter((item) => phases.includes(item.phase))
      .filter((item) => includeToys || item.phase !== "toy")
      .filter((item) => isCompatible(item, position))
      .map((item, index) => ({
        id: `${item.phase}-${index}-${item.title}`,
        category: item.phase,
        ...item
      }));

    if (softOnly) {
      items = items.filter((item) => item.intensity === "soft");
    }

    const passedTitles = new Set(state.passes.map((item) => item.title));
    items = items.filter((item) => !passedTitles.has(item.title));

    const nonRepeated = items.filter((item) => !state.lastPickedIds.includes(item.id));
    return nonRepeated.length ? nonRepeated : items;
  }

  function pickItem(category) {
    const items = getAvailableItems(category);

    if (!items.length) {
      state.currentPick = null;
      renderResult("Aucun choix compatible avec cette position et ces filtres.");
      return null;
    }

    const selected = items[Math.floor(Math.random() * items.length)];
    state.currentPick = selected;

    if (selected.positionKey) {
      state.currentPositionKey = selected.positionKey;
      const select = $("positionSelect");
      if (select) select.value = selected.positionKey;
      if (hasConsent()) localStorage.setItem(STORAGE_KEYS.currentPosition, state.currentPositionKey);
    }

    state.lastPickedIds.unshift(selected.id);
    state.lastPickedIds = state.lastPickedIds.slice(0, 8);

    state.history.unshift({
      phase: selected.phase,
      title: selected.title
    });
    state.history = state.history.slice(0, 10);

    saveIfAllowed(STORAGE_KEYS.history, state.history);
    renderResult();
    renderHistory();
    renderCategory(category);
    return selected;
  }

  function startPhase(category, resetTimer) {
    state.category = category;
    renderCategory(category);

    const selected = pickItem(category);
    if (!selected) return;

    if (!state.isRunning || resetTimer) {
      state.remaining = state.duration;
    }

    if (!state.isRunning) {
      state.isRunning = true;
      setStatus("En cours");
      clearInterval(state.timerId);
      state.timerId = setInterval(tick, 1000);
    }

    renderTimer();
  }

  function tick() {
    state.remaining -= 1;
    renderTimer();

    if (state.remaining <= 0) finishTimer();
  }

  function finishTimer() {
    clearInterval(state.timerId);
    state.timerId = null;
    state.remaining = 0;
    state.isRunning = false;
    setStatus("Terminé");
    renderTimer();

    const audio = $("audio");
    if (audio && typeof audio.play === "function") {
      audio.play().catch(() => {});
    }
  }

  function passCurrent() {
    if (!state.category) return;
    if (state.currentPick) {
      state.passes.unshift(state.currentPick);
      state.passes = state.passes.slice(0, 30);
      saveIfAllowed(STORAGE_KEYS.passes, state.passes);
    }
    setStatus("Passé");
    pickItem(state.category);
  }

  function nextPhase() {
    if (!state.category) {
      startPhase("classic", true);
      return;
    }

    const currentIndex = FLOW.indexOf(state.category);
    const nextCategory = FLOW[currentIndex + 1] || FLOW[0];

    if (state.isRunning) {
      openConfirmModal(nextCategory);
      return;
    }

    startPhase(nextCategory, true);
  }

  function openConfirmModal(category) {
    state.pendingCategory = category;
    safeText($("modalCategory"), categoryLabel(category));

    const modal = $("confirmModal");
    if (modal) modal.hidden = false;
  }

  function closeConfirmModal() {
    state.pendingCategory = null;

    const modal = $("confirmModal");
    if (modal) modal.hidden = true;
  }

  function confirmPhaseChange() {
    if (!state.pendingCategory) return;

    const category = state.pendingCategory;
    closeConfirmModal();
    startPhase(category, false);
    setStatus("Étape changée");
  }

  function clearHistory() {
    state.history = [];
    saveIfAllowed(STORAGE_KEYS.history, state.history);
    renderHistory();
  }

  function resetPreferences() {
    state.passes = [];
    state.history = [];
    state.lastPickedIds = [];
    state.currentPick = null;
    state.category = null;

    saveIfAllowed(STORAGE_KEYS.passes, state.passes);
    saveIfAllowed(STORAGE_KEYS.history, state.history);

    renderCategory(null);
    renderHistory();
    renderResult();
    setStatus("Prêt");
  }

  async function copyResult() {
    if (!state.copyText) return;

    const copyButton = $("copyButton");

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(state.copyText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = state.copyText;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      if (copyButton) {
        copyButton.textContent = "Copié ✓";
        copyButton.classList.add("copied");

        setTimeout(() => {
          copyButton.textContent = "Copier";
          copyButton.classList.remove("copied");
        }, 1400);
      }
    } catch {
      if (copyButton) {
        copyButton.textContent = "Erreur";
        setTimeout(() => {
          copyButton.textContent = "Copier";
        }, 1400);
      }
    }
  }

  function initConsent() {
    const banner = $("cookieBanner");
    const acceptButton = $("acceptCookies");

    if (!banner || !acceptButton) return;

    banner.hidden = hasConsent();

    acceptButton.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEYS.consent, "yes");
      banner.hidden = true;

      saveJson(STORAGE_KEYS.history, state.history);
      saveJson(STORAGE_KEYS.passes, state.passes);
      saveJson(STORAGE_KEYS.timer, state.duration);
      localStorage.setItem(STORAGE_KEYS.currentPosition, state.currentPositionKey);
    });
  }

  function initTimerSlider() {
    const slider = $("timerDuration");
    const label = $("timerDurationLabel");
    if (!slider) return;

    const savedTimer = Number(localStorage.getItem(STORAGE_KEYS.timer));
    state.duration = Number.isFinite(savedTimer) && savedTimer > 0 ? savedTimer : Number(slider.value || 120);
    state.remaining = state.duration;

    slider.value = String(state.duration);
    safeText(label, formatTime(state.duration));
    renderTimer();

    slider.addEventListener("input", () => {
      state.duration = Number(slider.value);
      state.remaining = state.duration;
      safeText(label, formatTime(state.duration));
      renderTimer();

      if (hasConsent()) localStorage.setItem(STORAGE_KEYS.timer, String(state.duration));
    });
  }

  function initEvents() {
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.category;
        if (state.isRunning) {
          openConfirmModal(category);
          return;
        }
        startPhase(category, true);
      });
    });

    $("passButton")?.addEventListener("click", passCurrent);
    $("nextPhaseButton")?.addEventListener("click", nextPhase);
    $("clearHistory")?.addEventListener("click", clearHistory);
    $("resetPreferences")?.addEventListener("click", resetPreferences);
    $("copyButton")?.addEventListener("click", copyResult);

    $("confirmChange")?.addEventListener("click", confirmPhaseChange);
    $("cancelChange")?.addEventListener("click", closeConfirmModal);
    $("modalBackdrop")?.addEventListener("click", closeConfirmModal);
  }

  function initState() {
    state.history = loadJson(STORAGE_KEYS.history, []);
    state.passes = loadJson(STORAGE_KEYS.passes, []);
    state.currentPositionKey = localStorage.getItem(STORAGE_KEYS.currentPosition) || "face";

    renderPositionSelect();
    renderHistory();
    renderResult();
    renderCategory(null);
    setStatus("Prêt");
  }

  function init() {
    initState();
    initTimerSlider();
    initEvents();
    initConsent();

    if (!data()) {
      renderResult("Fichier data.js introuvable. Vérifiez que scripts/data.js est chargé avant scripts/pick.js.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
