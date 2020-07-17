const genres = ["Lui", "Elle"];
let bonuses = ["assis", "Au bord du lit", "debout", "À quatre pattes", "Les yeux bandés", "Mains attachées", "Double temps"];
const times = ['<iframe width="100%" height="250" src="https://www.youtube.com/embed/nsXojGPQBZE?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ','<iframe width="100%" height="250" src="https://www.youtube.com/embed/3mP7HLtjoEQ?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];

function classicPick() {  
    let time = myRand(times);
    let genre = myRand(genres);
    let bonus = myRand(bonuses,4,10);   
  if (genre == "Lui") {
    let parts = ["Anus", "Cou", "Fesse", "Seins", "Vagin", "Clitoris"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        case "Cou":
            actions = ["Embrasser", "Masser", "Carresser"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;

        case "Fesse":
            actions = [ "Lecher", "Carresser"];
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
    let parts = ["Anus", "Cou", "Fesse", "Pénis", "Bourse", "Cou", "Fesse", "Pénis"];
    let part = myRand(parts);

    switch (part) {
        case "Anus":
            actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;
        case "Cou":
            actions = ["Embrasser", "Masser", "Carresser"];
            action = myRand(actions);
            txtInfo(time,genre,part,action,bonus);
            break;
        case "Fesse":
            actions = [ "Lecher", "Carresser"];
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
