function preliminary() {  

    //Start counter
    start();

    genre = getGenre();
    bonus = getBonus();
    
  if (genre == "Lui") {
    let parts = ["Anus", "Cou", "Fesse", "Seins", "Vagin", "Clitoris"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        case "Cou":
            actions = ["Embrasser", "Masser", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;

        case "Fesse":
            actions = ["Lecher", "Carresser"];
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
    let parts = ["Anus", "Cou", "Fesse", "Pénis", "Bourse", "Cou", "Fesse", "Pénis"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;
        case "Cou":
            actions = ["Embrasser", "Masser", "Carresser"];
            action = myRand(actions);
            txtInfoPreliminary(genre,part,action,bonus);
            break;
        case "Fesse":
            actions = [ "Lecher", "Carresser"];
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
