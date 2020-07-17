function txtInfo(time, genre, part, action, bonus) {

    document.open();
    document.write('<script src="myRand.js"></script>');
    document.write('<script src="txtInfo.js"></script>');
    document.write('<script src="classicPick.js"></script>');
    document.write('<script src="advancedPick.js"></script>');
    document.write('<script src="positionPick.js"></script>');
    document.write('<script src="analPositionPick.js"></script>');

    document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
    document.write('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');

    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="classicPick()">Préliminaires classiques</button>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="advancedPick()">Préliminaires avancés</button>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="positionPick()">La suite...</button>');




    document.write(time);
    if (part) {
        document.write('<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">Tour : ' + genre + '</h1><h1 class="display-4"> Partie du corp : ' + part + '</h1><h1 class="display-4">Action : ' + action);
    }
    if (position) {

    }
    if (bonus != "no value") {
        document.write('</h1><h1 class="display-4">Bonus : ' + bonus);
    }
    document.write('</h1></div></div>');
    document.close();
};


function txtInfoPosition(time, position, type) {

    document.open();

    document.write('<script src="myRand.js"></script>');
    document.write('<script src="txtInfo.js"></script>');
    document.write('<script src="classicPick.js"></script>');
    document.write('<script src="advancedPick.js"></script>');
    document.write('<script src="positionPick.js"></script>');
    document.write('<script src="analPositionPick.js"></script>');

    document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
    document.write('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');

    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="classicPick()">Préliminaires classiques</button>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="advancedPick()">Préliminaires avancés</button>');
    
    if (type === "anal") {
        document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="analPositionPick()">La suite...</button>');
    } else {
        document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="positionPick()">La suite...</button>');
    }




    document.write(time);
    document.write('<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4"> position : ' + position + '</h1><h1 class="display-4"> type : ' + type);

    if (bonus != "no value") {
        document.write('</h1><h1 class="display-4">Bonus : ' + bonus);
    }
    document.write('</h1></div></div>');

    document.close();

};