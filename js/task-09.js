const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtn.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyEl.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
