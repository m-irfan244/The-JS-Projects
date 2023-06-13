let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("guess-btn").addEventListener("click", function () {
  const userGuess = document.getElementById("guess-input").value;
  const message = document.getElementById("message");

  if (userGuess < randomNumber) {
    message.textContent = "Too low, try again!";
    message.style.color = "red";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high, try again!";
    message.style.color = "red";
  } else {
    message.textContent = `Congrats, you guessed the number! It was ${randomNumber}.`;
    message.style.color = "green";
  }
});
