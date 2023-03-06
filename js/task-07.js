const textEl = document.querySelector("#text");
const rangeEl = document.querySelector("#font-size-control");

textEl.style.fontSize = rangeEl.value + "px";

rangeEl.addEventListener("input", () => {
  textEl.style.fontSize = rangeEl.value + "px";
});
