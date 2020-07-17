let positions=["Quatre pattes", "Bord du lit", "Elle dessus", "Lui dessus", "Debout", "Assis"]; 
let types=["anal", "vaginal","vaginal","vaginal","vaginal"]; 
bonuses=["Mains attachées", "Yeux bandés"];

function positionPick() {
    
    time = myRand(times);
    bonus =myRand(bonuses,1,3);
    position=myRand(positions);
    type = myRand(types);

    txtInfoPosition(time,position,type);
    
}
