/*
array is the array for the random pick  
chance/total are optionnal. rand set value chance/total else it set value to "no value"
*/
function myRand(array, chance, total) {
    if (!chance && !total) {
        return array[Math.floor((Math.random() * array.length))];
    }

    if ((Math.floor((Math.random() * total)) > chance)) {
        return "no value";
    }
    else{
        return array[Math.floor((Math.random() * array.length))];

    }
};