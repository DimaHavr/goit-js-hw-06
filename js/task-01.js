const categoriesLength = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesLength.length}`);

const firstCategoryTitle = document.querySelector(".item:nth-child(1) > h2");
console.log(`Category: ${firstCategoryTitle.textContent}`);

const firstCategoryLength = document.querySelectorAll(
  ".item:first-child > ul > li"
);
console.log(`Elements: ${firstCategoryLength.length}`);

const secondCategoryTitle = document.querySelector("li.item:nth-child(2) > h2");
console.log(`Category: ${secondCategoryTitle.textContent}`);

const secondCategoryLength = document.querySelectorAll(
  ".item:nth-child(2) > ul > li"
);
console.log(`Elements: ${secondCategoryLength.length}`);

const lastCategoryTitle = document.querySelector("li.item:nth-child(3) > h2");
console.log(`Category: ${lastCategoryTitle.textContent}`);

const lastCategoryLength = document.querySelectorAll(
  ".item:nth-child(3) > ul > li"
);
console.log(`Elements: ${lastCategoryLength.length}`);
