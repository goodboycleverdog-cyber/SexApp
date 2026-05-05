/* scripts/data.js
   Data is intentionally exposed on window so pick.js can read it on GitHub Pages/Safari.
*/
(function () {
  const DATA = {
    classic: [
      { title: "Neck kisses", detail: "Slow and gentle", intensity: "soft" },
      { title: "Back massage", detail: "Use a slow rhythm", intensity: "soft" },
      { title: "Slow kissing", detail: "Take your time", intensity: "soft" },
      { title: "Caresses", detail: "Focus on comfort", intensity: "soft" }
    ],

    advanced: [
      { title: "Blindfold game", detail: "Keep communication clear", intensity: "advanced" },
      { title: "Hands guided", detail: "One person leads", intensity: "advanced" },
      { title: "Teasing pause", detail: "Stop and restart slowly", intensity: "advanced" },
      { title: "Roleplay prompt", detail: "Keep it simple and agreed", intensity: "advanced" }
    ],

    position: [
      { title: "Side by side", detail: "Comfort-first position", intensity: "soft" },
      { title: "Face to face", detail: "Slow and connected", intensity: "soft" },
      { title: "On top", detail: "Let the active partner control pace", intensity: "advanced" },
      { title: "From behind", detail: "Adjust pace carefully", intensity: "advanced" }
    ]
  };

  window.SEXPICK_DATA = DATA;
  window.DATA = DATA; // fallback for older pick.js versions
})();
