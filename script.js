
const form = document.getElementById("volumeForm");
const lengthInput = document.getElementById("length");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");

const result = document.getElementById("result");
const volumeValue = document.getElementById("volumeValue");
const litresValue = document.getElementById("litresValue");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const length = lengthInput.valueAsNumber;
  const width = widthInput.valueAsNumber;
  const height = heightInput.valueAsNumber;

  if (
    !Number.isFinite(length) ||
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    length <= 0 ||
    width <= 0 ||
    height <= 0
  ) {
    result.hidden = true;
    errorMessage.textContent =
      "Please enter a valid positive number for every dimension.";
    return;
  }

  const volume = length * width * height;
  const litres = volume * 1000;

  volumeValue.textContent =
    volume.toLocaleString("en-US", {
      maximumFractionDigits: 6
    }) + " m³";

  litresValue.textContent =
    litres.toLocaleString("en-US", {
      maximumFractionDigits: 3
    }) + " litres";

  errorMessage.textContent = "";
  result.hidden = false;
});

form.addEventListener("reset", function () {
  result.hidden = true;
  errorMessage.textContent = "";
});
