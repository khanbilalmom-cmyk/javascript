// declare variable
let name = "bilal";
let age = 20;
let isstudent = true;
let city;
let marks = null;

// display log and typeof
console.log(name);
console.log(age);
console.log(isstudent);
console.log(city);
console.log(marks);

// type of
console.log(typeof name);
console.log(typeof age);
console.log(typeof isstudent);
console.log(typeof city);
console.log(typeof marks);

// converted data types
// convert string to number

let number = "25";
let convertednumber = Number(number);
console.log(number);
console.log("converted to number", convertednumber);
console.log(typeof convertednumber);

// convert number to string
let numbers = 100;
let convertedstring = String(numbers);
console.log(numbers);
console.log("converted to string", convertedstring);
console.log(typeof convertedstring);

// convert string to boolean
let booleans = "true";
let convertedboolean = Boolean(booleans);
console.log(booleans);
console.log("converted to boolean", convertedboolean);
console.log(typeof convertedboolean);

//output
console.log(number);
console.log(numbers);
console.log(booleans);
console.log("25 converted into number:", Number("25"));
console.log("100 converted into string:", String(100));
console.log("true converted into boolean:", Boolean("true"));

// converted 0 and 1 into boolean
let a = Boolean(0);
let b = Boolean(1);
console.log("boolean(0)", a);
console.log("boolean(1)", b);
