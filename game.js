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

function chooseWinner(player, ai) {
  if (player === ai) {
    return "draw";
  } else if (
    (player === "nożyczki" && ai === "papier") ||
    (player === "kamień" && ai === "nożyczki") ||
    (player === "papier" && ai === "kamień")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function aiSelection() {
  return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function handleSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px red";
}

//funckcja sterująca
function startGame() {
  if (game.playerHand === "") {
    alert("Musisz wybrać dłoń!");
  }
  game.aiHand = aiSelection();
  chooseWinner(game.playerHand, game.aiHand);
}

startBtn.addEventListener("click", startGame);
hands.forEach((hand) => hand.addEventListener("click", handleSelection));
