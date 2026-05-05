/* scripts/data.js */
(function () {
  const POSITIONS = {
    face: {
      label: "Face à face",
      access: ["front", "upper", "hands", "close", "stable", "controlled"]
    },
    side: {
      label: "Côte à côte",
      access: ["side", "upper", "hands", "close", "stable", "controlled"]
    },
    seated: {
      label: "Assis proches",
      access: ["front", "upper", "hands", "close", "stable", "controlled"]
    },
    lying: {
      label: "Allongés",
      access: ["front", "side", "upper", "hands", "close", "stable", "controlled"]
    },
    rear: {
      label: "Par derrière",
      access: ["rear", "upper", "hands", "stable", "controlled"]
    }
  };

  const ACTIONS = [
    { phase: "classic", title: "Baisers dans le cou", actor: "Elle", target: "Lui", action: "embrasse doucement le cou", requires: ["upper", "close"], intensity: "soft" },
    { phase: "classic", title: "Baisers dans le cou", actor: "Lui", target: "Elle", action: "embrasse doucement le cou", requires: ["upper", "close"], intensity: "soft" },
    { phase: "classic", title: "Massage des épaules", actor: "Elle", target: "Lui", action: "masse les épaules", requires: ["upper", "hands"], intensity: "soft" },
    { phase: "classic", title: "Massage des épaules", actor: "Lui", target: "Elle", action: "masse les épaules", requires: ["upper", "hands"], intensity: "soft" },
    { phase: "classic", title: "Caresses du dos", actor: "Elle", target: "Lui", action: "caresse le dos", requires: ["rear", "side", "upper"], intensity: "soft" },
    { phase: "classic", title: "Caresses du dos", actor: "Lui", target: "Elle", action: "caresse le dos", requires: ["rear", "side", "upper"], intensity: "soft" },
    { phase: "classic", title: "Baisers lents", actor: "Elle et lui", target: "ensemble", action: "s’embrassent lentement", requires: ["front", "close"], intensity: "soft" },
    { phase: "classic", title: "Main guidée", actor: "Elle", target: "Lui", action: "guide doucement sa main", requires: ["hands", "controlled"], intensity: "soft" },
    { phase: "classic", title: "Main guidée", actor: "Lui", target: "Elle", action: "guide doucement sa main", requires: ["hands", "controlled"], intensity: "soft" },
    { phase: "classic", title: "Rapprochement", actor: "Elle et lui", target: "ensemble", action: "se rapprochent progressivement", requires: ["close"], intensity: "soft" },
    { phase: "classic", title: "Respiration synchronisée", actor: "Elle et lui", target: "ensemble", action: "respirent au même rythme", requires: ["close"], intensity: "soft" },
    { phase: "classic", title: "Baiser puis pause", actor: "Elle", target: "Lui", action: "embrasse puis marque une courte pause", requires: ["front", "close"], intensity: "soft" },
    { phase: "classic", title: "Baiser puis pause", actor: "Lui", target: "Elle", action: "embrasse puis marque une courte pause", requires: ["front", "close"], intensity: "soft" },

    { phase: "advanced", title: "Yeux fermés", actor: "Elle", target: "Lui", action: "ferme les yeux pendant qu’il guide", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "advanced", title: "Yeux fermés", actor: "Lui", target: "Elle", action: "ferme les yeux pendant qu’elle guide", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "advanced", title: "Rythme imposé", actor: "Elle", target: "Lui", action: "impose un rythme lent puis variable", requires: ["close", "controlled"], intensity: "advanced" },
    { phase: "advanced", title: "Rythme imposé", actor: "Lui", target: "Elle", action: "impose un rythme lent puis variable", requires: ["close", "controlled"], intensity: "advanced" },
    { phase: "advanced", title: "Pause volontaire", actor: "Elle", target: "Lui", action: "s’arrête volontairement puis reprend", requires: ["close", "controlled"], intensity: "advanced" },
    { phase: "advanced", title: "Pause volontaire", actor: "Lui", target: "Elle", action: "s’arrête volontairement puis reprend", requires: ["close", "controlled"], intensity: "advanced" },
    { phase: "advanced", title: "Sans parler", actor: "Elle et lui", target: "ensemble", action: "communiquent uniquement par gestes", requires: ["front", "side", "close"], intensity: "advanced" },
    { phase: "advanced", title: "Changement de rôle", actor: "Elle et lui", target: "ensemble", action: "échangent les rôles", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "advanced", title: "Instruction unique", actor: "Elle", target: "Lui", action: "donne une seule instruction claire", requires: ["hands", "close"], intensity: "advanced" },
    { phase: "advanced", title: "Instruction unique", actor: "Lui", target: "Elle", action: "donne une seule instruction claire", requires: ["hands", "close"], intensity: "advanced" },

    { phase: "toy", title: "Accessoire simple", actor: "Elle", target: "Lui", action: "utilise un accessoire de manière progressive", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "toy", title: "Accessoire simple", actor: "Lui", target: "Elle", action: "utilise un accessoire de manière progressive", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "toy", title: "Accessoire guidé", actor: "Elle", target: "Lui", action: "le laisse guider l’utilisation", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "toy", title: "Accessoire guidé", actor: "Lui", target: "Elle", action: "la laisse guider l’utilisation", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "toy", title: "Pause accessoire", actor: "Elle", target: "Lui", action: "arrête l’accessoire et vérifie le confort", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "toy", title: "Pause accessoire", actor: "Lui", target: "Elle", action: "arrête l’accessoire et vérifie le confort", requires: ["hands", "controlled"], intensity: "advanced" },
    { phase: "toy", title: "Plug en position stable", actor: "Elle et lui", target: "ensemble", action: "prévoient le plug uniquement dans une position stable et compatible", requires: ["rear", "stable", "controlled"], intensity: "advanced" },
    { phase: "toy", title: "Validation plug", actor: "Elle et lui", target: "ensemble", action: "confirment explicitement si le plug est accepté ou non", requires: ["controlled"], intensity: "advanced" },

    { phase: "position", title: "Face à face", actor: "Elle et lui", target: "ensemble", action: "se placent face à face", requires: ["front", "stable"], positionKey: "face", intensity: "soft" },
    { phase: "position", title: "Côte à côte", actor: "Elle et lui", target: "ensemble", action: "se placent côte à côte", requires: ["side", "stable"], positionKey: "side", intensity: "soft" },
    { phase: "position", title: "Assis proches", actor: "Elle et lui", target: "ensemble", action: "s’installent assis proches", requires: ["front", "stable"], positionKey: "seated", intensity: "soft" },
    { phase: "position", title: "Allongés", actor: "Elle et lui", target: "ensemble", action: "s’allongent confortablement", requires: ["front", "side", "stable"], positionKey: "lying", intensity: "soft" },
    { phase: "position", title: "Par derrière", actor: "Elle et lui", target: "ensemble", action: "se placent dans une position arrière stable", requires: ["rear", "stable"], positionKey: "rear", intensity: "advanced" }
  ];

  window.SEXPICK_DATA = { positions: POSITIONS, actions: ACTIONS };
})();
