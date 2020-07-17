
function advancedPick() {  
    let genre = myRand(genres);
    let bonus = myRand(bonuses,4,10);   
    let time = myRand(times);
  if (genre == "Lui") {
    let parts = ["Anus", "Seins", "Vagin", "Clitoris"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        case "Seins":
            actions = [ "Embrasser", "Lecher", "Carresser", "Masser"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        case "Vagin":
            actions = ["Embrasser", "Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        case "Clitoris":
            actions = [ "Lecher", "Carresser", "Double stimulation", "Masser"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        default:
            break;
    }

} else {
    let parts = ["Anus", "Pénis", "Bourse", "Pénis"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        case "Pénis":
            actions = ["Embrasser", "Masser", "Carresser", "Carresser avec le sextoy", "Sucer", "Lecher"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;
            
        case "Bourse":
            actions = ["Masser", "Carresser"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        default:
            break;
    }
}
}
