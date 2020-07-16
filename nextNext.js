
let positions=["Quatre pattes", "Bord du lit", "Elle dessus", "Lui dessus", "Debout", "Assis"]; 
let type="anal"; 
let ptiPlus=["Mains attachées", "Yeux bandés","",""];
 
function anal() {
    let randPlus= Math.floor((Math.random() * 4));
    ptipls =ptiPlus[randPlus];
    let randPosition= Math.floor((Math.random() * 6));
    position=positions[randPosition];
    txtInfo();
    
    document.close();
}

function txtInfo() {
    document.open();  
    document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
    document.write('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="pick()">Préliminaires classiques</button>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="advancedPick()">Préliminaires avancés</button>');
    document.write('<button type="button" class="btn btn-light btn-lg btn-block" onclick="analPick()">La deuxième suite...</button>');
    document.write('<script src="advanced.js"></script>');
    document.write('<script src="classic.js"></script>');
    document.write('<script src="nextNext.js"></script>');
    document.write('<script src="next.js"></script>');
    
        randTime = Math.floor((Math.random() * 3));
        if (randTime === 0) {
            document.write('<iframe width="100%" height="250" src="https://www.youtube.com/embed/nsXojGPQBZE?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '); 
        }
        if (randTime === 1) {
            document.write('<iframe width="100%" height="250" src="https://www.youtube.com/embed/3mP7HLtjoEQ?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        } 
        if (randTime === 2) {
            document.write('<iframe width="100%" height="250" src="https://www.youtube.com/embed/nsXojGPQBZE?autoplay=1" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '); 
        }
        document.write('<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">Position : ' + position+ '</h1><h1 class="display-4"> Comment : ' + type  );
        if (ptipls!=="") {
            document.write( '<h1 class="display-4"> Bonus : ' + ptipls );
        }
        document.write('</h1></div></div>');
    }
   
       