function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorSpanEl = document.querySelector(".color");
const btnColorEl = document.querySelector(".change-color");

function chBgCol() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
}
btnColorEl.addEventListener("click", chBgCol);
