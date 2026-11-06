const heading = document.getElementById("heading");
heading.innerText = "wlcome to dom";

// console.log(heading.innerText);

const message = document.getElementsByClassName("message");
console.log(message.length);

message[1].innerText = "scond paragraph with extra space";
console.log(message[1]);

const para = document.getElementsByTagName("p");

for (let a = 0; a < para.length; a++) {
  para[a].style.color = "white";
  para[a].style.fontSize = "20px";
  para[a].style.backgroundColor = "red";
}
console.log(para.length);
