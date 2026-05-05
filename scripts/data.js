const SEX_PICK_DATA = {
  filters: [
    { id: "classic", label: "Classic" },
    { id: "advanced", label: "Advanced" },
    { id: "position", label: "Positions" },
    { id: "softOnly", label: "Soft only" }
  ],
  people: ["Elle", "Lui"],
  bonuses: ["Assis", "Au bord du lit", "Debout", "À quatre pattes", "Les yeux bandés", "Mains attachées"],
  categories: {
    classic: {
      label: "Classic preliminary",
      items: [
        { target: "Elle", part: "Seins", actions: ["Embrasser", "Masser", "Caresser"], intensity: "soft" },
        { target: "Elle", part: "Cou", actions: ["Embrasser", "Masser", "Caresser"], intensity: "soft" },
        { target: "Elle", part: "Fesse", actions: ["Caresser", "Masser"], intensity: "soft" },
        { target: "Lui", part: "Cou", actions: ["Embrasser", "Masser", "Caresser"], intensity: "soft" },
        { target: "Lui", part: "Fesse", actions: ["Caresser", "Masser"], intensity: "soft" },
        { target: "Lui", part: "Pénis", actions: ["Embrasser", "Masser", "Caresser"], intensity: "soft" }
      ]
    },
    advanced: {
      label: "Advanced preliminary",
      items: [
        { target: "Elle", part: "Clitoris", actions: ["Caresser", "Masser", "Lécher"], intensity: "advanced" },
        { target: "Elle", part: "Vagin", actions: ["Embrasser", "Caresser", "Pénétrer avec les doigts"], intensity: "advanced" },
        { target: "Elle", part: "Anus", actions: ["Caresser", "Lécher"], intensity: "advanced" },
        { target: "Lui", part: "Pénis", actions: ["Caresser", "Lécher", "Sucer"], intensity: "advanced" },
        { target: "Lui", part: "Bourse", actions: ["Masser", "Caresser"], intensity: "advanced" },
        { target: "Lui", part: "Anus", actions: ["Caresser", "Lécher"], intensity: "advanced" }
      ]
    },
    position: {
      label: "Position",
      items: [
        { type: "Vaginal", position: "Quatre pattes", intensity: "advanced" },
        { type: "Vaginal", position: "Bord du lit", intensity: "soft" },
        { type: "Vaginal", position: "Debout", intensity: "advanced" },
        { type: "Vaginal", position: "Elle dessus", intensity: "soft" },
        { type: "Vaginal", position: "Lui dessus", intensity: "soft" },
        { type: "Vaginal", position: "Assis", intensity: "soft" },
        { type: "Anal", position: "Bord du lit", intensity: "advanced" },
        { type: "Anal", position: "Quatre pattes", intensity: "advanced" }
      ]
    }
  }
};
