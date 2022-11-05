const textInput = document.querySelector("#validation-input");
const textLength = document.querySelector('[data-length="6"]');
const valid = document.querySelector(".valid");
const invalid = document.querySelector(".invalid");

textInput.addEventListener("blur", () =>
  textInput.value.length !== +textLength.dataset.length
    ? textInput.classList.add("invalid")
    : textInput.classList.replace("invalid", "valid")
);
