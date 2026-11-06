let head = document.getElementById("head");
console.log(head);
head.textContent = "DOM Element Selector by Id ";

let para = document.getElementsByTagName("p");
console.log(para);
para[0].textContent = "first paragraph update";

let message = document.getElementsByClassName("message");
console.log(message);
message[1].innerHTML = "click me";

let heading = document.querySelector("h2");
heading.style.color = "blue";

let javascrpt = document.querySelectorAll("li");
console.log(javascrpt);
javascrpt.forEach(function (list) {
  list.style.color = "green";
});

let bilal = document.querySelector(".bilal");
console.log(bilal);
bilal.style.fontSize = "30px";
bilal.style.color = "white";
bilal.style.backgroundColor = "blue";
