let userscore =0;
let compscore=0;
// First, let's correctly select all the clickable elements
const choices =document.querySelectorAll('.clickable-image');
const msg = document.querySelector("#msg");
const userscorepara =document.querySelector(".userscore");
const compscorepara =document.querySelector(".compscore");


const getComputerChoice=()=> {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
};
//draw game
const drawGame=()=>{
    msg.innerText="Game was Draw. Try again!";
    console.log("Game draw");
    msg.style.backgroundColor="black";
};


const showWinner=(userWin, userChoice, computerChoice)=>{
    if(userWin){
    
        
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        console.log("You win");
    } else {
        
        
        console.log("Your lose");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }
};
    
const playGame=(userChoice) =>{
    const compChoice=getComputerChoice();


    if (userChoice===compChoice) {
        drawGame();
      } else {
        let userWins=false;
        if (userChoice=="rock"){
          userWins = compChoice=="scissors";
        } else if(userChoice=="paper"){
          userWins = compChoice=="rock";
        } else { // scissors
          userWins = compChoice=="paper";
        }
        showWinner(userWins,userChoice,compChoice);
      }
    
};



// Function to get computer's choice


// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // Get the user's choice from the parent div's id
        const userChoice = choice.parentElement.id;
        console.log("Choice was made");
        console.log("USER CHOICE=", userChoice);
        
        const computerChoice = getComputerChoice();
        console.log("COMPUTER CHOICE=", computerChoice);
        playGame(userChoice);

        // Here you can add logic to update the score or display the result
    });
});

