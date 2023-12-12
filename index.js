const buttonsContainer = document.querySelector(".buttons");
const allButtons = document.querySelectorAll(".buttons span");
const displayValue = document.getElementById("value");
const displayEqual = document.getElementById("equal");

displayEqual.addEventListener("click", function () {
  handleCustomFunction("equal");
});

buttonsContainer.addEventListener("click", function (event) {
  const clickedButton = event.target;

  if (clickedButton.tagName === "SPAN") {
    handleCustomFunction(clickedButton.textContent);
  }
});

function handleCustomFunction(buttonContent) {
  switch (buttonContent) {
    case "equal":
      customFunction();
      break;
    case "clear":
      clearDisplay();
      break;
    default:
      updateDisplay(buttonContent);
  }
}
function customFunction() {
  const expression = displayValue.textContent;
  try {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
    const result = new Function("return " + sanitizedExpression)();
    displayValue.textContent = result;
  } catch (error) {
    displayValue.textContent = "Error";
  }
}

function clearDisplay() {
  displayValue.textContent = "";
}

function updateDisplay(content) {
  console.log("Updating display with content:", content);
  displayValue.textContent += content;
}
