let click = document.getElementById("click");
click.addEventListener("click", function () {
  alert("button clicked succesfuly");
});

let change = document.getElementById("change");
let mytext = document.getElementById("mytext");
change.addEventListener("click", function () {
  mytext.innerText = "text updated succesfully";
});

let background = document.getElementById("background");
background.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgray";
});

let input = document.getElementById("input");
let output = document.getElementById("output");
input.addEventListener("input", function () {
  output.innerText = input.value;
});

let box = document.getElementById("hover");
box.addEventListener("mouseenter", function () {
  box.style.backgroundColor = "lightgreen";
});
box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "lightblue";
});

let double = document.getElementById("double");
double.addEventListener("dblclick", function () {
  alert("Double clik Detected");
});
