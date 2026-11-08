let image = document.getElementById("myimage");
let sources = image.getAttribute("src");
console.log(sources);

let chnage = document.getElementById("change");
chnage.addEventListener("click", function () {
  image.setAttribute("src", "Annotation 2026-08-18 080351.png");
});

let nameinput = document.getElementById("nameinput");
nameinput.setAttribute("placeholder", "enter your name");

let disable = document.getElementById("disable");
let enable = document.getElementById("enableinput");
enable.addEventListener("click", function () {
  disable.removeAttribute("disabled");
});

let para = document.getElementById("khan");
let check = para.hasAttribute("class");
console.log(check);

let mylink = document.getElementById("mylink");
let changelink = document.getElementById("changelink");
changelink.addEventListener("click", function () {
  mylink.setAttribute("href", "https://www.youtube.com");
});
