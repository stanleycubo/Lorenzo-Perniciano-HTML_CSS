const counter = document.getElementById("counter");
const incrementButton = document.getElementById("buttonRight");
const decrementButton = document.getElementById("buttonLeft");
const resetButton = document.getElementById("resetButton");

// elements
var elements_to_watch = document.querySelectorAll(".base");
// callback
var callback = function (items) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("in-page");
    } else {
      item.target.classList.remove("in-page");
    }
  });
};
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.6 });

// apply
elements_to_watch.forEach((element) => {
  observer.observe(element);
});

//* x counter

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

//* fine counter
