
positions=["Quatre pattes", "Bord du lit", "Debout"]; 
bonuses=["Mains attachées", "Yeux bandés"];

function analPositionPick() {
    
    time = myRand(times);
    bonus =myRand(bonuses,1,3);
    position=myRand(positions);
    type = "anal";

    txtInfoPosition(time,position,type);
    
}

