let positions = ["Quatre pattes", "Bord du lit", "Debout", "Elle dessus", "Lui dessus", "Assis"];
let types = ["anal", "vaginal", "vaginal", "vaginal", "vaginal"];

function sexualPosition() {
    document.getElementById("preliminary").classList.add("d-none");
    document.getElementById("hotPreliminary").classList.add("d-none");
    start();
    position = myRand(positions);
    type = myRand(types);

    // If choice is anal since we cant go back to vaginal we cut the types array letting only anal value.
    // we also keep doable position
    if (type == "anal") {
        types.length = 1;
        positions.length=3;
    }
    
    txtInfoPosition(position, type);
}