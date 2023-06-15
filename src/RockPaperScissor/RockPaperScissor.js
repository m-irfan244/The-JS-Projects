let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = "User wins!";
}

function lose() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "Computer wins!";
}

function draw() {
  result_div.innerHTML = "It's a draw.";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win();
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}

main();
