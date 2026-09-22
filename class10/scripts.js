// break
// // continue
// function

// let students = ["test1", "test2", "test3", "test4"];
// let inputstudentname = prompt("enter student name");
// for (const student of students) {
//   if (inputstudentname == student) {
//     break;
//   }
//   console.log(student);
// }

// for (let a = 0; a < 10; a++) {
//   if (a % 2 == 0) {
//     continue;
//   }
//   console.log(a);
// }

// let total = 0;
// let marks = [33, 22, 44, 55];
// for (const num of marks) {
//   console.log(num);
//   total = total + num;
// }
// console.log(total);

/* syntax: 
funtion fnname(){
body
}
fname()
*/
//function welcome(){
// console.log(Welcome to js);
// }

function welcome(name) {
  console.log(`welcome to ${name}`);
}

let studentname = prompt("enter your name");
welcome("bilal");
