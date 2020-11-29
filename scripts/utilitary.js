

/**
 * 
 * @param {*} array 
 * @param {optionnal} chanceItHappen
 * @param {optionnal} ofTotalChance 
 */

function myRand(array, chanceItHappen, ofTotalChance) {
    if (!chanceItHappen && !ofTotalChance) {
        return array[Math.floor((Math.random() * array.length))];
    }

    if ((Math.floor((Math.random() * ofTotalChance)) > chanceItHappen)) {
        return "no value";
    }
    else{
        return array[Math.floor((Math.random() * array.length))];

    }
};

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function txtInfoPosition(position, type) {
    //Cas pour les positions post préliminaires 
        document.getElementById("result").innerHTML = `
        ${type}<br>
        ${position}<br>`
    }

    
function txtInfoPreliminary(genre, part, action, bonus) {
    //Cas pour les préliminaires
    document.getElementById("result").innerHTML = `
        ${genre} <br>
        ${part}<br>
        ${action}<br>
        ${bonus}`
}