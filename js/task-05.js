const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) =>
  inputEl.value.trim().length === 0
    ? (nameEl.textContent = "Anonymous")
    : (nameEl.textContent = inputEl.value.trim())
);
