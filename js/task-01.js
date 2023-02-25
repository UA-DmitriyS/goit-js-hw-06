const categoryEl = document.querySelectorAll("li.item");
console.log(`Number of categories : ${categoryEl.length}`);

categoryEl.forEach((element) => {
  const titleEl = element.querySelector(`h2`);
  console.log(`Categoty: ${titleEl.textContent}`);

  const listEl = element.querySelectorAll("li");
  console.log(`Elements : ${listEl.length}`);
});
