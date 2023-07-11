//  handle variables
//  get user input
//  crud => create, read, update, delete
// back-end,  (React Js , Angular, Vue), ( Node Js, Express JS)
// deployment.

// console.log("html");
// console.error("html");
// console.warning("html");

// keyword  variable_name = value
// variable decleration
var a;
// variable initialization
var a = 10;
var h = null;
h = 10;

// numbers
// console.log(typeof 1);
// console.log(typeof 1.5);
// string
// console.log("mark");
// console.log('mark');
// console.log("mark");
// boolean
// console.log(typeof true);
// console.log(false);
// objects
// console.log(new Date());
// console.log([1, 2, 3, 4]);
// console.log({ id: 1, name: "guru" });
// null
// console.log(null);
// undefined
// console.log(undefined);

// formating
// const result = prompt("enter your input");
// console.log("10" + 10);
// console.log(typeof result + typeof 10);

// var a = 10;
// var a = 1000;

// console.log(a);

// const, let

// let
// let raw = 10;
// raw = true;
// console.log(raw);

// const
// const total = 100;
// total = 1000;
// console.log(total);

// operators

//  10 + 10

// arithmatic operator
//  logical operator
//  assignment operator
//  comparison operator

// arithmatic operator
// + - * / %

// () > % ,* > +, -
// let value = (0 + 0) * 10;
// console.log(value);
// console.log(10 + 10);
// console.log(10 - 10);
// console.log(10 * 10);
// console.log(10 / 10);
// console.log(10 % 10);

//  assignment operator

// let r = 100;
// =, +=, -=, *=, %=

// let value;
// value = value + 10;
// value += 100;
// console.log(value);

// let value = 10;
// console.log(++a);
// console.log(a++);

//  logical operator
// 0 0 => 0
// 1 0 => 1
// console.log(false && true ? "okay" : "cancel");
// console.log(false || true ? "okay" : "cancel");
//  comparison operator
// console.log(100 >= 0);

// console.log("10" === 10);
// console.log("10" == 10);

// functions

let first_value = 10;
let second_value = 10;
// let r;
// console.log(r);

// funtion (keyword), function name (), {} (code block)
// function decleration
// function add(value1, value2) {
//   return value1 + value2;
//   console.log("alert");
//   //   return "hello";
// }
// //  function calling
// console.log(add(first_value, second_value));

// scoping
// clouser

// function display() {
//   let inner_value = 10;
//   console.log(inner_value);
//   console.log("display");
// }
// // console.log(inner_value);
// display();

// hoisting
// console.log(output);
// var output = 10;

// let second_output = 20;
// console.log(second_output);

// display();
// normal function
// function display() {
//   console.log("display");
// }

// display();
// arrow Function
// const display = () => {
//   console.log("diapley");
// };
// display();

// const show = (value1, value2) => value1 + value2;
// console.log(show(10, 20));

// rest value
// const show = (value1, ...rest) => rest;
// console.log(show(10, 20, 30, 40));

// // default parameters
// const show = (value1, value2 = 10) => value1 + value2;
// console.log(show(10));

// console.log("print this 1");

// // callback function
// setTimeout(() => {
//   console.log("print this 2");
// }, 1000 * 60);

// setInterval(() => {
//   console.log("call");
// }, 2000);

// console.log("print this 3");

// 0,1,2,3,4
// Array
// const student_age = [10, "20", true, 60];

// console.log(student_age[2]);

// object
// const student = {
//   id: 1,
//   name: "kumar",
//   age: 77,
// };

// console.log(student.age);
// console.log(student.name);
// console.log(student.id);

// const allStudentData = [
//   { id: 1, name: "kumar" },
//   { id: 1, name: "hari" },
// ];

// console.log(allStudentData[1].name);

// build-in functions

// numbers
// math
// strings
// boolean
// date
// array
// objects                     

// number
console.log(Number("10") + 10);
// math
console.log(Math.round(501.5));
console.log(Math.round(501.4));
// strings
const values_string = "flights";
console.log(values_string.length);
console.log(values_string.toUpperCase());
console.log(values_string[values_string.length - 1]);
// array

const array = [1, 2, 3, 4, 5, 6];

console.log(array);

const results = array.filter((res) => {
  return res > 4;
});

console.log(results, array);

const red = [1, 2, 3, 4, 5];
console.log(red, "red");

// red.push(22);
// red.pop();
// red.shift();
// red.unshift()

console.log(red, "after");
// const getInput = prompt("enter value");
const rawData = "single string";
const rawData2 = `my input ${array}`;
let valuess =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam debitis repudiandae vitae nam mollitia omnis nostrum illo beatae earum? Itaque deleniti asperiores ad animi est enim saepe illum labore magni, quidem ratione consequatur praesentium atque, debitis aliquam voluptas rem rerum repellat voluptatibus delectus. Laborum placeat voluptatibus dignissimos vitae doloribus expedita, dicta distinctio optio, asperiores, impedit in omnis quas aliquam minima facere ex. Alias asperiores dolorum nam incidunt nesciunt architecto! Magni doloremque minus rem odio sunt neque blanditiis inventore deleniti perferendis explicabo quo totam eaque nobis, odit quia culpa iusto, repellat incidunt accusamus itaque in, alias rerum! In perferendis, obcaecati vel iusto reprehenderit totam minus repellendus, officia ipsum explicabo possimus nostrum aspernatur laborum eaque expedita omnis commodi, quaerat veritatis sit dolore ipsam impedit voluptas. Ratione, numquam. Mollitia aspernatur necessitatibus, temporibus quos consequatur minima quam atque! Reiciendis voluptatum, explicabo perferendis saepe, enim quas aperiam ex nobis autem vitae totam aliquid soluta ipsam sunt mollitia similique aliquam optio ad? Atque reiciendis ad perferendis, quos, tempora quibusdam sed animi incidunt ab nostrum deserunt magnam voluptates ut quaerat error quas sequi laboriosam non placeat quo illum! Magnam repellat nisi hic nesciunt earum vel asperiores minima, animi nihil, impedit inventore quidem obcaecati tempora unde reiciendis?";

console.log(rawData2);

console.log(valuess.slice(-1, -10));
