const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector(`#ingredients`);

const liItem = ingredients.map((element) => {
  const liValue = document.createElement("li");
  liValue.classList.add("item");
  liValue.textContent = element;
  return liValue;
});

ulEl.append(...liItem);
