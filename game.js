// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const hands = [...document.querySelectorAll(".select img")];
const startBtn = document.querySelector(".start");

const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

function aiChoice() {}

function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px red";
}

function startGame() {
  if (!game.playerHand) {
    return alert("wybierz dłoń!");
  }
  game.aiHand = aiChoice();
}

startBtn.addEventListener("click", startGame);
hands.forEach((hand) => hand.addEventListener("click", handSelection));
