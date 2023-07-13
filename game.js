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

function startGame() {
  if (game.playerHand === "") {
    alert("Musisz wybrać dłoń!");
  }
}

startBtn.addEventListener("click", startGame);
hands.forEach((hand) => hand.addEventListener("click", handleSelection));
