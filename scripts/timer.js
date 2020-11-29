let counter;
let intervalId = null;

function playAudio(){
    document.getElementById("audio").play();
}

function start() {
    clearInterval(intervalId);
    intervalId = null;
    counter = getRandomArbitrary(150,240);
        //Set de l'intervalle d'execution setInterval(functionARejouer[function()],IntervalleDeRepetitionEnMs[Number])
        intervalId = setInterval(count, 1000);
}

function count() {
    counter--;
    counter == 0 ? finish() : document.getElementById("timer").innerHTML = counter
}

function finish() {
    clearInterval(intervalId);
    document.getElementById("timer").innerHTML = "Fin";
    //Reset de l'intervalle
    intervalId = null;
    playAudio();
}
