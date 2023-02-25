const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", () => {
  const minLenghth = inputEl.dataset.length;

  if (inputEl.value.length >= minLenghth) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
