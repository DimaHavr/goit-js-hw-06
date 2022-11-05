const inputSize = document.querySelector("#font-size-control");
const textContent = document.querySelector("#text");

inputSize.addEventListener(
  "input",
  (event) => (textContent.style.fontSize = `${event.currentTarget.value}.px`)
);
