document.getElementById("calculate").addEventListener("click", function () {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let bmi = weight / (height * height);

  document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
});
