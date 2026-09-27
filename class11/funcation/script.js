// addition function

// function add(a, b, c) {
//   let result = a + b + c;
//   console.log(`${a} + ${b} + ${c} = ${result}`);
// }
// add(12, 23, 45);

// function intro(name, age, city) {
//   console.log("my name is " + name);
//   console.log("my age is" + age);
//   console.log("my city name " + city);
// }
// // intro(20, "ali", "peshawer");
// intro("ali", 12, "peshawer");

// default
// function great(name = "guest") {
//   console.log("hello " + name);
// }
// great();

// function login(email, password, role = "Buyer") {
//   console.log("Email: " + email + "password: " + password + "role: " + role);
// }
// login("test@123gmail.com", "test123", "saller");
// login("test@123gmail.com", "test123");

// function add(a, b) {
//   return a * b;
//   console.log(a + b);
// }
// function mult(a, b) {
//   return a + b;
// }
// let result = add(2, 4) + mult(2, 7);
// console.log(result);

// function addthree(a, b, c) {
//   let res = a + b + c;
//   console.log(res);
//   console.log("hello world");
//   return res;
// }
// console.log(addthree(3, 34, 5));

// function findresult(percnet) {
//   if (percnet >= 50 && percnet <= 100) {
//     return "pass";
//     // console.log("pass");
//   } else if (percnet >= 50 && percnet > 0) {
//     return "fail";
//     //   console.log("fail");
//   } else {
//     return "involid input";
//   }
// }
// let studentpercent = Number(prompt("enter your percnet"));
// console.log(findresult(studentpercent));

const userdetail = {
  email: "admin@gmail.com",
  password: "admin123",
  role: "admin",
};
function checkadminrole(email, password, role) {
  if ((role = userdetail.role)) {
    console.log("you are allowed");
  } else {
    console.log("not allowed");
  }
}
let userRole = prompt("enter your role");
checkadminrole("test123@gmail.com", "test123", userRole);
