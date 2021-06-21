////////////////////////////////////////////////////
////////////////MATH FUNCTION///////////////////////
////////////////////////////////////////////////////
function myRand(array, chanceItHappen, ofTotalChance) {
    if (!chanceItHappen && !ofTotalChance) {
        return array[Math.floor((Math.random() * array.length))];
    }
    //error gestion
    if ((Math.floor((Math.random() * ofTotalChance)) > chanceItHappen)) {
        console.log("myRand function failed due to wrong parameters")
        console.log("chanceItHappen must be inferior to ofTotalChance")
        return;
    } else {
        return array[Math.floor((Math.random() * array.length))];
    }
};

function getRandomArbitrary(min, max) {
    //error gestion
    if (!min || !max) {
        console.log("one of both parameters are missing in getRandomArbitrary function");
    } else {
        return Math.floor(Math.random() * (max - min) + min);
    }

}
////////////////////////////////////////////////////
////////////////TEXT FUNCTION///////////////////////
////////////////////////////////////////////////////
function txtInfo(position,type,genre, part, action, bonus) {
    if (position, type) {
        //Cas pour les positions post préliminaires 
        document.getElementById("result").innerHTML = `
    ${type}<br>
    ${position}<br>`
    } else {
        //Cas pour les préliminaires
        document.getElementById("result").innerHTML = `
    ${genre} <br>
    ${part}<br>
    ${action}<br>
    ${bonus}`
    }
}
    ////////////////////////////////////////////////////
    ////////////////////////TIMER///////////////////////
    ////////////////////////////////////////////////////
    const minCount = 120;
    const maxCount = 240;
    let counter;
    let intervalId = null;

    function playAudio() {
        document.getElementById("audio").play();
    }
    function progressBar(){
        myProgressBar=document.getElementById("progressBar") 
        barWidth= counter*100/originalCounter;
        myProgressBar.style.width=barWidth+"%";
    }

    function start() {
        clearInterval(intervalId);
        intervalId = null;
        counter = getRandomArbitrary(minCount, maxCount);
        originalCounter=counter;
        document.getElementById("timer").innerHTML = counter;
        //Set de l'intervalle d'execution setInterval(functionARejouer[function()],IntervalleDeRepetitionEnMs[Number])
        intervalId = setInterval(count, 1000);
    }

    function count() {
        progressBar();
        document.getElementById("timer").innerHTML = counter;
        counter--;
        document.getElementById("timer").innerHTML = counter
        counter == 0 ? finish() : document.getElementById("timer").innerHTML = counter
    }

    function finish() {
        clearInterval(intervalId);
        myProgressBar.style.width=0+"%";
        document.getElementById("timer").innerHTML = "Fin";
        playAudio()
        //Reset de l'intervalle
        intervalId = null;
    }

    ////////////////////////////////////////////////////
    ////////////////////////GENRE///////////////////////
    ////////////////////////////////////////////////////
    const genres = ['Elle', 'Lui'];
    let genre;

    function getGenre() {
        return myRand(genres);
    }
    ////////////////////////////////////////////////////
    /////////////////////POSITION///////////////////////
    ////////////////////////////////////////////////////
    const positions = [
        "Quatre pattes",
        "Bord du lit",
        "Debout",
        "Elle dessus",
        "Lui dessus",
        "Assis"
    ];
    const types = [
        "Anal",
        "Vaginal",
        "Vaginal",
        "Vaginal",
        "Vaginal"
    ];

    function sexualPosition() {
        document.getElementById("preliminary").classList.add("hidden");
        document.getElementById("hotPreliminary").classList.add("hidden");
        start();
        position = myRand(positions);
        type = myRand(types);

        // If choice is anal since we cant go back to Vaginal (medical advice) we keep only anal value.
        // we also keep just doable positions
        if (type == "anal") {
            types.length = 1;
            positions.length = 3;
        }

        txtInfo(position, type);
    }
    ////////////////////////////////////////////////////
    ////////////////////////BONUS///////////////////////
    ////////////////////////////////////////////////////
    const bonuses = [
        "assis",
        "Au bord du lit",
        "debout",
        "À quatre pattes",
        "Les yeux bandés",
        "Mains attachées",
    ];

    let bonus;

    function getBonus() {
        bonus = myRand(bonuses, 1, 2);
        return bonus;
    }
    ////////////////////////////////////////////////////
    ////////////////////////PICKS///////////////////////
    ////////////////////////////////////////////////////
    let partsElle = [
        "Anus",
        "Seins",
        "Vagin",
        "Clitoris",
        "Cou",
        "Fesse"
    ];
    let partsLui = [
        "Anus",
        "Pénis",
        "Bourse",
        "Pénis",
        "Cou",
        "Fesse"
    ];

    function pick() {

        //Start counter
        start();

        genre = getGenre();
        bonus = getBonus();

        if (genre == "Lui") {
            let part = myRand(partsElle);

            switch (part) {
                case "Anus":
                    actions = [
                        "Lecher",
                        "Pénétrer avec les doigts",
                        "Pénétrer avec un sextoy",
                        "Carresser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;

                case "Seins":
                    actions = [
                        "Embrasser",
                        "Lecher",
                        "Carresser",
                        "Masser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;

                case "Vagin":
                    actions = [
                        "Embrasser",
                        "Lecher",
                        "Pénétrer avec les doigts",
                        "Pénétrer avec un sextoy",
                        "Carresser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;

                case "Clitoris":
                    actions = [
                        "Lecher",
                        "Carresser",
                        "Masser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;
                    case "Cou":
                        actions = [
                            "Embrasser",
                            "Masser",
                            "Carresser"
                        ];
                        action = myRand(actions);
                        txtInfo(false,false,genre, part, action, bonus);
                        break;
    
                    case "Fesse":
                        actions = [
                            "Lecher",
                            "Carresser"
                        ];
                        action = myRand(actions);
                        txtInfo(false,false,genre, part, action, bonus);
                        break;

                default:
                    console.log("An error occur in the function pick() or in the function hotpick() because the parameter partElle is not one of the defined case");
                    break;
            }

        } else {
            let part = myRand(partsLui);

            switch (part) {
                case "Anus":
                    actions = [
                        "Lecher",
                        "Pénétrer avec les doigts",
                        "Pénétrer avec un sextoy",
                        "Carresser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;
                case "Cou":
                    actions = [
                        "Embrasser",
                        "Masser",
                        "Carresser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;
                case "Fesse":
                    actions = [
                        "Lecher",
                        "Carresser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;
                case "Pénis":
                    actions = [
                        "Embrasser",
                        "Masser",
                        "Carresser",
                        "Carresser avec le sextoy",
                        "Sucer",
                        "Lecher"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;
                case "Anus":
                    actions = [
                        "Lecher",
                        "Pénétrer avec les doigts",
                        "Pénétrer avec un sextoy",
                        "Carresser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;
                case "Bourse":
                    actions = [
                        "Masser",
                        "Carresser"
                    ];
                    action = myRand(actions);
                    txtInfo(false,false,genre, part, action, bonus);
                    break;

                default:
                    console.log("An error occur in the function pick() or in the function hotpick() because the parameter partLui is not one of the defined case");
                    break;
            }
        }
    }
    ////////////////////////////////////////////////////
    ////////////////////////PICKS///////////////////////
    ////////////////////////////////////////////////////

    //hotpick restrict the choices to the first 4 values of parts array

    function hotPick() {
        // Disable classic prelimary
        document.getElementById("preliminary").classList.add('hidden');

        partsElle.length = 4
        partsLui.length = 4
        pick()
    }