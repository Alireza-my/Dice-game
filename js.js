const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
//! Start
diceEl.classList.add("hidden");
//! Roll logic
rollBtn.addEventListener("click", genNum);

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

function genNum() {
  if (playing) {
    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // Logic
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
}

//! Hold logic

holdBtn.addEventListener("click", holdFn);

function holdFn() {
  if (playing) {
    // add current to total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.score--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
}

// ! Rest logic
