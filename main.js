// ===============Higher-order functions in JavaScript===============
import traverse from './traverse.js';
traverse();
// ---------------forEach---------------------


// The forEach() method executes a provided function once for each array element.

// // ex 1

// const fruits = ["apple", "orange", "cherry"];
// let text = "";
// fruits.forEach(fruit => text += fruit + "\n");

// console.log(text);

// // ex 2

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(number =>  sum += number);

// console.log( sum);

// // ex 3

// const numbers = [65, 44, 12, 4];
// numbers.forEach((number,index, arr) =>  arr[index] = number * 10);

// console.log( numbers);

// // ex 4

// // Converting a for loop to forEach

// const items = ['item1', 'item2', 'item3'];
// const copyItems = [];

// // // before
// // for (let i = 0; i < items.length; i++) {
// //   copyItems.push(items[i]);
// // }
// // console.log(copyItems);

// // // after
// // items.forEach((item) => {
// //   copyItems.push(item);
// // });

// // console.log(copyItems);

// // ex 4

// const students = {
//     adam: {age: 20},
//     kevin: {age: 22},
//   };
  
//   Object.entries(students).forEach(student => {
//     // key: student[0]
//     // value: student[1]
//     console.log(`Student: ${student[0]} is ${student[1].age} years old`);
//   });

// // ex 5

//   const obj = { foo: 'bar', baz: 42 };
// Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"

// // ex 6

// const myObject = {
//     someKey: "some value",
//     hello: "World",
//     js: "javascript foreach object",
//   }
  
//   Object.keys(myObject).forEach(key => {
//     const value = myObject[key]
//     console.log(key, value) // "someKey" "some value", "hello" "world", "js javascript foreach object"
//   })

// ---------------filter()---------------------

// What is filter () in JavaScript?
// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

// // ex 1

// let arr = [
//     {name: "John", age: 30},
//     {name: "Grin", age: 10},
//     {name: "Marie", age: 50},
//   ];
 
//   let newArr = arr.filter(person =>  person.age <= 40);
//   console.log(newArr);

// // ex 2

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length < 6);

// console.log(result);

// // ex 3

// const ages = [32, 33, 16, 40];

// const Age = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(Age);

// // ex 4

// function checkLarge (num) {
// 	return num > 100;
// }

// const num = [100, 245, 57, 118];
// const newArr = num.filter (checkLarge);
// console.log (newArr);

// // ex 5

// const cities = [
// 	["Berlin", 3664088], 
// 	["Hamburg", 1852478], 
// 	["Dresden", 556227], 
// 	["Aachen", 248878], 
// 	["Krefeld", 226844]
// ];

// const result = cities.filter(function(item) { return item[1] > 500000 });

// // // oder mit ES 6 arrow function
// // const result = cities.filter ( item => item[1] > 500000);

// console.log(result);


// ---------------map()---------------------

// What is map () in JavaScript?
// Definition and Usage. map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.


// // ex 1

// const posts = [
//     { id: 1, title: "Sample Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
//     { id: 2, title: "Sample Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
//     { id: 3, title: "Sample Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
//   ];
//   // ES2016+
//   // Create new array of post IDs. I.e. [1,2,3]
//   const postIds = posts.map((post) => post.id);
//   // Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
//   const postSummaries = posts.map((post) => ({ id: post.id, title: post.title }));

//   console.log(postIds)
//   console.log(postSummaries)

// // ex 2

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

// // ex 3

// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));

// console.log(roots);

// // ex 4

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);

// console.log(doubles);

// // ex 5

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   people = persons.map(people => [people.firstname,people.lastname].join(" "));
  
//   console.log(people);

// OR

// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
  
//   let userFullnames = users.map(function(element){
//       return `${element.firstName} ${element.lastName}`;
//   })
  
//   console.log(userFullnames);

// // ex 6

// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// });


// ---------------sort()---------------------

// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// // ex 1

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// // ex 2

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);


// // OR

// const numbers2 = [4, 2, 5, 1, 3];
// numbers2.sort((a, b) => a - b);
// console.log(numbers2);

