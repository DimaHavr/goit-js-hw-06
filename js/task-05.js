const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const inputName = inputEl.value.trim();
  if (inputName.length === 0) {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = inputEl.value;
  }
});
