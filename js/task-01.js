const categoriesLength = document
  .querySelectorAll("#categories")
  .forEach((el) => {
    const categories = el.children;
    console.log(`Number of categories: ${categories.length}`);
  });

const categoriesEL = document.querySelectorAll(".item").forEach((element) => {
  const categoriesTitle = element.querySelectorAll("h2").forEach((title) => {
    const categoriesListLength = element.querySelectorAll("ul > li");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${categoriesListLength.length}`);
  });
});
