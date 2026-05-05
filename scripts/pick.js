document.addEventListener("DOMContentLoaded", () => {

  const state = {
    category: null,
    current: null,
    position: "face",
    duration: 120,
    remaining: 120,
    timer: null
  };

  function $(id) {
    return document.getElementById(id);
  }

  function formatTime(s) {
    return Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
  }

  function renderTimer() {
    $("timer").textContent = formatTime(state.remaining);
    $("progressBar").style.width =
      ((state.duration - state.remaining)/state.duration)*100+"%";
  }

  function isValid(action, pos) {
    return action.requires.some(r =>
      window.SEXPICK_DATA.positions[pos].access.includes(r)
    );
  }

  function pick() {
    const data = window.SEXPICK_DATA;

    let actions = data.actions
      .filter(a => a.phase === state.category)
      .filter(a => isValid(a, state.position));

    if (!actions.length) {
      $("result").textContent = "Aucun choix possible";
      return;
    }

    const a = actions[Math.floor(Math.random()*actions.length)];

    state.current = a;

    renderResult();
  }

  function renderResult() {
    const a = state.current;

    $("result").innerHTML = `
      <div>${a.actor} → ${a.target}</div>
      <h2>${a.title}</h2>
      <p>${a.actor} ${a.action}</p>
    `;
  }

  function start(cat) {
    state.category = cat;
    pick();

    state.remaining = state.duration;

    clearInterval(state.timer);

    state.timer = setInterval(() => {
      state.remaining--;
      renderTimer();

      if (state.remaining <= 0) {
        clearInterval(state.timer);
      }

    },1000);
  }

  document.querySelectorAll("[data-category]").forEach(btn=>{
    btn.onclick = ()=> start(btn.dataset.category);
  });

  $("passButton").onclick = pick;

  $("timerDuration").oninput = e=>{
    state.duration = +e.target.value;
    $("timerDurationLabel").textContent = formatTime(state.duration);
  };

});