// // ex 3

// const items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];
  
//   // sort by value

//   items.sort((a, b) => a.value - b.value);
  
//   console.log(items)

// OR

//   sort by name

//   items.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });
//   console.log(items)

// // ex 4

// const stringArray = ['Blue', 'Humpback', 'Beluga'];
// const numberArray = [40, 1, 5, 200];
// const numericStringArray = ['80', '9', '700'];
// const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// stringArray.join(); // 'Blue,Humpback,Beluga'
// stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

// numberArray.join(); // '40,1,5,200'
// numberArray.sort(); // [1, 200, 40, 5]
// numberArray.sort(compareNumbers); // [1, 5, 40, 200]

// numericStringArray.join(); // '80,9,700'
// numericStringArray.sort(); // ['700', '80', '9']
// numericStringArray.sort(compareNumbers); // ['9', '80', '700']

// mixedNumericArray.join(); // '80,9,700,40,1,5,200'
// mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
// mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']


// ---------------reverse()---------------------

// // ex 1

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Then reverse it:
// fruits.reverse();

// console.log(fruits);


// ---------------reduce()---------------------
// What is reduce () in JavaScript?
// reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator. Syntax: array.reduce( function(total, currentValue, currentIndex, arr), initialValue )


// // ex 1

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// // ex 2

// const numbers = [175, 50, 25];

// const numb = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }

// console.log(numb);

// // ex 3

// const numbers = [15.5, 2.3, 1.1, 4.7];

// const numb = numbers.reduce(getSum, 0);

// function getSum(total, num) {
//   return total + Math.round(num);
// }

// console.log(numb);

// // ex 4

// const message = ["JavaScript ", "is ", "fun."];

// // function to join each string elements
// function joinStrings(accumulator, currentValue) {
//   return accumulator + currentValue;
// }

// // reduce join each element of the string
// let joinedString = message.reduce(joinStrings);
// console.log(joinedString);

// // Output: JavaScript is fun.

// // ex 5

// const numbers = [1800, 50, 300, 20, 100];

// let difference = numbers.reduce(
//   (accumulator, currentValue) => accumulator - currentValue
// );
// console.log(difference); // 1330


// // ex 5

// const expenses = [1800, 2000, 3000, 5000, 500];
// const salary = 15000;

// // function that subtracts all array elements from given number
// // 15000 - 1800 - 2000 - 3000 - 5000 - 500
// let remaining = expenses.reduce(
//   (accumulator, currentValue) => accumulator - currentValue,
//   salary
// );
// console.log(remaining); // 2700


// ---------------every()---------------------
// The every() method check if all array values pass a test.

// // ex 1

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// console.log( "All over 18 is " + allOver18);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// // ex 2

// const numbers = [45, 19, 29, 19, 25];
// let allOver18 = numbers.every(myFunction);

// console.log("All over 18 is " + allOver18);

// function myFunction(value) {
//   return value > 18;}


// ---------------some()---------------------

// The some() method check if some array values pass a test.

// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// console.log( "Some over 18 is " + someOver18);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// ---------------indexOf() / lastIndexOf---------------------

// The indexOf() method searches an array for an element value and returns its position

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple");
// let position1 = fruits.lastIndexOf("Apple");
// let position2 = fruits.lastIndexOf("Banana");

// console.log( "Apple is found in position " + position);
// console.log( "Apple is found in position " + position1);
// console.log( "Apple is found in position " + position2);

// ---------------find()---------------------

// The find() method returns the value of the first array element that passes a test function.

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// let first1 = numbers.findIndex(myFunction);

// console.log("First number over 18 is " + first);
// console.log("First number over 18 has index " + first1);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// ---------------Arrays()---------------------

// The Array.from() method returns an Array object from any object with a length property or any iterable object.

// const myArr = Array.from("ABCDEFG");
// console.log( myArr);



// *****************************
// https://www.programiz.com/javascript/library/array/reduce
// https://www.javascripttutorial.net/javascript-array-reduce/
// https://www.w3schools.com/js/js_array_iteration.asp