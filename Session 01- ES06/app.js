// 1. Từ khóa khai báo biến

// var a = 10;
// var a = 20;
// a = "Hello";
// console.log(a);

// let a = 10;
// a = 20;
// console.log(a);

// const a = 10;
// a = "Hello";
// console.log(a);

// 2. Phạm vi biến
// 2.1. Global scope
// 2.2. Block scope ({})
// 2.3. Function scope (local scope)

// debugger;

// function f() {
//   let a = 20;
//   console.log(a);
// }
// f();

// let arr = [10, 20, 30, 40];
// let newArr = arr.map((value, index) => value * 2);
// console.log(newArr);

// let arr = [10, 20, 30, 40];
// arr.forEach((value, index) => console.log(value * 2));

// Chuyển hàm map và forEach về for thường

// map
// let arr = [10, 20, 30, 40];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 2);
// }

// console.log(Array.isArray(newArr));

// => map trả về 1 mảng mới

// forEach
// let arr2 = [10, "20", NaN, 40];

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i] * 2);
// }

// console.log(10 * "10"); // 1010

// filter và find trong ES6

// let arr = [1, 2, 3, 4];
// let filterArr = arr.filter((value) => value % 2 === 0);
// console.log(filterArr); // [2, 4]

// Chữa bài:
// let arr = [1, 2, 3, 4];
// let filterArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     filterArr.push(arr[i]);
//   }
// }
// console.log(filterArr);

// let arr = [1, 2, 3, 4];
// let findArr = arr.find((value) => value % 2 === 0);
// console.log(findArr); // 2

// Chữa bài:
// let arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//     break;
//   }
// }

// 4. Destructuring

// array
// let arr = [10, 20, 30, 40];

// let [a, , , d] = arr;
// console.log(a, d);

// // object
// let people = {
//   name: "Thịnh",
//   age: 20,
// };

// let { name, age, age2 } = people;
// console.log(name, age, age2);

// Spread

// let arr1 = [1, 2, 3];
// let arr2 = [4, "5", 6];
// // let arr3 = [...arr1, ...arr2];

// console.log(arr1, arr2);
// console.log(...arr1, ...arr2);

// spread với object

// let people = {
//   name: "Thịnh",
//   age: 20,
// };

// let peopleAddress = { ...people, address: "Hà Nội" }; // Thêm address
// let peopleAddress = { ...people, age: 31 }; // Ghi đè (cập nhập lại) key là age

// console.log(peopleAddress);

// Rest Parameter

// function f(...param) {
//   console.log(param);
//   //   let sum = param1 + param2;
//   //   for (let i = 0; i < param.length; i++) {
//   //     sum += param[i];
//   //   }
//   //   return console.log(sum);
// }
// f(10, 20, 30, 40, 60, 10);

// const nameUser = "Thịnh";
// const age = 20;

// let people = {
//   name: nameUser,
//   age: age,
// };

// let people = {
//   nameUser,
//   age,
// };

// console.log(people);

// 9. Module

// named import
// import { sum } from "./module.js";

// console.log(sum(10, 20));

// export default
// import PI from "./module.js";
// console.log(PI);

// let people = {
//   name: "Trung", // key-value name-trung
//   age: 30,
// };

// let { name, age } = people;

// console.log(age);
