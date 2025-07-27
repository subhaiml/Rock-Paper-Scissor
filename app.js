let userScore = 0;
let compScore = 0;

const userScoreDisplay = document.getElementById("us");
const compScoreDisplay = document.getElementById("cs");
const resetBtn = document.getElementById("rs");
const moveDisplay = document.querySelector(".mv");
const choices = document.querySelectorAll(".box");

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreDisplay.textContent = 0;
  compScoreDisplay.textContent = 0;
  moveDisplay.textContent = "Play your move";
});

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rand = Math.floor(Math.random() * 3);
  return options[rand];
};


const getId = (move) => {
  if (move === "rock") return 0;
  if (move === "paper") return 1;
  if (move === "scissors") return 2;
};


const draw = () => {
  console.log("It's a draw!");
  moveDisplay.textContent = "Draw!";
};


const win = (userMove, compMove) => {
  const userId = getId(userMove);
  const compId = getId(compMove);
  const winConditions = [
    [0, 2], 
    [1, 0], 
    [2, 1], 
  ];

  const userWins = winConditions.some(
    ([u, c]) => u === userId && c === compId
  );

  if (userWins) {
    userScore++;
    userScoreDisplay.textContent = userScore;
    moveDisplay.textContent = "You Win!";
    console.log("You win this round!");
  } else {
    compScore++;
    compScoreDisplay.textContent = compScore;
    moveDisplay.textContent = "Comp Wins!";
    console.log("You lost this round.");
  }
};

// Main play function
const play = (userMove) => {
  console.log("Your choice:", userMove);
  const computerMove = compChoice();
  console.log("Computer's choice:", computerMove);

  if (userMove === computerMove) {
    draw();
  } else {
    win(userMove, computerMove);
  }
};


choices.forEach((box) => {
  box.addEventListener("click", () => {
    const userMove = box.getAttribute("id");
    play(userMove);
  });
});
