(function () {

  const POSITIONS = {
    face: {
      label: "Face à face",
      access: ["front", "upper", "close"]
    },
    side: {
      label: "Côte à côte",
      access: ["side", "upper", "close"]
    },
    seated: {
      label: "Assis proches",
      access: ["front", "upper", "hands"]
    },
    lying: {
      label: "Allongés",
      access: ["front", "side", "upper", "hands"]
    },
    rear: {
      label: "Par derrière",
      access: ["rear", "upper", "hands"]
    }
  };

  const ACTIONS = [

    /* -------- CLASSIQUE -------- */

    {
      phase: "classic",
      title: "Baisers dans le cou",
      actor: "Elle",
      target: "Lui",
      action: "embrasse doucement le cou",
      requires: ["upper", "close"]
    },
    {
      phase: "classic",
      title: "Baisers dans le cou",
      actor: "Lui",
      target: "Elle",
      action: "embrasse doucement le cou",
      requires: ["upper", "close"]
    },
    {
      phase: "classic",
      title: "Massage des épaules",
      actor: "Elle",
      target: "Lui",
      action: "masse les épaules",
      requires: ["upper", "hands"]
    },
    {
      phase: "classic",
      title: "Massage des épaules",
      actor: "Lui",
      target: "Elle",
      action: "masse les épaules",
      requires: ["upper", "hands"]
    },
    {
      phase: "classic",
      title: "Caresses du dos",
      actor: "Elle",
      target: "Lui",
      action: "caresse le dos",
      requires: ["rear", "side"]
    },
    {
      phase: "classic",
      title: "Caresses du dos",
      actor: "Lui",
      target: "Elle",
      action: "caresse le dos",
      requires: ["rear", "side"]
    },
    {
      phase: "classic",
      title: "Baisers lents",
      actor: "Elle et lui",
      target: "ensemble",
      action: "s’embrassent lentement",
      requires: ["front", "close"]
    },
    {
      phase: "classic",
      title: "Main guidée",
      actor: "Elle",
      target: "Lui",
      action: "guide doucement sa main",
      requires: ["hands"]
    },
    {
      phase: "classic",
      title: "Main guidée",
      actor: "Lui",
      target: "Elle",
      action: "guide doucement sa main",
      requires: ["hands"]
    },
    {
      phase: "classic",
      title: "Rapprochement",
      actor: "Elle et lui",
      target: "ensemble",
      action: "se rapprochent progressivement",
      requires: ["close"]
    },

    /* -------- AVANCÉ -------- */

    {
      phase: "advanced",
      title: "Yeux fermés",
      actor: "Elle",
      target: "Lui",
      action: "ferme les yeux pendant qu’il guide",
      requires: ["hands"]
    },
    {
      phase: "advanced",
      title: "Yeux fermés",
      actor: "Lui",
      target: "Elle",
      action: "ferme les yeux pendant qu’elle guide",
      requires: ["hands"]
    },
    {
      phase: "advanced",
      title: "Rythme imposé",
      actor: "Elle",
      target: "Lui",
      action: "impose un rythme lent puis variable",
      requires: ["close"]
    },
    {
      phase: "advanced",
      title: "Rythme imposé",
      actor: "Lui",
      target: "Elle",
      action: "impose un rythme lent puis variable",
      requires: ["close"]
    },
    {
      phase: "advanced",
      title: "Pause volontaire",
      actor: "Elle",
      target: "Lui",
      action: "s’arrête volontairement puis reprend",
      requires: ["close"]
    },
    {
      phase: "advanced",
      title: "Pause volontaire",
      actor: "Lui",
      target: "Elle",
      action: "s’arrête volontairement puis reprend",
      requires: ["close"]
    },
    {
      phase: "advanced",
      title: "Sans parler",
      actor: "Elle et lui",
      target: "ensemble",
      action: "communiquent uniquement par gestes",
      requires: ["front", "side"]
    },
    {
      phase: "advanced",
      title: "Changement de rôle",
      actor: "Elle et lui",
      target: "ensemble",
      action: "échangent les rôles",
      requires: ["hands"]
    },

    /* -------- ACCESSOIRES (non graphiques, cohérents) -------- */

    {
      phase: "toy",
      title: "Accessoire simple",
      actor: "Elle",
      target: "Lui",
      action: "utilise un accessoire de manière progressive",
      requires: ["hands"]
    },
    {
      phase: "toy",
      title: "Accessoire simple",
      actor: "Lui",
      target: "Elle",
      action: "utilise un accessoire de manière progressive",
      requires: ["hands"]
    },
    {
      phase: "toy",
      title: "Accessoire guidé",
      actor: "Elle",
      target: "Lui",
      action: "le laisse guider l’utilisation",
      requires: ["hands"]
    },
    {
      phase: "toy",
      title: "Accessoire guidé",
      actor: "Lui",
      target: "Elle",
      action: "la laisse guider l’utilisation",
      requires: ["hands"]
    },
    {
      phase: "toy",
      title: "Pause accessoire",
      actor: "Elle",
      target: "Lui",
      action: "arrête l’accessoire et vérifie le confort",
      requires: ["hands"]
    },
    {
      phase: "toy",
      title: "Pause accessoire",
      actor: "Lui",
      target: "Elle",
      action: "arrête l’accessoire et vérifie le confort",
      requires: ["hands"]
    },

    /* -------- POSITIONS -------- */

    {
      phase: "position",
      title: "Face à face",
      actor: "Elle et lui",
      target: "ensemble",
      action: "se placent face à face",
      requires: ["front"],
      positionKey: "face"
    },
    {
      phase: "position",
      title: "Côte à côte",
      actor: "Elle et lui",
      target: "ensemble",
      action: "se placent côte à côte",
      requires: ["side"],
      positionKey: "side"
    },
    {
      phase: "position",
      title: "Assis proches",
      actor: "Elle et lui",
      target: "ensemble",
      action: "s’installent assis proches",
      requires: ["front"],
      positionKey: "seated"
    },
    {
      phase: "position",
      title: "Allongés",
      actor: "Elle et lui",
      target: "ensemble",
      action: "s’allongent confortablement",
      requires: ["front", "side"],
      positionKey: "lying"
    },
    {
      phase: "position",
      title: "Par derrière",
      actor: "Elle et lui",
      target: "ensemble",
      action: "se placent dans une position arrière stable",
      requires: ["rear"],
      positionKey: "rear"
    }

  ];

  window.SEXPICK_DATA = {
    positions: POSITIONS,
    actions: ACTIONS
  };

})();
