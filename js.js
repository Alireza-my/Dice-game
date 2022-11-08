const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// Start
diceEl.classList.add("hidden");

// Roll logic
rollBtn.addEventListener("click", genNum);

let currentScore = 0;
function genNum() {
  // Generate a random dice roll 
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display 
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // Logic
  if (dice !== 1) {
    currentScore += dice;
    current0.textContent = currentScore;
  }
}
