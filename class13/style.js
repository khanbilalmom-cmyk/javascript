// string  sequances of character

// there are way to dfine string ..
let fname = "khan";
// let lname = "afridi";
// let fullname = `my name is ${fname} ${lname}`;
// console.log(fname);
// console.log(lname);
// console.log(fullname);

let detail_1 = 'i am a "student" ';
let detail_2 = "i am a 'student' ";
let detail_3 = `i am a "student" `;
let detail_4 = `i am a 'student' `;

//string lenght
// console.log(fname.length);
// console.log(fname[2]);

// console.log(detail_1.slice(2, 7));
// console.log(detail_1.slice(-3));
// console.log(detail_1.substring(2, 7));
// console.log(detail_1.substring(-3));

// trim remove extra space from start and end
// let username = prompt("enter username").trim();
// let username = prompt("enter username").trimStart();
// let username = prompt("enter username").trimEnd();
// if (username === "khan") {
//   console.log("True");
// } else {
//   console.log("false");
// }

// include
let email = prompt("enter email");
if (email.includes("e")) {
  console.log("correct");
} else {
  console.log("incorrect");
}
