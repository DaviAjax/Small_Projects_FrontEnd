const countElement = document.getElementById("counter");
const incrementInput = document.getElementById("increment");

// Controls
const btnSubtract = document.getElementById("btnSubtract");
const btnReset = document.getElementById("btnReset");
const btnSum = document.getElementById("btnSum");

let counter = 0;

function updateCounter() {
  countElement.textContent = counter;
}

btnSum.addEventListener("click", () => {
  const valor = Number(incrementInput.value);
  counter += valor;
  updateCounter();
});

btnSubtract.addEventListener("click", () => {
  const valor = Number(incrementInput.value);
  counter -= valor;
  updateCounter();
});

btnReset.addEventListener("click", () => {
  counter = 0;
  updateCounter();
});
