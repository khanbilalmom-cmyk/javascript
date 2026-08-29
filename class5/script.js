/*
conditional statement
if, if..else,else.if

Ternary operator
condition ? "fullfill" : "failed"

switch statement
switch(condition){
case 1:
log ;
case 2:
    default: 
    message
}
    */

// let age = Number(prompt("enter your age: ", 18));

/*
if(condition){
console.log(message)
}
*/

/*
if (age >= 18) {
  document.write("you are aligiable");
} else {
  document.write("you are not eligiable");
}
*/

/*
// Alternative of if else
let result = age >= 18 ? "you are man" : "you are not man";
document.write(result);
*/

/*
let age = Number(prompt("enter your age: ", 18));
let gender = prompt("Enter your age: ", "male");

if (age >= 18 && gender == "male") {
  document.write("please visit the vote");
} else if (age >= 18 && gender == "female") {
  document.write("please visit xzy");
} else {
  document.write("please enter the correct data");
}
*/
// nested if
let role = "user";
let email = "khan@gamil";
let pass = 123;

if (email === "khan@gamil" && pass == "123") {
  if (role == "admin") {
    document.write("you can post!");
  } else {
    document.write("you can't post");
  }
} else {
  document.write("invalid credientional");
}
