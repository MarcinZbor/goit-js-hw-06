const btnChangeColor = document.querySelector(".change-color");
const backBody = document.querySelector("body");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", () => {
  backBody.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
