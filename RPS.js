function playRPS(){
    var player = document.getElementById("userInput");
    player = player.value.toLowerCase();
    document.getElementById("userOutput").innerHTML = "You chose " + player;
        var comp = Math.floor(Math.random()*3)+1;;
        if(comp == 1){
            comp = "bolder";
        }else if(comp == 2){
            comp = "parchment";
        }else if(comp == 3){
            comp = "shears";
        }
    document.getElementById("computerOutput").innerHTML = "Computer chose " + comp
    game(comp)
    function game(comp){
        if(player == "bolder"){
            if(comp == "bolder"){
                document.getElementById("rpsOutput").innerHTML = "Tie, try again";
            }else if(comp == "shears"){
                document.getElementById("rpsOutput").innerHTML = "You win!!!!";
            }else if(comp == "parchment"){
                document.getElementById("rpsOutput").innerHTML = "You lose :(";
            }
        }else if(player == "shears"){
            if(comp == "bolder"){
                document.getElementById("rpsOutput").innerHTML = "You lose :(";
            }else if(comp == "shears"){
                document.getElementById("rpsOutput").innerHTML = "Tie, try again";
            }else if(comp == "parchment"){
                document.getElementById("rpsOutput").innerHTML = "You win!!!!";
            }
        }else if(player == "parchment"){
                if(comp == "bolder"){
                    document.getElementById("rpsOutput").innerHTML = "You win!!!!";
                }else if(comp == "shears"){
                    document.getElementById("rpsOutput").innerHTML = "You lose :(";
                }else if(comp == "parchment"){
                    document.getElementById("rpsOutput").innerHTML = "Tie, try again";
                }
        }
    }
}
