/*
// operators: (operator,operant)
// operator( +,-,*,//,**,%)
// operator: data on which perfome operation

// Expression: combinationof operator & operent
// 2 + 4
// 2,4: ->operator
// +: -> operant
*/

/*
// comparsaion operator
// == -> equality (donot check datatype)
// === -> equality (check data types)

// > :greater then
// < : less than
// >= : greater then or equal
// =< : less tha or equal
// != : not equal(don't check datatype)
// !== : not equal (check datatype)
*/

/*
// ++ -> increment
// -- -> decrement

// value ++ -> increment (postfix)
// value -- -> decrement (postfix)
// ++ value -> increment (postfix)
// -- value  -> decrement (postfix)

// value += 2 => increment by 2 ( value = value +2)
// value -= 2 => decrement by 2( value = value - 2)
console.log(2++); // 3(2 + 1)
console.log(2--); // 3(2 + 1)
*/

/*
let a = 10;
let b = 20;
// Arthematic opeartor
console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(b / a); // 2
console.log(a % b); //
*/

/*
// BODMSA: ( bracket, order, division, multiplication, addition, subtraction)
// let result = (2 * (4 + 3)) / 7;
// console.log(result);
*/

/*
// let input = 3;
// console.log(input++); // 3
// console.log(input); // 4

// console.log(++input);
// console.log(--input);

// let value = 5;
// value = value + 2; // value = 5 + 2
// value += 2;
// console.log(value);

// let value = 3;
// value = value - 2;
// value -= 2;
// console.log(value);
*/

/*
// typeof value: => to find datatype
// Number
// let c = 234;
// let c = 23.4;
// let c = -23.4;
// let c = -234;
// console.log(typeof c);

// String
// let name = "1";
// let name = "1";
// let name = `1`;
// console.log(typeof name);

// let name = 'my name is "bilal"';
// let name = "my name is 'bilal'";
// console.log(name);
*/

// string cancatinaition (+) symbol
let firstName = "Test";
let ScondName = "Test12";
// let FullName = "My name is " + firstName + ScondName;
let FullName = "My name is " + firstName + " " + ScondName;
console.log(FullName);

// Template literals
/*
   syntax:
   `My name is ${firstName} $ { lastName}`
   */

console.log(`My name is ${firstName} ${ScondName}`);

// let name = "test, hello";
