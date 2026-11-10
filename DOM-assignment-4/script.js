let paragraph = document.getElementById("mypara");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  paragraph.classList.add("highlight");
});

let remove = document.getElementById("toggleBtn");
remove.addEventListener("click", function () {
  paragraph.classList.remove("highlight");
});

let toggle = document.getElementById("toggle");
toggle.addEventListener("click", function () {
  paragraph.classList.toggle("highlight");
});

let check = document.getElementById("check");
check.addEventListener("click", function () {
  if (paragraph.classList.contains("highlight")) {
    alert("class is exist");
  } else {
    alert("class is not exists");
  }
});

let buy = document.getElementById("buy");
buy.addEventListener("click", function () {
  buy.classList.toggle("active-btn");
});

let darkbtn = document.getElementById("dark");
darkbtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
