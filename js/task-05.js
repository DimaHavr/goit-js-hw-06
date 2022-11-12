const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value.trim().length === 0) {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = inputEl.value.trim();
  }
});
