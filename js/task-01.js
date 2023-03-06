const categoryEl = document.querySelectorAll("li.item");
console.log(`Number of categories : ${categoryEl.length}`);

categoryEl.forEach((element) => {
  const titleEl = element.firstElementChild;
  console.log(`Categoty: ${titleEl.textContent}`);

  const listEl = titleEl.nextElementSibling.children;
  console.log(`Elements : ${listEl.length}`);
});
