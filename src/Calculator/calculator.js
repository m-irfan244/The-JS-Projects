// Get the result input element
const resultInput = document.getElementById("result");

// Get all number buttons
const numberButtons = document.querySelectorAll(".number");

// Get all operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// Add click event listeners to number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resultInput.value += button.textContent;
  });
});

// Add click event listeners to operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resultInput.value += button.textContent;
  });
});

// Add click event listener to clear button
document.getElementById("clear").addEventListener("click", () => {
  resultInput.value = "";
});

// Add click event listener to equal button
document.getElementById("equal").addEventListener("click", () => {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    resultInput.value = "Error";
  }
});
