const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientListEL = document.querySelector("#ingredients");

const MakeListIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ItemEl = document.createElement("li");
    ItemEl.classList.add("item");
    ItemEl.textContent = ingredient;

    return ItemEl;
  });
};

const elements = MakeListIngredients(ingredients);
ingredientListEL.append(...elements);
