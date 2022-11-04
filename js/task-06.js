const textInput = document.querySelector("#validation-input");
const inputEl = textInput.dataset.length;
console.log(inputEl);
textInput.addEventListener("blur", () => {
  console.log(textInput.value.length === inputEl.value);
});
