const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  const text = textInput.value;
  const words = text.trim().split(/\s+/);

  wordCount.textContent = words.length;
  charCount.textContent = text.length;
});
