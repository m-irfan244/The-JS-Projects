let interval;
let started = false;
let time = { minutes: 0, seconds: 0, milliseconds: 0 };

document.getElementById("start").addEventListener("click", function () {
  if (!started) {
    interval = setInterval(startTimer, 10);
    started = true;
  }
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(interval);
  started = false;
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(interval);
  started = false;
  time = { minutes: 0, seconds: 0, milliseconds: 0 };
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("milliseconds").textContent = "00";
});

function startTimer() {
  time.milliseconds++;
  if (time.milliseconds >= 100) {
    time.seconds++;
    time.milliseconds = 0;
  }
  if (time.seconds >= 60) {
    time.minutes++;
    time.seconds = 0;
  }
  document.getElementById("minutes").textContent = pad(time.minutes);
  document.getElementById("seconds").textContent = pad(time.seconds);
  document.getElementById("milliseconds").textContent = pad(time.milliseconds);
}

function pad(number) {
  return number.toString().padStart(2, "0");
}
