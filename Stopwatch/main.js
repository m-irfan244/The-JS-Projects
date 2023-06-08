const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

let intervalId;
let time = 0;

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

const start = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    time++;

    const milliseconds = pad(time % 100);
    const seconds = pad(Math.floor(time / 100) % 60);
    const minutes = pad(Math.floor(time / 6000));

    minutesLabel.textContent = minutes;
    secondsLabel.textContent = seconds;
    millisecondsLabel.textContent = milliseconds;
  }, 10);
};

const stop = () => {
  clearInterval(intervalId);
};

const reset = () => {
  stop();
  time = 0;

  minutesLabel.textContent = "00";
  secondsLabel.textContent = "00";
  millisecondsLabel.textContent = "00";
};

function pad(number) {
  return number.toString().padStart(2, "0");
}
