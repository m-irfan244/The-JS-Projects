document.getElementById("flip-btn").addEventListener("click", function () {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Apply the color as the background
  document.body.style.backgroundColor = randomColor;
});
