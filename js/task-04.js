const counterValueEl = document.querySelector("#value");
const buttons = document.querySelectorAll("button");

let total = parseInt(counterValueEl.textContent);

buttons.forEach((button) => {
  if (button.dataset.action === "increment") {
    button.addEventListener("click", () => {
      total += 1;
      counterValueEl.textContent = total;
    });
  }
  if (button.dataset.action === "decrement") {
    button.addEventListener("click", () => {
      total -= 1;
      counterValueEl.textContent = total;
    });
  }
});
