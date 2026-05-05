window.SEX_PICK_DATA = {
  filters: [
    { id: "classic", label: "Classic" },
    { id: "advanced", label: "Advanced" },
    { id: "position", label: "Positions" },
    { id: "softOnly", label: "Soft only" }
  ],
  bonuses: [
    "No bonus",
    "Sitting",
    "Edge of the bed",
    "Standing",
    "Blindfolded",
    "Hands held"
  ],
  categories: {
    classic: {
      label: "Classic",
      items: [
        { title: "Her - Neck", actions: ["Kiss", "Massage", "Caress"], intensity: "soft" },
        { title: "Her - Back", actions: ["Massage", "Caress"], intensity: "soft" },
        { title: "Her - Chest", actions: ["Kiss", "Massage", "Caress"], intensity: "soft" },
        { title: "Him - Neck", actions: ["Kiss", "Massage", "Caress"], intensity: "soft" },
        { title: "Him - Back", actions: ["Massage", "Caress"], intensity: "soft" },
        { title: "Him - Chest", actions: ["Kiss", "Massage", "Caress"], intensity: "soft" }
      ]
    },
    advanced: {
      label: "Advanced",
      items: [
        { title: "Her - Clitoris", actions: ["Caress", "Massage", "Oral"], intensity: "advanced" },
        { title: "Her - Vagina", actions: ["Caress", "Fingers"], intensity: "advanced" },
        { title: "Her - Butt", actions: ["Caress", "Kiss"], intensity: "advanced" },
        { title: "Him - Penis", actions: ["Caress", "Oral"], intensity: "advanced" },
        { title: "Him - Testicles", actions: ["Massage", "Caress"], intensity: "advanced" },
        { title: "Him - Butt", actions: ["Caress", "Kiss"], intensity: "advanced" }
      ]
    },
    position: {
      label: "Position",
      items: [
        { title: "Missionary", action: "Position", intensity: "soft" },
        { title: "Cowgirl", action: "Position", intensity: "soft" },
        { title: "Spooning", action: "Position", intensity: "soft" },
        { title: "Edge of the bed", action: "Position", intensity: "soft" },
        { title: "Standing", action: "Position", intensity: "advanced" },
        { title: "Doggy style", action: "Position", intensity: "advanced" }
      ]
    }
  }
};
