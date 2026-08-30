// Array
let students = ["ali", "ahmad", "umar", "tahir", "khan"];
// console.log(students);
// console.log(students.length);

// console.log(students[1]);
// console.log(students[2]);
// console.log(students[students.length - 1]);
// console.log(students[students.length - 2]);

// push
// add in the last
// students.push("khan");
// console.log(students);

// pop
// reamove from last
// students.pop();
// console.log(students);

// unshift
// add beagining
// students.unshift("khan");
// console.log(students);

//shift
// remove from first
// students.shift();
// console.log(students);

// slice
// array-name(Start ending)
// starting : include
// ending : exclude
// console.log(students.slice(0, 2));
// console.log(students.slice(1, 4));
// console.log(students);

// students[2] = "naseeb";
// students[10] = "hello";
// console.log(students);

// students.splice(start , delete , replace

// delete "khan";
students.splice(3, 1);
console.log(students);
