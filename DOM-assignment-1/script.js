let heading = document.getElementById("heading");
heading.innerText = "Welcome to javascript DOM";
console.log(heading);

let paragraph = document.getElementById("para");
let changed = document.getElementById("change");

changed.onclick = function () {
  paragraph.innerText = "paragraph has been change";
};
console.log(change);

let changeBgBtn = document.getElementById("changeBgBtn");
changeBgBtn.onclick = function () {
  document.body.style.backgroundColor = "lightblue";
};

let clicks = document.getElementById("click");
clicks.onclick = function () {
  alert("DOM is working");
};

let userInput = document.getElementById("userInput");
let update = document.getElementById("update");
let output = document.getElementById("output");
update.onclick = function () {
  output.innerText = userInput.value;
};
