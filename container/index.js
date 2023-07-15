// function add() {
//   console.log("display");
// }

// add();

// const display = () => {
//   console.log("show");
// };

// display();

// 746785 89789.465565
// true , false
//  "ghkjh" , 'dghkh'
// [1,2,3,4] , {id:1} , [{id:1},{id:2}]
// undefined, null

// array [1,2,3,4]
// object {id:1,name:"some..."}  key value pairs

// let car = [
//   { id: 1, name: "john" },
//   { id: 2, name: "rko" },
// ];

// console.log(car[1].name);

// why jsvascript

// BOM => browser object modal
// DOM => document object modal

// const pages = {
//   id: 1,
//   display: () => {
//     console.log("do something");
//   },
// };

// console.log(pages.display());

//  BOM => browser object modal
// popup => alert , prompt, confirm

//  screen => width, height
// console.log(window.screen.height);
// console.log(window.screen.width);

//  location
// console.log(location);

//  history
// setTimeout(() => {
//   console.log("trigered");
//   //   history.forward();
//   //   history.back();
// }, 4000);

//  navigator
// console.log(navigator.onLine);
// console.log(navigator.platform);

// localStorage.setItem("useStatus", "jgg");
// localStorage.setItem("loginStatus", "jgg");
// console.log(localStorage.getItem("useStatus"));
// // localStorage.removeItem("useStatus");
// // localStorage.removeItem("loginStatus");
// localStorage.clear();

// DOM Document Object Modal
// console.log(document.getElementById("cake").innerHTML);
// console.log(document.getElementById("cake").style);
// console.log(document.querySelectorAll("#cake"));

// console.log((document.getElementById("cake").innerHTML = "kjbhkj"));
// console.log((document.getElementById("cake").style.color = "orange"));

// let result = document.getElementById("cake");

// events
// onclick
// ondoubleclik
// onMouseEnter
// .......

// const change = () => {
//   let result = (document.getElementById("cake").style.color = "green");
// };

// modify;

// const modify = () => {
//   let result = (document.getElementById("cake").style.color = "red");
// };

// const check = () => {
//   let value = document.getElementById("username").value;
//   console.log(typeof Number(value));
//   if (typeof Number(value) === "number") {
//   } else {
//     alert("something went wrong");
//   }
// };
// let a = "abcdefghijklmnopqrstuvwxyz";
// console.log((document.getElementById("cake").innerHTML = a.length));

// History

// length , previous, next
// 4 ,  back() ,forward()
// document.getElementById("length").innerHTML = history.length;

// const prev = () => {
//   history.back();
// };

// const next = () => {
//   history.forward();
// };

// const verify = () => {
//   const value = document.getElementById("tel").value;
//   let change = parseInt(value);

//   console.log(change);
//   // console.log(parseInt(value));

//   if (!(change === NaN)) {
//     alert("true");
//   } else {
//     alert("false");
//   }
// };

// document.getElementById();
// document.querySelectorAll();

// pattern , flag
// /fvhjgfh/  , g,i,m

// [0-9] [a-z] [A-Z] \d \w \s

// console.log("Dhsfjhsdfh74623876".match(/dh/gi));
// console.log("Dhsfjhsdfh74623876".match(/[0-9]/gi));
// console.log("Dhsfjhsdfh74623876".match(/[a-z]/gi));

// console.log("Dhsfjhsdfh74623876".match(/\d/gi));
// console.log("Dhsfjhsdfh74623876".match(/\w/gi));
// const value = prompt("enter something");
// console.log(value.match(/[a-z]/gi));
// if (value.match(/[a-z]/gi) !== null) {
//   alert("something went wrong");
// } else {
//   alert("saved");
// }
