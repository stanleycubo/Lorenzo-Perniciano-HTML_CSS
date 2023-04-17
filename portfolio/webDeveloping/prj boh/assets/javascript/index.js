const counter = document.getElementById("counter");
const incrementButton = document.getElementById("buttonRight");
const decrementButton = document.getElementById("buttonLeft");
const resetButton = document.getElementById("resetButton");

let count = 0;
counter.textContent = count;

incrementButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decrementButton.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
