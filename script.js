// // Function to randomly generate the computer's choice
// function getCompChoice() {
//     const answer = ["Rock", "Paper", "Scissors"];
//     let choice = answer[Math.floor(Math.random() * answer.length)].toUpperCase(); // Randomly pick one and convert to uppercase
//     return choice;
// }

// // Function to get the human player's choice via prompt with input validation
// function getHumanChoice() {
//     let choice = prompt("Rock, Paper or Scissors?").toUpperCase(); // Get user input and capitalize
    
//     // Loop until user enters a valid choice
//     while (!["ROCK", "PAPER", "SCISSORS"].includes(choice)) {
//         // Invalid choice, prompt again
//         choice = prompt("Invalid input! Please enter Rock, Paper, or Scissors:").toUpperCase();
//     }

//     return choice;
// }


// // Initialize the scores for the player and the computer
// let playerScore = 0;
// let computerScore = 0;

// // Function to play a single round of Rock, Paper, Scissors
// function playRound(humanChoice, computerChoice) {
//     // Case: Both choices are the same - draw
//     if (humanChoice === computerChoice) {
//         console.log('You chose ' + humanChoice + ' and Computer chose ' + computerChoice + '. Draw!');
//     }
//     // Case: Player loses
//     else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
//         console.log("You lose! Paper beats Rock.");
//         computerScore++;
//     } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
//         console.log("You lose! Scissors beats Paper.");
//         computerScore++;
//     } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
//         console.log("You lose! Rock beats Scissors.");
//         computerScore++;
//     }
//     // Case: Player wins (all other remaining valid combinations)
//     else {
//         console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
//         playerScore++;
//     }
//     // display score
//     console.log(playerScore, computerScore)
// }

// // Get the choices from human and computer
// const humanSelection = getHumanChoice();
// const computerSelection = getCompChoice();

// // Play one round with those selections
// //playRound(humanSelection, computerSelection);

// // Show the current scores
// // console.log("Player Score: " + playerScore);
// // console.log("Computer Score: " + computerScore);

// // Function to play the game until someone reaches 5 points
// function playGame() {
//     // Reset scores before starting
//     playerScore = 0;
//     computerScore = 0;

//     // Keep playing rounds until one score hits 5
//     while (playerScore < 5 && computerScore < 5) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getCompChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     // Declare final winner
//     if (playerScore === 5) {
//         console.log("🎉 Congratulations! You won the game!");
//     } else {
//         console.log("😞 The computer won the game. Better luck next time!");
//     }
// }

// // Start the game
// playGame();

// const container = document.querySelector("#container");

// // Create the content div and set styles
// const content = document.createElement("div");
// content.setAttribute("style", "background-color: pink; border: 2px solid black;");

// // Create the header (h1) and set its text content
// const header = document.createElement("h1");
// header.textContent = "I am a header";

// // Append the header to the content div
// content.appendChild(header);

// // Create the paragraph and set its text content
// const paragraph = document.createElement("p");
// paragraph.textContent = "me too";

// // Append the paragraph to the content div
// content.appendChild(paragraph);

// // Finally, append the content div to the container
// container.appendChild(content);


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
