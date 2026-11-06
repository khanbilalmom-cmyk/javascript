let paragraph = document.getElementById("para");

// paragraph.textContent = "welcome to reactjs";
// paragraph.innerHTML = "welcome to reactjs";
// paragraph.textContent = "<strong>welcome to reactjs</strong>";
// paragraph.innerHTML = "<strong>welcome to reactjs</strong>";

// console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);

// let container = document.querySelector(".container");
// console.log(container.textContent);
// console.log(container.innerHTML);

// console.log(paragraph.innerText);
// console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);

// css styleing
paragraph.style.color = "red";
paragraph.style.backgroundColor = "blue";
paragraph.style.padding = "10px";
paragraph.style.borderRadius = "20px";

// set and change attribute
let heart = document.getElementById("heart");
// console.log(heart.getAttribute("src"));
// console.log(heart.getAttribute("alt"));

// let heartattribute = heart.getAttribute("alt");

// if (!heartattribute) {
//   heart.setAttribute("alt", "heart icon");
// } else {
//   alert("alt attribute value already exist");
// }
// heart.removeAttribute("src");

let descr = document.getElementById("desc");

// console.log(descr.classList);

// console.log(descr.classList.contains("xyz"));

// descr.classList.add("jkl");
// descr.classList.remove("xyz");
// descr.classList.toggle("rty");
// descr.classList.add("highlight");

let togglebtn = document.getElementById("toggole-btn");

let isExist = togglebtn.classList.contains("highlight");
togglebtn.addEventListener("click", function () {
  descr.classList.toggle("highlight");
});
