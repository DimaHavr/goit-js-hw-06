const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("change", (event) => {
  nameEl.textContent = inputEl.value;
});
