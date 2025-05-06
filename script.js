// Rock Paper Scissors Project

// Select buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector("#newGame");

// Select display areas
const playerChoiceDisplay = document.querySelector("#player-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const winnerDisplay = document.querySelector("#winner");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

// Initialize game state
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// Add class for styling (optional)
rockBtn.classList.add("play");
paperBtn.classList.add("play");
scissorsBtn.classList.add("play");
restartBtn.classList.add("newGame");

// Event listeners for play buttons
rockBtn.addEventListener("click", () => handlePlayerChoice("ROCK"));
paperBtn.addEventListener("click", () => handlePlayerChoice("PAPER"));
scissorsBtn.addEventListener("click", () => handlePlayerChoice("SCISSORS"));

// Event listener for restart
restartBtn.addEventListener("click", resetGame);

// Handle player choice
function handlePlayerChoice(playerChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);

  playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
  winnerDisplay.textContent = result;

  updateScores(result);
  checkGameOver();
}

// Get random computer choice
function getComputerChoice() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  return options[Math.floor(Math.random() * options.length)];
}

// Play a single round and return the result text
function playRound(player, computer) {
  if (player === computer) return "It's a draw!";

  const win =
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER");

  return win ? "You win!" : "You lose!";
}

// Update score based on result
function updateScores(result) {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Check if someone reached 5 points
function checkGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    gameOver = true;
    winnerDisplay.textContent = playerScore === 5
      ? "🎉 You won the game!"
      : "💻 Computer wins the game!";
    disableButtons();
  }
}

// Disable play buttons
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Enable play buttons
function enableButtons() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

// Reset everything
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;

  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  playerChoiceDisplay.textContent = "You chose: ";
  computerChoiceDisplay.textContent = "Computer chose: ";
  winnerDisplay.textContent = "";

  enableButtons();
}
