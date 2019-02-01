function diceRoll(){
    var dieOne = Math.floor(Math.random()*6)+1;
    var dieTwo = Math.floor(Math.random()*6)+1;
    var diceTotal = dieOne + dieTwo;
    if(diceTotal == 7 || diceTotal == 11){
        document.getElementById("diceOutput").innerHTML= "You rolled: " + diceTotal + "You win!!!!";
    }
    else if(diceTotal == 2 || diceTotal == 3 || diceTotal == 12){
        document.getElementById("diceOutput").innerHTML= "You rolled: " + diceTotal + "You lose :(";
    }
    else{
        document.getElementById("diceOutput").innerHTML= "You rolled: " + diceTotal + "Roll Again";
    }
}
