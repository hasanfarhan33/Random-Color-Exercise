const button = document.querySelector("#generateButton");
const heading = document.querySelector("#heading");

heading.style.textAlign = "center";
button.style.marginLeft = "45vw";

button.addEventListener("click", function () {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  document.body.style.background =
    "rgb(" + red + ", " + green + ", " + blue + ")";
  heading.innerHTML = "rgb(" + red + ", " + green + ", " + blue + ")";
});
