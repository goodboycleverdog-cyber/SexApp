let genres = ["Lui", "Elle"];
let bonuses =["assis","Au bord du lit", "debout","À quatre pattes","Les yeux bandés", "Mains attachées", "Double temps"];
let randBonus;
let rands;
let genre;
let part;
let parts;
let randPart;
let action;
let randAction;
let randTime;
let time;

function pick() {
        
        randBonus = Math.floor((Math.random() * 3));
        console.log(randBonus);
        if (randBonus===2) {
            randBonus = Math.floor((Math.random() * 7));
            bonus=bonuses[randBonus];
        }
        else{
            bonus="no bonus";
        }

    function txtInfo() {
        randTime = Math.floor((Math.random() * 3));
        if (randTime === 0) {
            document.write('<iframe width="100%" height="250" src="https://www.youtube.com/embed/nsXojGPQBZE?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '); 
        }
        if (randTime === 1) {
            document.write('<iframe width="100%" height="250" src="https://www.youtube.com/embed/3mP7HLtjoEQ?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        } 
        if (randTime === 2) {
            document.write('<iframe width="100%" height="250" src="https://www.youtube.com/embed/nsXojGPQBZE?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '); 
        }
       

        document.write('<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">Tour : ' + genre + '</h1><h1 class="display-4"> Partie du corp : ' + part + '</h1><h1 class="display-4">Action : ' + action );
        if (bonus!=="no bonus") {
            document.write('</h1><h1 class="display-4">Bonus : ' + bonus);

        }
        document.write('</h1></div></div>');

    };

    //random pick 1 or 2
    let rand = Math.floor((Math.random() * 2));
    document.open();
    document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
    document.write('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="pick()">Préliminaires classiques</button>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="advancedPick()">Préliminaires avancés</button>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="positionPick()">La suite...</button>');
    document.write('<script src="classic.js"></script>');

    genre = genres[rand];
    if (genre == "Lui") {
        parts = ["Anus", "Cou", "Fesse", "Seins", "Vagin", "Clitoris"];
        randPart = Math.floor((Math.random() * 6));
        part = parts[randPart];
        switch (part) {
            case "Anus":
                actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
                randAction = Math.floor((Math.random() * 5));
                action = actions[randAction];
                txtInfo()
                break;

            case "Cou":
                actions = ["Embrasser", "Masser", "Carresser"];
                randAction = Math.floor((Math.random() * 3));
                action = actions[randAction];
                txtInfo()
                break;

            case "Fesse":
                actions = [ "Lecher", "Carresser"];
                randAction = Math.floor((Math.random() * 2));
                action = actions[randAction];
                txtInfo()
                break;

            case "Seins":
                actions = [ "Embrasser", "Lecher", "Carresser", "Masser"];
                randAction = Math.floor((Math.random() * 4));
                action = actions[randAction];
                txtInfo()
                break;

            case "Vagin":
                actions = ["Embrasser", "Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
                randAction = Math.floor((Math.random() * 6));
                action = actions[randAction];
                txtInfo()
                break;

            case "Clitoris":
                actions = [ "Lecher", "Carresser", "Double stimulation", "Masser"];
                randAction = Math.floor((Math.random() * 4));
                action = actions[randAction];
                txtInfo()
                break;

            default:
                break;
        }

    } else {
        parts = ["Anus", "Cou", "Fesse", "Pénis", "Bourse", "Cou", "Fesse", "Pénis"];
        randPart = Math.floor((Math.random() * 8));
        part = parts[randPart];
        switch (part) {
            case "Anus":
                actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
                randAction = Math.floor((Math.random() * 5));
                actions = ["Lecher", "Pénétrer", "Carresser", "Double stimulation"];
                randAction = Math.floor((Math.random() * 4));
                action = actions[randAction];
                txtInfo()
                break;
            case "Cou":
                actions = ["Embrasser", "Masser", "Carresser"];
                randAction = Math.floor((Math.random() * 3));
                action = actions[randAction];
                txtInfo()
                break;
            case "Fesse":
                actions = [ "Lecher", "Carresser"];
                randAction = Math.floor((Math.random() * 2));
                action = actions[randAction];
                txtInfo()
                break;
            case "Pénis":
                actions = ["Embrasser", "Masser", "Carresser", "Carresser avec le sextoy", "Sucer", "Lecher"];
                randAction = Math.floor((Math.random() * 6));
                action = actions[randAction];
                txtInfo()
                break;
            case "Anus":
                actions = ["Lecher", "Pénétrer avec les doigts", "Pénétrer avec un sextoy", "Carresser", "Double stimulation"];
                randAction = Math.floor((Math.random() * 5));
                action = actions[randAction];
                txtInfo()
                break;
            case "Bourse":
                actions = ["Masser", "Carresser"];
                randAction = Math.floor((Math.random() * 2));
                action = actions[randAction];
                txtInfo()
                break;

            default:
                break;
        }
    }
    document.close();


}

