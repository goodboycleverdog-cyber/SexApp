function hotPreliminary() { 
    // Disable classic prelimary
    document.getElementById("preliminary").classList.add('d-none');
    // Start the count
    start();

    genre = getGenre();
    bonus = getBonus();  

  if (genre == "Lui") {
    let parts = ["Anus", "Seins", "Vagin", "Clitoris"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        case "Seins":
            actions = [ "Embrasser", "Lecher", "Carresser", "Masser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        case "Vagin":
            actions = ["Embrasser", "Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        case "Clitoris":
            actions = [ "Lecher", "Carresser", "Masser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        default:
            break;
    }

} else {
    let parts = ["Anus", "Pénis", "Bourse", "Pénis"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        case "Pénis":
            actions = ["Embrasser", "Masser", "Carresser", "Carresser avec le sextoy", "Sucer", "Lecher"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;
            
        case "Bourse":
            actions = ["Masser", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        default:
            break;
    }
}
}
