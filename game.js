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

function gameResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;
  document.querySelector(".numbers span").textContent = ++gameSummary.numbers;
  if (result === "win") {
    document.querySelector('[data-summary="who-win"]').style.color = "green";
    document.querySelector('[data-summary="who-win"]').textContent =
      "Wygrałeś!";
    document.querySelector(".wins span").textContent = ++gameSummary.wins;
  } else if (result === "lose") {
    document.querySelector('[data-summary="who-win"]').style.color = "red";
    document.querySelector('[data-summary="who-win"]').textContent =
      "Przegrałeś!";
    document.querySelector(".losses span").textContent = ++gameSummary.losses;
  } else {
    document.querySelector('[data-summary="who-win"]').style.color = "gray";
    document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
    document.querySelector(".draws span").textContent = ++gameSummary.draws;
  }
}

//funckcja sterująca
function startGame() {
  if (game.playerHand === "") {
    alert("Musisz wybrać dłoń!");
  }
  game.aiHand = aiSelection();
  const result = chooseWinner(game.playerHand, game.aiHand);
  gameResult(game.playerHand, game.aiHand, result);
}

startBtn.addEventListener("click", startGame);
hands.forEach((hand) => hand.addEventListener("click", handleSelection));
