const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
const headlineEl = document.querySelector("h1");

inputEl.addEventListener("change", (event) => {
  nameEl.textContent = inputEl.value;
  headlineEl.textContent = inputEl.value;
});
