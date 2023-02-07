const inputControl = document.querySelector("input#font-size-control")
// console.log(inputControl)
const spanText = document.querySelector("span#text")
// console.log(spanText);
inputControl.addEventListener("change", event => {
  spanText.style.fontSize = `${event.target.value}px`
});

