/*
object 
--> key value pairs (age : 20)
*/
// let student = {
//   name: "khan",
//   age: 13,
//   gender: "male or female",
//   marks: 20,
//   contact: "1243455",
//   address: [
//     {
//       city: "peshawer",
//       country: "pakistan",
//     },
//     {
//       city: "lohore",
//       country: "pakistan",
//       street: "234",
//     },
//   ],
//   skills: ["html", "css", "java"],
// };
// console.log(student);
// console.log(student.address.country);
// console.log(student.address[1].city);

// console.log(student.age);
// console.log(student.name);
// console.log(student["contact"]);

// student.age = 33;
// student.name = "bilal";
// console.log(student);

// console.log(student.skills[1]);

let students = [
  {
    name: "khan",
    age: 13,
    gender: "male or female",
    marks: 20,
    contact: "1243455",
    address: [
      {
        city: "peshawer",
        country: "pakistan",
      },
      {
        city: "lohore",
        country: "pakistan",
        street: "234",
      },
    ],
    skills: ["html", "css", "java"],
  },
];

students.push({
  name: "khan",
  age: 13,
  gender: "male or female",
  marks: 20,
  contact: "1243455",
  address: [
    {
      city: "peshawer",
      country: "pakistan",
    },
    {
      city: "lohore",
      country: "pakistan",
      street: "234",
    },
  ],
  skills: ["html", "css", "java"],
});
console.log(students);
