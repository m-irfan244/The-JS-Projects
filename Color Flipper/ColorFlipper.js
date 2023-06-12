document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", function () {
    window.location.href = "../";
  });
});

document.getElementById("flip-btn").addEventListener("click", function () {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Apply the color as the background
  document.body.style.backgroundColor = randomColor;
});
