
let computerSelection = ["rock","paper","scissors"];
let items= Math.floor(Math.random() * computerSelection.length);

let playerSelection = prompt("Lets play! Please insert 'Rock', 'Paper', or 'Scissors'");
console.log ("you choose " + playerSelection.toLowerCase());




function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()=="rock" && computerSelection[items]=="scissors" || playerSelection.toLowerCase()=="paper" && computerSelection[items]=="rock" || playerSelection.toLowerCase()=="scissors" && computerSelection[items]=="paper"){
       playerPoints++;
      return win;
    }
    else if (playerSelection.toLowerCase()=="rock" && computerSelection[items]=="paper" || playerSelection.toLowerCase()=="scissors" && computerSelection[items]=="rock" || playerSelection.toLowerCase()=="paper" && computerSelection[items]=="scissors"){
      computerPoints++;
      return lose;
    }
      else if (playerSelection.toLowerCase() == computerSelection[items]){
     tiePoints++;
      return tie;
    }
    else {
      return "Invalid Input! Please input 'rock', 'paper', or 'scissors'.";
    } 
    }

    console.log("The computer choose " +items, computerSelection[items]);

    let playerPoints=0;
    let computerPoints=0;
    let tiePoints=0;
    
    const win ="Computer Lost, You Won!\n------------------------------";
    const lose ="Computer Won, You Lost!\n------------------------------";
    const tie = "It is a tie!\n------------------------------";

    console.log(playRound(playerSelection, computerSelection));
    
    
    function game() { 
     for (let i = 0; i <4; i++) {
     let playerSelection = prompt("Lets play! Please insert 'Rock', 'Paper', or 'Scissors'"); 

    console.log ("You choose " + playerSelection.toLowerCase());
       
     console.log("The computer choose " + items, computerSelection[items]);
    
    console.log(playRound(playerSelection, computerSelection)); 
     }
      if (playerPoints>computerPoints){
         return "Computer Lost, You Won!\n------------------------------";
       }
         if (playerPoints==computerPoints){
           return "It is a tie!\n------------------------------";
         }
        else{
         return "Computer Won, You Lost!\n------------------------------";
       }
    }
    
    console.log(game());
    console.log( "Final Player Score: " + playerPoints + " - Computer Score: " + computerPoints + " - Tie: " + tiePoints +" draws.\n ------------------------------");
    let score=playerPoints+computerPoints+tiePoints;
    console.log("You played this game " + score + " times.\nGame over.");
