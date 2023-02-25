const textEl = document.querySelector("#text");
const rangeEl = document.querySelector("#font-size-control");

rangeEl.addEventListener("input", () => {
  textEl.style.fontSize = rangeEl.value + "px";
});
