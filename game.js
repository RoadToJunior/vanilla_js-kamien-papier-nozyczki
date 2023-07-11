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

function aiChoice() {
  return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

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
  if (game.playerHand === "kamień" && game.aiHand === "nożyczki") {
    gameSummary.wins += 1;
  } else if (game.playerHand === "nożyczki" && game.aiHand === "papier") {
    gameSummary.wins += 1;
  } else if (game.playerHand === "papier" && game.aiHand === "kamień") {
    gameSummary.wins += 1;
  } else if (game.playerHand === game.aiHand) {
    gameSummary.draws += 1;
  } else {
    document.querySelector(".losses span").textContent =
      gameSummary.losses += 1;
  }
  gameSummary.numbers += 1;
}

startBtn.addEventListener("click", startGame);
hands.forEach((hand) => hand.addEventListener("click", handSelection));
