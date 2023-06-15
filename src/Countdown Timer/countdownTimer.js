let countdown;

const timerDisplay = document.querySelector("#timer");
const startButton = document.querySelector("#start-button");

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
}

startButton.addEventListener("click", () => {
  timer(60); // 60 seconds = 1 minute countdown
});
