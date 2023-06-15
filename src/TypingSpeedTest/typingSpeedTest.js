const textToType = document.querySelector("#text-to-type");
const userInput = document.querySelector("#user-input");
const resetButton = document.querySelector("#reset-button");
const result = document.querySelector("#result");
let startTime, endTime;

userInput.addEventListener("input", () => {
  let textEntered = userInput.value;
  if (textEntered === textToType.textContent) {
    endTime = new Date();
    let elapsedTime = endTime - startTime;
    let typingSpeed = Math.round(
      (textToType.textContent.length / elapsedTime) * 1000 * 60
    );
    result.textContent = `Your typing speed is ${typingSpeed} characters per minute.`;
  }
});

resetButton.addEventListener("click", () => {
  startTime = new Date();
  result.textContent = "";
  userInput.value = "";
});

window.onload = () => {
  startTime = new Date();
};
