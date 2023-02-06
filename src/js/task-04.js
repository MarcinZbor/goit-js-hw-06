let counterValue = 0;


const displayValue = document.querySelector("#value");
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');


buttonPlus.addEventListener("click", () => {
  counterValue++;
  displayValue.textContent = counterValue;
});

buttonMinus.addEventListener("click", () => {
  counterValue--;
  displayValue.textContent = counterValue;
});
