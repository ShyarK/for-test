
// // //1- Learn how to make progress bar
//   const bar = document.querySelector(".bar");
//   const button = document.querySelector("#button");
//   let width = 0;
//   let dgree = 50;
//
//   button.addEventListener("click", (e)=> {
//     e.preventDefault();
//     // width+= 10;
//     // button.textContent= width;
//     // console.log(width);
//     // bar.style.width = width + "%";
//     // if (width >=100) {
//     //   width = 90;
//     // }
//     let pro = setInterval(progressBarr, 25);
//     function progressBarr(){
//       if (width == dgree) {
//         clearInterval(pro);
//       }else {
//         width++;
//         bar.style.width = `${width}%`;
//       }
//     }
//   });


// //2- Apply different color from array to list Item
// const colors = ["#C2272D", "#FFFF01", "#F8931F",  "#009245", "#000"];
//   const listItem = document.querySelectorAll("ul li");
//
//   for (var i = 0; i < listItem.length; i++) {
//     for (var i = 0; i < colors.length; i++) {
//       listItem[i].style.backgroundColor = colors[i];
//     }
//   }

//
// //3-Pass function two argument one is array the second is a number then multiply the first item in the array and last item by the second
// //argument.
// //first.length - 1 means the last item in the array doesnt matter how items inside the array
//   function transform(first, last) {
//    let firstMultiply = first[0] * last;
//    let lastMultiply = first[first.length - 1] * last;
//    let output = new Array(`first: ${firstMultiply}`, `last: ${lastMultiply}`);
//
//     // {
//     //  first: firstMultiply,
//     //  last: lastMultiply
//     //  };
//
//      console.log(output);
//   }
//
//  transform([1, 3, 5], 4);


// function multiply(first, ...last) {
//   let firstMultiply = last[0] * first;
//   let lastMultiply = last[last.length - 1] * first;
//   const newArr = `First:${firstMultiply}\nSecond: ${lastMultiply}`;
//   console.log(newArr);
// }
//
// multiply(4, 1, 4, 5);
// // 4-Take the object into an array will only containe values of the object[1, 2]
//
//
// let obj = {
//   a: 1,
//   b: 2
// }
//
// let arr = [];
// for(let key in obj) {
//   // let arr = [
//   //   obj[key],
//   //   obj[key]
//   // ];
//   arr.push(obj[key]);
//   console.log(arr);
// }
//
//
// // 5- Reverse string
//
//
//
// const reverseStr = (str) => {
//   // Step 1. Use the split() method to return a new array
//   let splitStr = str.split('');
//   let reverseAr = splitStr.reverse();
//   let joinStr = reverseAr.join('');
//   console.log(joinStr);
// }
//
// reverseStr("hi");
//
//
//
// // 6- Convert the frist litter to capital
// const firstLetterToCapital = (str) => {
//   let strWords = str.split(' ');
//   let concatLetters = [];
//   for(let i = 0; i < strWords.length; i++) {
//     let firstLetter = strWords[i].charAt(0).toUpperCase();
//     let restOfLetters = strWords[i].slice(1);
//     let allLetters = firstLetter.concat(restOfLetters);
//     concatLetters.push(allLetters);
//   }
//   return concatLetters.join(" ");
// }
//
// console.log(firstLetterToCapital("what a small world"));
//
// var toTitleCase = function (str) {
// 	let strr = str.toLowerCase().split(' ');
// 	for (var i = 0; i < strr.length; i++) {
// 	 strr[i]	 = strr[i].charAt(0).toUpperCase() + strr[i].slice(1);
// 	}
// 	return strr.join(' ');
// };
//
//
// console.log(toTitleCase("the world is variety"));


// 7- remove duplicate from array



//8- Calling two methods in the object at the same time chaining. each time we need to (return this)
//The value of this, when used in an object, is the object itself.
//
// const callObject = {
//    a:1,
//    b:2,
//    getA() {
//      console.log(this.a);
//      return this;
//    },
//    getB() {
//      console.log(this.b);
//      return this;
//    }
// }
//
//
// callObject.getA().getB();


//9- The prototype constructor, printing array in a string with comma [1, 2].print(); // 1, 2
// https://www.w3schools.com/jsref/jsref_prototype_array.asp
// Use i === this.length to check if the element is already exist in the array if exist return the same number one time not duplicate.
// result += `${elem},` to return the element with comma.
//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g.,
//arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
// this.entries() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// let arrayOfNum = [1, 2];
// Array.prototype.print = function () {
//   let result = "";
//   for(let [i, elem] of this.entries()﻿) {
//     if (i === this.length - 1) {
//      result += elem;
//     }else {
//       result += `${elem}, `;
//
//     }
//   }
//   console.log(result);
//   // console.log(`${this}`);
// };
//
// arrayOfNum.print();


// 10- Class constructor
// Create is same as instantiate
// to instantiate  object means to create object
// We create class constructor to avoid repeating objects (DRY)
// The constructor function construct our object or create them based on thier class


// class User {
//   constructor(email, firstName, lastName, phoneNume) {
//     this.email = email;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phoneNum = phoneNume;
//   }
// }
//
//
// const shyar =  new User('shyarxelil@hotmail.com', 'Shyar', 'Khalil', 069983353);
//
//
// console.log(shyar);


// 11- Class method. How to use methods iside class
// When adding method to the class we don't use the function keyword (function functionName()).
//We create method out constructor and we don't need to put comma after constructor.


//
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//
//    carModel() {
//      console.log(this.model);
//      return this;
//    }
//
//    carYear() {
//      console.log(this.year);
//      return this;
//    }
// }
//
// var car1 = new Car('Eagle', 'Talon TSi', 1993);
//
// car1.carModel().carYear();


//12- Class Inheritance
// The extends keyword is used in class declarations or class expressions to create a class which is a child of another class.
//Syntax class ChildClass extends ParentClass { ... }


//
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//
//    carMake() {
//      console.log(this.make);
//      return this;
//    }
//
//    carModel() {
//      console.log(this.model);
//      return this;
//    }
//    carYear() {
//      console.log(this.year);
//      return this;
//    }
// }
//
// // This method Inherite all proerty and methods from the Car class
// // In the deletCar method we want to check if the car pramater is equal to the oneCar we want to dele from the cars array.
// // inside the fillter method if we return false for particular car it is going to remove that car from the cars array.
// // if we return true it is going to keep that car inside the cars array.
// // So when we create a new car make it will be fillter out so if this new car make is equal(true) to one of the cars make nothing will
//change
// // if is not equal(false) it is going to remove that car from the cars array.
// // car.make != topOne.make; this means true
// //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// //Callback returns a value that coerces to true
//
// class TopCars extends Car {
//   deletCar(car) {
//       cars = cars.filter(item => {
//         return item.make != car.make;
//       });
//   }
// }
//
//
// let car1 = new Car('Eagle', 'Talon TSi', 1993);
// let car2 = new Car('Nissan', 'X-TRAIL', 2016);
// let topCars = new TopCars('Toyota', 'Corolla', 2017);
// // we put car1 and car2, topCars inside the cars array to delete one of them with fillter method
// let cars = [car1, car2, topCars];
//
// topCars.deletCar(car1);
//
// console.log(cars);



// 13-Function.prototype.call()
//The call() method calls a function with a given this value and arguments provided individually. function.call(thisArg, arg1, arg2, ...)
//This is a prototype Inheritance, in these particular methods we inherite the valus in the function A to B by call method
// const A =  function(x) {
//   this.x = x;
// }
//
// A.prototype.getX = function(){
//   return this.x;
// }
//
// const B =  function(x, y) {
//   A.call(this, x);
//   this.y = y;
// }
//
// B.prototype.getY = function(){
//   return this.y;
// }
// let newB = new B('X', 'Y');
//
// console.log(newB);


// 14-master filter().
// return el.price != item this will return all items but which has price 45
// return el.name.toLowerCase().indexOf(item.toLowerCase()) > -1 will return any item has any given litter inside filterItems function.
//  -1 is the element is not found so > -1 meaons the element is found

// 1- array of object
// const inventors = [
//   { name: "Meat", price: 3 },
//   { name: "Steak", price: 45 },
//   { name: "Apple", price: 20 },
//   { name: "Banana", price: 100 },
//   { name: "Cauliflower", price: 10 },
//   { name: "Drink", price: 11 }
// ];
//
//
// // const onlyPrice = inventors.filter(el => el.name.length > 4);
// // console.table(onlyPrice);
//
// // return spesific items with filter()
// const filterItems = (item) => {
//   return inventors.filter(el => {
//   return el.name.toLowerCase().indexOf(item.toLowerCase()) > -1;
//  // return el.price != item
//   // return el.price > item
//  });
// };
//
// console.table(filterItems("drink"));

// var arr = [1, 2, 9, 16, 25, 36, 49, 64, 81, 100];
// const divisibleByFive = arr.filter(num => num % 5 == 0);
// const multiplyNumByNum = divisibleByFive.map(num => num * num);
// console.log(multiplyNumByNum);


// How to filter out the white spaces from string.

// const s = "It was really nice  to have you here!";
//
// let words = s.split(/\W+/).filter(word => word);
// let oneS = words.join(" ");
//
// console.log(oneS);


// 15- master map()
//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// how to convert an array to object

// const fullDescription = inventors.map(foodItem => {
//   // let items = {};
//   // items[foodItem.name] = foodItem.price;
//   // return items;
//   return `${foodItem.name}: ${foodItem.price}`
// });
//
//
// console.log(fullDescription);


// 16- master sort() arr.sort([compareFunction])
//The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order
//is according to string Unicode code points.
//If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
//If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
//If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
// https://www.youtube.com/watch?v=MWD-iKzR2c8

// const ordered = inventors.sort(function (firstItem, lastItem) {
//   if (firstItem.price > lastItem.price) {
//      return 1;
//   }else {
//     return -1;
//   }
// });

//
// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];
//
// // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });
//
// // 21 - 37 = - 16 so a come first
//
//
// console.table(items);

// // With ternary operator
//
//const ordered = inventors.sort((firstItem, lastItem) => firstItem.price > lastItem.price ? 1 : -1);
// const ordered = inventors.sort((firstItem, lastItem) => firstItem.price > lastItem.price ? -1 : 1);
//
// console.table(ordered);


// let numbers = [7, 8, 6, 1, 3];
// numbers.sort((a, b) => a - b);
//
// console.log(numbers);

// 17- Create a list of Boulevards of Paris that contains "de" anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category =  document.querySelector(".mw-category");
//
// const links = [...category.querySelectorAll("ul li a")];
//
// const ea = links.
//                map(link => link.textContent).
//                filter(item => item.includes("ea"));
// // we can also use indexOf instead of includes
// const ea = links.
//                map(link => link.textContent).
//                filter(item => item.indexOf("ea"));
// console.log(ea);




//18- The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
//educe() executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:

// accumulator
//currentValue
//currentIndex
//array
// arr.reduce(callback[, initialValue]), function (accumulator, currentValue)
//The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to
//reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no
//initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.


// How much the whole price in the inventors array?
//
// const wholePrice = inventors.reduce((acc, curr) => {
//     return acc + (curr.price);
// }, 0);
//
//
// console.log(wholePrice)

// Find maximum number in the array

// const vals = [1, 4, 5, 7, 89, 12];
//
// let answer = vals.reduce((acc, val) => val > acc ? val : acc);
//
// console.log(answer);

//19-Sort countries alphabetically by codes
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from
// objects, into distinct variables.



// 2- array literal

// const countries = [
//   "Azerbaijan, AZ",
//   "Bahamas, BS",
//   "Bahrain, BH",
//   "Bangladesh, BD",
//   "Barbados, BB",
//   "Belarus, BY",
//   "Belgium, BE",
//   "Belize, BZ",
//   "Benin, BJ",
//   "Bermuda, BM",
//   "Bhutan, BT"
// ]
//
//
//
// const alphabet = countries.sort((firstItem, nexItem) => {
//   const [aFirst, aLast] = firstItem.split(', ');
//   const [bFirst, bLast] = nexItem.split(', ');
//   aFirst > bFirst ? 1 : -1;
// });
//
// console.log(alphabet);


// 20- sum up the array with reduce

// const data = ['car', 'car', 'truck', 'truck', 'bus', 'bike', 'bike', 'bus', 'walk', 'toyota', 'BMW', 'toyota', 'train', 'tram', 'train'];
//
// const transportation = data.reduce((obj, item) => {
//   if (!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj
// }, {});
//
//
// console.log(transportation);


// 21- Array.prototype.some() The some() method tests whether at least one element in the array passes the test implemented by the provided
// function.
// arr.some(callback[, thisArg])
// const people = [
//  {name: 'Wes' , year: 1988},
//  {name:  'Kait', year: 1986},
//  {name: 'Irv' , year: 1970},
//  {name:  'Lux', year: 2016}
// ];
//
// // Is at least one person 19?
// const currentYear = new Date().getFullYear();
// const isAdult = people.some(person => currentYear - person.year  >= 19 ? true : false);
//
// console.log({isAdult});


// const comments = [
//   {text: 'Love this!', id: 23456},
//   {text: 'Super good', id: 90387},
//   {text: 'You are the best', id: 344643},
//   {text: 'Ramen is my fav food ever', id: 967565},
//   {text: 'Thanks dude!', id: 0985772}
// ];

//22- Array.prototype.every() The every() method tests whether all elements in the array pass the test implemented by the provided function.

// const allAdults = people.every(person => currentYear - person.year  >= 19 ? true : false);
//
// console.log(allAdults);


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const everyNum = arr.every(number => number % 2 == 0? true : false);
// const someNum = arr.some(number => number % 2 == 1? true : false);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function isEvenNumber(number) {
//     return number % 2 == 0;
// }
// function isOddNumber(number) {
//     return number % 2 == 1;
// }
// var booleanOne = arr.every(isEvenNumber) && arr.some(isOddNumber);
// var booleanTwo = arr.some(isEvenNumber) && arr.every(isOddNumber);
// console.log(booleanOne);
// console.log(booleanTwo);



//23 - Array.prototype.find() The find() method returns the value of the first element in the array that satisfies the provided testing
//function. Otherwise undefined is returned.

//find the comment with id:344643
//
// const findId = comments.find(comment => comment.id === 0985772);
//
// console.log(findId);

// 24- The findIndex() method returns an index in the typed array, if an element in the typed array satisfies the provided testing function.
// Otherwise -1 is returned.
// //find the comment with id:344643
// Delet that comment
 //
 // const index = comments.findIndex(comment => comment.id === 0985772);
 //
 // console.log(index);

 //25- Array.prototype.splice() The splice() method changes the contents of an array by removing existing elements and/or adding new
 //elements.

//comments.splice(index, 1);

//console.table(comments);

// const newArray = [
//   ...comments.splice(0, 2)
// ];
//
//
// console.table(newArray);

//How splice works?

// splice(index, deleteCount, elements);
// The Index at which to start changing the array (with origin 0), ib this case will start from first element (index position is 0) in the
// array.
// DeleteCount: An integer indicating the number of old array elements to remove. so if we put 0 index then follow by 2 it means two items
// will be deleted after index 0. So if we do myFish.splice(); and return new array with those tow items.
// if the index is -1 the last item will be deleted
//If deleteCount is omitted, or if its value is larger than array.length - start (that is, if it is greater than the number of elements left
// in the array, starting at start), then all of the elements from start through the end of the array will be deleted.
//if we want to add a new element to the array

// var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
//
// console.log(myFish.splice(6));

// Consider the following code segment:
//
// var arr = [1, 3, 4, 7, 11, 18];
//     arr.splice(0, 0, 0, 10);
//     arr.splice(0, 2);
//     console.log(arr);

// In the example above arr.splice(0, 0, 0, 10); will be [0, 10, 1, 3, 4, 7, 11, 18]
// Then arr.splice(0, 2) will be [1, 3, 4, 7, 11, 18]



// 26- Make a watch

// const myWatch = () => {
//   const currentDate = new Date();
//   const getHours = currentDate.getHours();
//   const getMinutes = currentDate.getMinutes();
//   const getSeconds = currentDate.getSeconds();
//    console.log(`${getHours}: ${getMinutes}: ${getSeconds}` );
// };



//27-Using the JavaScript Spread Operator
//Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function
//calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs
//(for object literals) are expected.
//myFunction(...iterableObj);

// const student = ['Ali', 'Haydar', 'Jafar'];
// const newStudents = ['Kawa', 'Mazlom', ...student];
//
// console.log(newStudents);


//To find the largest number in the array?
// const numbers = ['23', '40', '90', '100', '12', '56', '70', '80'];
//
//
// const largestNum = Math.max(numbers); // outputs NaN
// const largestNum2 = Math.max(...numbers); // outputs 100
//
//
// let arr1 = [1, 2, 3];
// arr1.push(7);
// let arr2 = [...arr1];
//
// console.log(arr1);
// console.log(arr2);


// 28-Converting a JavaScript String to an Array

// let palindrome = "Never odd or even";
//
// const reverseStr = function(str) {
//    // return [...str].reverse().join("");
//    // return Array.from(str).reverse().join("");
//    return str.split('').reverse().join("");
// };
//
// console.log(reverseStr(palindrome));



//29- How to clone original object without


// const obj = {
//   a: {
//     b: {
//       c: 2
//     }
//   }
// }
//
// const clone = JSON.parse(JSON.stringify(obj));
//
// clone.a.b.c = 1;
// console.log(clone);
//



// 30-Merge two arrays inside one array and keep it sorted

// const a = [1, 2, 5, 6, 8, 10, 20];
//
// const b = [1, 2, 10, 30, 20, 8, 40, 70];
//
//
// const c = [...a, ...b].sort();
//
//
// console.log(c);



// 31- What will be the answer after runing this block of code? and how to fix it?


  // const obj = {
  //     x: 1,
  //     getX() {
  //       const inner = function() {
  //           console.log(this.x);
  //         }
  //         inner();
  //     }
  //   };
  //
  // obj.getX();


// The problem in the first code is we can't get reference to the object(this.x) this will not going back to the object
/// To fix the code above:
// 1- we can change it to the arrow function, that means no binding of ‘this’

// const obj = {
//     x: 1,
//     getX() {
//       const inner = () => {
//           console.log(this.x);
//         }
//         inner();
//     }
//   };
//
// obj.getX();

// 2- Because of the lexical scoping we can define this inside the object getX()

  // const obj = {
  //     x: 1,
  //     getX() {
  //       const that = this;
  //       const inner = function() {
  //           console.log(that.x);
  //         }
  //         inner();
  //     }
  //   };
  //
  // obj.getX();

// 3-We can also bind the function to this

  // const obj = {
  //     x: 1,
  //     getX() {
  //       const inner = function() {
  //           console.log(this.x);
  //         }
  //         inner.bind(this)();
  //     }
  //   };
  //
  // obj.getX();

// 4- we can also run the function like below to get reference to the obj
  // const obj = {
  //     x: 1,
  //     getX: function() {
  //           console.log(this.x);
  //         }
  //   };
  //
  // obj.getX();



  // 32-add(1, 2);
  // add(1)(2);
  //It means that the first function (add) returns another function and then that returned function is called immediately.
  //The first step the function will check if we call function like this add(1, 2) if we call it will return num1 + num3.
  // The second step else statment will run if we call function with one argument num3 and this function will return num1 + num3
  // when we call add(1) we passed number 1 as argument then we call second function immediately by passing number 2 so the second fucntion w
  // return 1 + 2

 //  function add(num1, num2) {
 //    if (num1 && num2) {
 //      return num1 + num2;
 //    }else {
 //      return function(num3) {
 //        return num1 + num3;
 //      }
 //    }
 //  }
 //
 // console.log(add(2, 1));
 //  console.log(add(2)(1));


//   function add(a,b) {
//   if (arguments.length === 1) {
//     return function(b2) { // You could call this arg `b` as well if you like,
//       return a + b2;      // it would shadow (hide, supercede) the one above
//     };
//   }
//   return a + b;
// }
// console.log(add(10, 10)); // 20
// console.log(add(10)(10)); // 20



// 33-for loop
// i is the index position
//
// const array1  = [0, 2, 3, 4, 5, 6];
//
// for(var i = 0; i < array1.length; i++) {
//
//     console.log(i);
// }

// 34- Cpitlize all items inside an array
// const fruit = ["apple", "orange", "banana"];
// let capitalizeFruits = [];
// const fruits = fruit.map(items => capitalizeFruits = items.toUpperCase())
// console.log(fruits);



//35- Sum all number inside an array with forEach:

// const prices = [6.75, 3.10, 4.00, 8.12];
// // const sumNum = prices.reduce((acc, curr) => {
// //   return acc + curr;
// // }, 0);
// //
// // console.log(sumNum);
//
// let totalPrice =0;
// prices.forEach(item => {totalPrice += item});
//
// console.log(totalPrice);
//
//


//34-
// function add(a, b) {
//  return a + b;
// }
//
// console.log(add(1, 2));


// 35-Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from
//the year 101 up to and including the year 200, etc.

// Example
//
// //For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

// function centuryFromYear(year) {
//  return Math.ceil(year / 100);
// }
//
// console.log(centuryFromYear(1700));



//36-palindrome
// Given the string, check if it is a palindrome.
//
// Example
//
// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// reverse method doesnt work dirctly on variable only wrks on array

// function checkPalindrome(inputString) {
//    let reg = /[^A-Za-z0-9]/g;
//     let lowercaseStr = inputString.replace(reg, '').toLowerCase();
//     let reverseStr = lowercaseStr.split('').reverse().join('');
//     return reverseStr === lowercaseStr;
// }
// let p = "ihi";
// console.log(checkPalindrome(p));


//37-// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second
//occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second
//occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
// Example
//
// For a = [2, 1, 3, 5, 3, 2], the output should be
// firstDuplicate(a) = 3.
//
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the
//answer is 3.
//
// For a = [2, 4, 3, 5, 1], the output should be
// firstDuplicate(a) = -1.
//  let a = [2, 1, 3, 5, 3, 2];
// // // function firstDuplicate(a) {
// // //   return a.filter((el, i) => a.indexOf(el) === i);
// // // }
// //
// function firstDuplicate(arr) {
//   let obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     if (obj.hasOwnProperty(arr[i])) {
//       return arr[i];
//     }else {
//        obj[arr[i]] = 1;
//     }
//   }
//   return -1;
// }
// console.log(firstDuplicate(a));

// 38- Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
//
// 7 and 3 produce the largest product.
//First we loop throug the inputArray array with for loop the i inside for loop is 1 so the second number in the arrray will be 6
// We declare a variable highstNum we multiply 3 by 6 = 18
// inside for loop we use Math.max() function to return the largest of numbers. So we gave the max function number value of highstNum
// variable which we declared and second number will be 6 * 3 = 18
//  arr[i - 1] it means the the number brfore i so if i = 1 is 6,  1 - 1 = 0  then the 0 index is 3 and so on
// so the second iteration will be -2 * 6 = -12
// third: -5 * -2 = +15
// fourth: 7 * -5 = -35
// fifth: 3 * 7 = 21
// Math.max will return the largest one 21 and save it in variable highstNum the we return that variable so the result will be 21

// const inputArray = [3, 6, -2, -5, 7, 3];
// function  adjacentElementsProduct(arr) {
//   let highstNum = arr[0] * arr[1];
//
//   for (var i = 1; i < arr.length; i++) {
//     highstNum = Math.max(highstNum, arr[i] * arr[i - 1]);
//   }
//   // for (var i = 0; i < arr.length; i++) {
//   //   if (arr[i] * arr[i + 1] > highstNum ) {
//   //      highstNum = arr[i] * arr[i + 1];
//   //   }
//   // }
//   return highstNum;
// }
//
// console.log(adjacentElementsProduct(inputArray));



// 39-Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting
//polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture
// below.
// Example
//
// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.
// 1-interesting polygon: 1 box (0-ip box [1] + 0)
//
// 2-intersting polygon: 5 box (1-ip box [1] + 4)
// 3-interesting polygon: 13 box (2-ip box [5] + 8)
// 4-interesting polygon: 25 box (3-ip box [17] + 12)
// if n = 2 the result will be 2
// if n = 3 the result will be 3 * 2 = 6
// if n = 4  the result will be 4 * 6 = 24
// if n = 5  the result will be 5 * 24 = 120


// function  shapeArea(n) {
//   let interstPolygon = n === 1 ? 1 :
//   n * shapeArea(n - 1);
//   return interstPolygon;
//   // let area = 1;
//   // for (var i = 1; i < n; i++) {
//   //    area += 4 * i;
//   // }
//   // return area;
// }
//
// console.log(shapeArea(4));


// 40 - the following function only going to find one missing number
// we use for loop to loop throgh the array and count the array index and save in the i so if i dosent exit will return that i

// const numbers = [0, 2, 1, 4, 6, 8, 5, 10, 13, 11, 12];
//
// function missingNumber(numbers) {
//   let missing = -1;
//   for(var i = 0; i <= numbers.length; i++) {
//     if (numbers.indexOf(i) === -1 ) {
//        missing = i;
//     }
//   }
//
//   return missing;
// }
//
// console.log(missingNumber(numbers));


// 41-Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
// Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the
//previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of
// additional statues needed.

// Example
//
// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.
//
// Ratiorg needs statues of sizes 4, 5 and 7.

// sortedNum[sortedNum.length -1] the last number in the array
// sortedNum[0] first item in the array
//





// min = 2
// max = 8
// 9 - 2 = 7 + 1 = 8 - 4 = 4

// const numbers = [6, 2, 3, 8, 9, 10];
// function missingNumber(numbers) {
//   let missing = 0;
//   for(var i = 0; i <= numbers.length - 1; i++) {
//     if (numbers.indexOf(i) === -1 ) {
//        missing++;
//     }
//   }
//
//   return missing;
// }
//
// console.log(missingNumber(numbers));

// const numbers = [2, 1, 4];
// function missingNumber(numbers) {
//   const sortedNum = numbers.sort(function(a, b) {
//     return a - b;
//   });
//    let min = sortedNum[0];
//    let max = sortedNum[sortedNum.length -1];
//    return (max - min + 1) - numbers.length;
// }
//
// console.log(missingNumber(numbers));



// 42-

// function b() {
//   a();
//   var c;
// }
//
// function a() {
//   var d;
// }
//
// var d;
// console.log(b());
// console.log(d)

// let valueDouble = 8.75;
// //let valueInt = valueDouble | 0;
//
//
// var userName = prompt("What is your name?")
// var largeNume = prompt("Give a large number?");
// var smallNume = prompt("Give a small number?");
// var guessNumber = prompt(`What is the Number? Look ${userName}! the number is between ${smallNume} and ${largeNume}`)
// var randomNumber = Math.floor(Math.random() * parseInt(largeNume)) + parseInt(smallNume);
// console.log(randomNumber);
// if(randomNumber === guessNumber) {
//   console.log(`hi ${userName} You win the game!`);
// }else {
//   console.log(`Sorry ${userName} the number you've guessed is ${guessNumber} but the random number is ${randomNumber} try again!`)
// }

// 43-extract a number from string
//
// function returnNumber() {
//   var myString = "I've got 67 pages!";
//   var newMyString = myString.split(" ");
//   var theNumber;
//   for (var i = 0; i < newMyString.length; i++) {
//     if (!isNaN(newMyString[i])) {
//       theNumber = parseInt(newMyString[i]);
//       return theNumber;
//     }else if (isNaN(newMyString[i])) {
//         const myArray =  new Array(3);
//         myArray[0] = newMyString[0];
//         myArray[1] = newMyString[1];
//         myArray[2] = newMyString[3];
//         console.log(myArray);
//     }
//   }
// }
//
// console.log(returnNumber());

// NestedIfStatementsExample.js
//
// let total = 20;
//             switch (true){
//                 case (total / 2 == 10 && total > 10): console.log(1); break;
//                 case (total != 20): console.log(2); break;
//                 case (total / 2 == 40 || total > 10): console.log(3); break;
//                 case (total + 20 == 40 && total != 20): console.log(4); break;
//                 case (total == 20 && total % 2 == 0): console.log(5); break;
//             }
//
//


// 44-computer against computer

// var getRandomNumber = (upper) => {
//    return Math.floor(Math.random() * upper) + 1;
// };
// var randomNumber = getRandomNumber(1000);
// var computerGuesses;
// var guessesAttepmts = 0;
// while (randomNumber !== computerGuesses) {
//    computerGuesses = getRandomNumber(1000);
//    guessesAttepmts += 1;
// }
// console.log(`The random number was: ${randomNumber}`);
// console.log(`This took the computer ${guessesAttepmts} attempts to guess the random number!`);


//45-Generate 100 random number on the page


// var randomNumber = function(upper) {
//    return Math.floor(Math.random() * upper) + 1;
// };
//
// var counter = 0;
//
// while(counter <= 100) {
//   document.write(`${randomNumber(100)} `);
//   counter +=1;
// }



// //46-Print 10 div using for loop
// var containerDiv = document.querySelector(".container");
//   var div;
// var divNumber = 1;
// console.log(containerDiv);
//
// for(var i = 0; i < 10; i+=1){
//   div = document.createElement("div");
//   div.classList.add("numberStyle");
//   var divinner = div.innerHTML = divNumber;
//   containerDiv.appendChild(div);
//   divNumber +=1;
// }

// 47-sum the number in the array
// var arr = [1, 1, 2, 3, 5, 8, 13, 21];
// var sum = 0;
// for (var index in arr) {
//     sum += arr[index];
// }
// console.log(sum);
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// for (counter = 0; counter < arr.length; counter++) {
//     sum += arr[counter];
// }
// console.log(sum);

// 48-How to remove the last item from an array and sum 3 to each item?
// We can remove any item from the array using loop index arr[i]
//  indexer operator [] when we put i inside  indexer operator [] The array indexer takes the element’s index as parameter in the range from
// 0 to array.length-1.
//  The last element therefore has an index of array.length-1.
// So when we say arr[i - 1] we remove the last item in the array which is 39
// If we add 3 to each item we've got to do like this arr[i - 1] + 3
// So in the following example each 3 index item in the array will be incremented by 3 and without last array
// 17, 42 48


// var printNumber;
// var arr = [17, 34, 21, 42, 15, 69, 48, 25, 39];
// function addNum() {
//
//     for (i = 1; i < arr.length; i = i + 3){
//        console.log(arr[i - 1] + 3);
//     }
// }
//
// console.log(addNum());


//49- chooice item inside array randomly


// const myArr = ["paper", "rock", "scissors"];
//
// const randumItem = Math.floor(Math.random() * myArr.length);
// // If we console.log randumItem each time when we refresh the browser will give us different index of array item from 0 to 2
// // myArray[0] will chose the first item myArray[2] will choose the second and myArray[2] witll choose the third item
// // so we use myArray[randumItem] to randomly choose the items.
// console.log(myArr[randumItem]);



// function person(name, color) {
//   console.log(`My name is ${name} and my favourite color is ${color}`);
// }
//
// person("Shyar", "green");

// 50- Calling function from another function
// function sing(callback) {
//   console.log("La la la");
//   callback();
// }
//
//
// function meow() {
//   console.log("meow meow");
// }



//
// var initialValue = 0;
// var sum = [{x: 1}, {x:2}, {x:3}].reduce((accumulator, currentValue) =>  accumulator + currentValue.x, initialValue);
//
// console.log(sum)


//51- master arr.indexOf(searchElement, fromIndex)

// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// idx + 1 is fromIndex The index to start the search at. each time will continue searching when we add one to index
// 0


//Finding if an element exists in the array or not and updating the arraySection
// function updateVegetablesCollection (veggies, veggie) {
//     if (veggies.indexOf(veggie) === -1) {
//         veggies.push(veggie);
//         console.log('New veggies collection is : ' + veggies);
//     } else if (veggies.indexOf(veggie) > -1) {
//         console.log(veggie + ' already exists in the veggies collection.');
//     }
// }

// var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
// updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.

// Note: If the index is greater than or equal to the array's length, -1 is returned
// array.length =  5
// the example below will output -1 beacuse 6 is > 5
//  if the provided index is negative, the array is still searched from front to back.
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element, 0);
//
//
// console.log(idx);


// Search how many a element in the array
// const array = ['a', 'b', 'a', 'c', 'a', 'd'];
// const elementA = "a";
// let newArr = [];
// var numberOfEl = 0;
// var idx = array.indexOf(elementA);
// while (idx != -1) {
//   newArr.push(idx);
//   idx = array.indexOf(elementA, idx + 1);
//   numberOfEl++;
// }
//
//
// console.log(numberOfEl);

//52-The lastIndexOf()
//The SyntaxSection is: arr.lastIndexOf(searchElement, fromIndex)
//The fromIndex The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1) it means the
// search will start from the last item in the array.
// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.lastIndexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
// }
//
// console.log(indices);

// Note: If the index is greater than or equal to the length of the array, the whole array will be searched.
//
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.lastIndexOf(element, 9);
//
// console.log(idx);
// var arr = [1, 3, 3, 4, 3, 3, 33, 5, 3, 2];
// console.log(arr.lastIndexOf(3, 7));

//What will the following code segment print to the console?

//Number 5 because the search begin backwards from right to left so the last index in this array is 9 and the nearest number 3 from indx 7
// is number three at index 5

//53- The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not
//included). The original array will not be modified.
//
// SyntaxSection
// arr.slice([begin[, end]])
// ParametersSection
// begin Optional
// Zero-based index at which to begin extraction.
// A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
// If begin is undefined, slice begins from index 0.
// If begin is greater than the length of the sequence, an empty array is returned.
// end Optional
// Zero-based index before which to end extraction. slice extracts up to but not including end.
// For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
// A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
// If end is omitted, slice extracts through the end of the sequence (arr.length).
// If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
//
// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//
// var someAnimals = animals.slice(2, 4);
//
// console.log(someAnimals);



// 54-Consider the following code segment:
//
// function printText(name, number, age) {
//                 if (arguments.length == 1) {
//                   console.log(name);
//                 } else if (arguments.length == 2) {
//                   console.log(name + " " + number);
//                 } else {
//                   console.log(name + " " + number + " " + age);
//                 }
//             }
//             printText("Bill", 20);
//
// What will the following code segment print to the console?
// Bill 20

// // 55- primitive values and reference values
// var userName = "anybody";
// var secondUserName = userName;
// console.log(userName);
// console.log(secondUserName);
//
// userName = "Shyar";
// console.log(secondUserName);



// var number = new Number(50);
// console.log(number);
//
//
// var bill;
// function person(first_name, last_name) {
//   return {
//     first_name: first_name,
//     last_name: last_name,
//     fullName: function () {
//       return this.first_name + ' ' + this.last_name;
//       console.log(this);
//     }
//   }
// }
// bill = new person("Bill", "Brown");
// bill.fullName();
// console.log(bill.fullName());

// 56-Consider the following code segment:
//
// var animalOne = "Dog";
//             var animalTwo = "Cat";
//             var animalThree = "Mouse";
//             animalTwo = animalOne;
//             animalOne = "Frog";
//             var str = animalOne.substring(2, 4) + animalTwo.substring(1, 2) + animalThree.substring(animalOne.indexOf('o'), 5);
//             console.log(str);
//
// What will the following code segment print to the console?




//57-Consider the following code segment:

// function containsArt(strOne, strTwo, strThree){
//               var str = strOne + strTwo + strThree;
//               //console.log(str);
//               return str.indexOf("art") != -1;
//             }
//
// // // The method containsArt() returns true if at least one of the three strings (strOne, strTwo or strThree) contains the substring "art".
// // //Otherwise, the method should return false. Which of the following method call demonstrates that the method DOES NOT work as intended?
// //
// //
// // //if you console log each str you will see the answer
// console.log(containsArt("start", "article", "Bart"));
// console.log(containsArt("rattrap", "similar", "today"));
// // Correct because this statement will return true even though none of the individual strings have the substring "art". This statement
// //returns true as the "ar" in similar is concatenated to the 't' in today, causing the substring "art".
// console.log(containsArt("harm", "chortle", "crowbar"));
// console.log(containsArt("matriculate", "carat", "arbitrary"));
// console.log(containsArt("darkroom", "cartoon", "articulate"));



// This just for fun
// 333-567-8989
// 564.788.8923
//(657)986-1234

// Khalil, shyar
//Shyarr Khaliiil
// <a href="http://www.google.com)">Google</a>
//<a href="http://www.amazon.com)">amazon</a>
// I I love that that cake, Why don't don't you bring it to to me me
// caaaaaaandy


//58- const formSub = document.querySelector(".for_test");
// let formInput = document.querySelector("input");
// const button = document.querySelector(".button");
// const formValidation = /\w+@\w+\.(com|net|org)/;
// button.addEventListener("click", () => {
//     var formValue = formInput.value;
//     var test = formValidation.test(formValue);
//     if (test) {
//       alert("That format is true!");
//       formInput.value = " ";
//     }else if (formValue === "") {
//       alert("You didn't write anything!");
//     }else{
//       alert("your email is not correct!");
//     }
// });

// //59-
// let firstAndLastN = "Zara Larsson has 22 brothers";
// let getFirstAndLast = /\d+/g;
// //console.log(firstAndLastN.replace(getFirstAndLast, "$2, $1"));
// console.log(firstAndLastN.match(getFirstAndLast));
// let dataHost = /^(\d{2}-\d{2}-\d{4})-(david|jmp)$/i;
// const csv = `Date, Host
// 02-04-2018-David
// 09-12-2018-JMP
// 20-11-2018-Sulti`;
//
// let takeDate = csv.split("\n")
// .filter(line => {return line.match(dataHost)})
// .map(line => line.replace(dataHost, "$2 hosted on our wedding on $1"))
// .join("\n");
//
// console.log(takeDate);
//
//
//
// // 60-
// let input = "Shyar hosted codasiourss";
// let incorrect = "David hosted DevTip";
//
// let regExpForCorrectForm = /(?:shyar|trump) hosted (.+)/i;
//
//
// let channel = input.match(regExpForCorrectForm);
// channel = "Trump hosted fun function ha!".match(regExpForCorrectForm)[1];
// console.log(channel);


// 61
// let num = "Lorem Ipsum is simply dummy 347-5986 text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 345-9873 a galley of type and scrambled it to make 111-2222 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  and 444-5555";
//let reg = /(\d{3})[-.](\d{4})/g;
// let re = /\b\w+\b/g;
// let matchItem = reg.exec(num);
//
// while (matchItem != null) {
//   console.log(matchItem[1]);
//   matchItem = reg.exec(num);
// }


// console.log(num.replace(re, extractNum));
// function extractNum(match) {
//   if (match.length === 4) {
//    return  match.toUpperCase();
//  }else {
//     return match;
//  }
// }

// 62
// const buttonParagraph = document.querySelector(".button_paragraph");
// const textP = document.querySelector(".text_paragraph");
// const textArea = document.querySelector(".textArea");
// let textAreaValue = textArea.value;
//
// // let textArray = textAreaValue.split(/(\W+)/);
//
//
//
// // Create the spane
// var createSpan = (text) => {
//     let htmlEl = document.createElement("span");
//     htmlEl.innerHTML = text;
//     return htmlEl;
// };
//
//
// let getInput = (e) => {
//   let parent = e.target.parentNode;
//   let text = parent.firstChild;
//   parent.removeChild(text);
//   parent.innerHTML = e.target.value;
// };
//
// // Create input to change the word in the p
// let spanEl = (event) => {
//    let targetEl = event.target;
//    let spanInput = document.createElement("input");
//    spanInput.type = 'text';
//    spanInput.style.width= "60px";
//    spanInput.style.marginLeft = "2px";
//    // spanInput.value = targetEl.innerHTML;
//    targetEl.appendChild(spanInput);
//    spanInput.addEventListener("blur", getInput);
// };
// //
// // e.target.value = "Remove";
// buttonParagraph.addEventListener("click", (e) => {
//   if (e.target.value === "Insert") {
//     let textArray = textAreaValue.split(' ');
//     for(var i = 0; i < textArray.length; i++){
//       let span1 = createSpan(textArray[i]);
//
//       span1.addEventListener('click', spanEl);
//       textP.appendChild(span1);
      // if (!/\W+/.test(textArray[i])) {
      //       span1.style.margin = 0;
      // }
      // let span2 = createSpan(' ');
//       // textP.appendChild(span2);
//     }
//     e.target.value = "Remove";
//   }else if (e.target.value = "Remove") {
//     const parent = e.target.parentNode;
//     const spanParent = parent.nextElementSibling;
//     spanParent.innerHTML = '';
//     e.target.value = "Insert"
//   }
//
// });
//

// 63-
//Working with objects
// const erine = {
//   animal: "dog",
//   age: 1,
//   breed: "pug",
//   bark: function(){
//     this.animal;
//   }
// }
//
// var prop = "age";
//
// console.log(erine["bark"]());


// const erine = {
//   animal: "dog",
//   age: 1,
//   breed: "pug",
//   bark: function(){
//     this.animal;
//   }
// }
//
// var prop = "age";
//
// console.log(erine["bark"]());

//64- making class
// For the answer what doese the instance mean?
// https://www.youtube.com/watch?v=mx2HFzRvQg0

  // const today = new Date();
  // const hours = today.getHours();
  // const minutes = today.getMinutes();
  // const seconds = today.getSeconds();



// class Pet {
//   constructor(name, age, breed, sound){
//     this.name = name;
//     this.age = age;
//     this.breef = breed;
//     this.sound = sound;
//   }
//   get activity(){
//     if(hours > 8 && hours <= 20) {
//       console.log("playing...");
//     }else {
//       console.log("woofing");
//     }
//   }
//
//   speak() {
//     console.log(this.sound);
//   }
// }
//
//
// const milo = new Pet("milo", 1, 'Pug', 'vip vip');
// const era = new Pet("era", 1, 'Pug', 'Woof Woof!');
//
// //milo.activity;
// era.speak();
// console.log(milo);

// 65- Get and Set methods in oop
//The get syntax binds an object property to a function that will be called when that property is looked up.

// class Person{
//   constructor(firstName, lastName, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//   }
//
//   get fullPersonDe() {
//     return `Name: ${this.firstName}\nlast name: ${this.lastName}\nAddress: ${this.address}\nPhone: ${this.PhoneNumber}`
//   }
//   get phone() {
//     return this.PhoneNumber;
//   }
//   set phone(value) {
//     this.PhoneNumber = value;
//   }
// }
//
//
// const personDe = new Person("Shyar", "Khalil", "Burgemeester WaldeckStraat 77");
// personDe.phone = "(222) 555-5555";
// console.log(personDe.fullPersonDe);

// const p = document.createElement("p");
// function setTime(){
//   const today = new Date();
//   const hours = today.getHours();
//   const minutes = today.getMinutes();
//   const seconds = today.getSeconds();
//
//   p.innerHTML = `${hours}:${minutes}:${seconds}`;
// }
// let getTime = setInterval(setTime, 1000);
// containerDiv.appendChild(p);


// 66-Make a canvas
//void ctx.fillRect(x, y, width, height); .fillRect() method of the Canvas 2D API draws a rectangle that is filled according to the current fillStyle.
//ctx.moveTo(x, y);
//.arc() method of the Canvas 2D API adds a circular arc to the current sub-path.




// const canvas =  document.querySelector("#canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const ctx = canvas.getContext('2d');
// console.log(canvas);
// ctx.fillStyle = 'yellow';
// ctx.fillRect(110, 20, 40, 20);
// ctx.fillStyle = '#c9ad1f';
// ctx.fillRect(200, 60, 40, 20);
// ctx.fillStyle = 'tomato';
// ctx.fillRect(40, 80, 40, 20);
//
// // Line
// ctx.beginPath();
// ctx.moveTo(30, 60);
// ctx.lineTo(15, 10);
// ctx.lineTo(100, 20);
// ctx.strokeStyle = "green";
// ctx.stroke();


// cercle
//void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, Math.PI * 2, false);
// ctx.strokeStyle = "#000";
// ctx.stroke();


// for(var i =0; i < 150; i++) {
//   let windowHeight = window.innerHeight;
//   let windowWidth = window.innerWidth;
//   let x = Math.floor(Math.random() * windowHeight);
//   let y = Math.floor(Math.random() * windowHeight);
//
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//
//   let redGb = `rgb(${r}, ${g}, ${b})`;
//
//
//   ctx.beginPath();
//   ctx.arc(x, y, 20, 0, Math.PI * 2, false);
//   ctx.strokeStyle = redGb;
//   ctx.stroke();
//   console.log(x);
// }

// requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to
//update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
//ctx.clearRect(x, y, width, height);
//.clearRect() method of the Canvas 2D API erases the pixels in a rectangular area by setting them to transparent black.






// class Circle {
//   constructor(x, y, radius, dx, dy, color){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = color;
//   }
//  get draw(){
//    ctx.beginPath();
//    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//    // ctx.strokeStyle = "#000";
//    //ctx.stroke();
//    ctx.fillStyle = this.color;
//    ctx.fill();
//    if (this.x + this.radius > 290 || this.x - this.radius < 0 ) {
//      this.dx= - this.dx;
//    }
//
//
//    if (this.y + this.radius > 150 || this.y - this.radius < 0) {
//      this.dy = - this.dy;
//    }
//
//    this.x+= this.dx;
//    this.y+= this.dy;
//  }
//
// }
//
// const cirlesArray = [];
// const colorArray = [
//   "#ff3030",
//   "#368cff",
//   "#fff",
// ];
// // circle.x = Math.floor(Math.random() * 22);
// // circle.y = Math.floor(Math.random() * 100);
// // circle.dy = Math.floor(Math.random() * -.10);
// // circle.dx= Math.floor(Math.random() * -.10);
// // circle.radius = 10;
// let radius = 3;
// for (var i = 0; i < 400; i++) {
//
//   let x = Math.random() * 500;
//   let y = Math.random() * 300;
//   let dy = Math.random() - 0.5;
//   let dx= Math.random() - 0.5;
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   let color = colorArray[Math.floor(Math.random() * colorArray.length)];
//
//    cirlesArray.push(new Circle(x, y, radius, dx, dy, color));
// }
//
// console.log(cirlesArray);
//
// const mouse = {
//   x: undefined,
//   y: undefined
// }
//
// window.addEventListener('mouseover', (event) => {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   console.log(event);
// });
//
// function animation(){
//    requestAnimationFrame(animation);
//      ctx.clearRect(0, 0, innerWidth, innerHeight);
//      for (var i = 0; i < cirlesArray.length; i++) {
//        cirlesArray[i].draw;
//      }
// }
//
//
//
//
// animation();






//67- This in JavaScript
//
// const person = {
//   name: "Khalil",
//   walk() {
//     console.log(this);
//   }
// }
//
//
// let walk = person.walk.bind(person);
//
// walk();

//

// 68-arrow function
// // const square = function(number) {
// //   return number * number;
// // }
//
// // const square = (number) => {
// //    return number * number;
// // }
//
//
// const square = number => number * number;
//
//
// console.log(square(10));
//
// const jobs = [
//  {id: 1, isActive: true},
//  {id: 2, isActive: true},
//  {id: 3, isActive: false}
// ];
//
// // filter out only the active jobs?
//
//
// let ativeJobs = jobs.filter(job => job.isActive);
//
// console.log(ativeJobs);
//


// 69- arrow function and this keyword
// if we put anonymous function as call back, and we call the function as standalone function outside of an object by default this returns to the
// window object
// How can we get reference to the PERSON object inside the call back function?
//We set a veriabe outside the call back function and asign it to this or we can use arrow function
// const person = {
//   walk() {
//     // let self =  this;
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   }
// }
//
//
// person.walk();



// 70-Object destructuring


// const person = {
//   phone: "232-343-9999",
//   address: "WaldeckStraat 77",
//   job: "Developer"
// }
//
//
//
// const {phone, address, job} = person;
//
// console.log(`Phone number: ${phone}\nAddress: ${address}\nJob: ${job}`);



// 71-

//$(".for_test").hide().slideDown(2000).delay(2000).slideUp(1000);


// const title = "Form for test";
// const originalOne = "Form Validation";
// $("h3").hover(function(){
//   $(this).text(title);
// },
//   function(){
//     $(this).text(originalOne);
//   }
// );
//
//
// const newButton = $("<button>Delete</button>");
// const button = $(".button_paragraph");
// let r = Math.floor(Math.random() * 255);
// let g = Math.floor(Math.random() * 255);;
// let b = Math.floor(Math.random() * 255);;
//
// console.log(r);
// const text = $("textarea");
// const p = $(".text_paragraph");
// button.click(function(){
//   p.text(text.val());
//   text.val(" ");
//
//   $(this).css({
//     backgroundColor: `rgb(${r}, ${g}, ${b})`
//   });
//   console.log(r);
// });
//
// $( ".change_color" ).click(function() {
//   $( ".color_div div" ).each(function( index, element ) {
//     // element == this
//     $( this ).css( "backgroundColor", "yellow" );
//     if ( $( this ).is( "#stop" ) ) {
//       $( "span" ).text( "Stopped at div index #" + index );
//       return false;
//     }
//   });
// });
//
//
//
// const name = "Shyar";
//
// function myFunction() {
//   if (name === "shyar") {
//     let surName = "Khalil";
//   }
// }
//
// myFunction();
//
// console.log(surName);

//
//
// var a={},
//     b={key:'b'},
//     c={key:'c'};
//
// a[b]=123;
// a[c]=456;
//
// console.log(a[b]);
// //
//

// function phoneticLookup(val) {
//   var result = "";
//
//   // Only change code below this line
//  var lookup = {
//    "alpha": "Adams",
//    "bravo": "Boston",
//    "charlie": "Chicago",
//    "delta": "Denver",
//    "echo": "Easy",
//    "foxtrot": "Frank",
//    "" : undefined
//  }
//   result+= lookup[val];
//   // Only change code above this line
//   return result;
// }
//
// // Change this value to test
// console.log(phoneticLookup(""));
//
//
//
//
// // Setup
// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [
//         "Let It Rock",
//         "You Give Love a Bad Name"
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [
//         "1999",
//         "Little Red Corvette"
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));
//
// // Only change code below this line
// function updateRecords(id, prop, value) {
//   if(prop !== "tracks" && value !== "") {
//      collection[id][prop] = value;
//   }
//
//   if(prop === "tracks") {
//       if(collection[id].hasOwnProperty("tracks") === false) {
//         collection[id][prop] = [];
//       }
//   }
//   if(prop === "tracks" &&  value !== "") {
//     collection[id][prop].push(value);
//   }
//   if(value === "") {
//     delete collection[id][prop]
//   }
//   return collection;
// }
//
// // Alter values below to test your code
// const udatedArray = updateRecords(5439, "artist", "ABBA");
//
// console.log(udatedArray);
//
//

//
// var myArray = [];
//
// // Only change code below this line.
//
// for(let i = 1; i < 11; i+=2) {
//   myArray.push(i)
//   console.log(myArray);
// }

// //

//Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];
//
//
//
// // if(contactName === name && contactsList.hasOwnProperty(prop)) {
// //     return contactsList[prop];
// // }
// //
// // if(contactName !== name) {
// //     return "No such contact";
// // }
// //
// // if(!contactsList.hasOwnProperty(prop)){
// //  return "No such property";
// // }
//
// function lookUpProfile(name, prop){
// // Only change code below this line
//   for (var i = 0; i < contacts.length; i++) {
//     let contactsName = contacts[i]["firstName"];
//     let contactsProp = contacts[i];
//
//     if(name === contactsName) {
//       if (contactsProp.hasOwnProperty(prop)) {
//          return contactsProp[prop];
//       }else {
//         return "No such property";
//       }
//
//     }
//   }
//
//   return "No such contact";
// // Only change code above this line
// }
//
// // Change these values to test your function
// console.log(lookUpProfile("bob", "potato"));




// function printManyTimes(str) {
//   "use strict";
//
//   // change code below this line
//
//   const sentence = str + " is cool!";
//   for(let i = 0; i < str.length; i+=2) {
//     console.log(sentence);
//   }
//
//   // change code above this line
//
// }
// printManyTimes("freeCodeCamp");




// function freezeObj() {
//   "use strict";
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // change code below this line
//
//   Object.freeze(MATH_CONSTANTS.PI);
//
//   // change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch( ex ) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();


// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
//
// const getPositiveNumbers =  realNumberArray.map(num => (num > 0) ? num : null);
// const integerNumbers = getPositiveNumbers.filter(integer => Number.isInteger(integer));
//
// const squaredIntegers = integerNumbers.map(sqrd => Math.pow(sqrd, 2));
//
// console.log(getPositiveNumbers);
// console.log(integerNumbers);
// console.log(squaredIntegers);




// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line
//   const getPositiveNumbers =  arr.map(num => (num > 0) ? num : null);
//   const integerNumbers = getPositiveNumbers.filter(integer => Number.isInteger(integer));
//   const squaredIntegers = integerNumbers.map(sqrd => Math.pow(sqrd, 2));
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// const LOCAL_FORECAST = {
//   today: { min: 72, max: 83 },
//   tomorrow: { min: 73.3, max: 84.6 }
// };
//
// function getMaxOfTmrw(forecast) {
//   "use strict";
//   // change code below this line
//   const {tomorrow:{max: maxOfTomorrow}} = forecast; // change this line
//   // change code above this line
//   return maxOfTomorrow;
// }
//
// console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6




// let a = 8, b = 6;
// (() => {
//   "use strict";
//   // change code below this line
//    [b, a] = [a, b];
//   // change code above this line
// })();
// console.log(a); // should be 6
// console.log(b); // should be 8



// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   const [a, b, ...rest] = list;
//   const arr = [...rest]; // change this
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = (function() {
//   "use strict"; // do not change this line
//
//   // change code below this line
//   return function half({max, min}) {
//     // use function argument destructuring
//     return (max + min) / 2.0;
//   };
//   // change code above this line
//
// })();
// console.log(stats); // should be object
// console.log(half(stats)); // should be 28.015



// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";
//
//
//   // change code below this line
//
//   const resultDisplayArray =   [
//     `<li class="text-warning">${arr[0]}</li>`,
//     `<li class="text-warning">${arr[1]}</li>`,
//     `<li class="text-warning">${arr[2]}</li>` ];
//   //change code above this line
//
//   return resultDisplayArray;
// }
//
//
//
// const resultDisplayArray = makeList(result.failure);
//
// console.log(resultDisplayArray);



// const createPerson = (name, age, gender) => {
//   "use strict";
//   // change code below this line
//   return {
//    name,
//     age,
//     gender
//   };
//   // change code above this line
// };
// console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object



// change code below this line
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     "use strict";
//     this.gear = newGear;
//   }
// };
// // change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);



//
// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//    class Vegetable {
//      constructor(name) {
//         this.name = name;
//      }
//    }
//   /* Alter code above this line */
//   return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'



// Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
//
// Now create getter and setter in the class, to obtain the temperature in Celsius scale.
//
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//    class Thermostat {
//      constructor(fahrenheit){
//       this.fahrenheit = fahrenheit;
//      }
//
//      get temperature() {
//        return  5/9 * (this.fahrenheit - 32);
//      }
//      set temperature(C) {
//       this.fahrenheit = C * 9.0 / 5 + 32;
//      }
//    }
//   /* Alter code above this line */
//   return Thermostat;
// }
// const Thermostat = makeClass();
// const thermos = new Thermostat(76); // setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in C
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in C
// temp = thermos.temperature; // 26 in C
//
// console.log(temp);


// const capitalizeString = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
//
// console.log(capitalizeString("the world is so small!"));



// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig // Change this line
// let result = quoteSample.match(vowelRegex);
//
// console.log(result);




// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[A-Z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
//
// console.log(result);



// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
//
// console.log(result);



// let quoteSample = "3 blind mice.";
// let myRegex = /[^ieuoa0-9]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
//
//
//
// console.log(result);




// let difficultSpelling = "Mississippi";
// let myRegex = /s+/ig; // Change this line
// let result = difficultSpelling.match(myRegex);



//
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
//
// console.log(result);


// In regular expressions, greedy means the expression will match on the longest possible string.
//  So, a greedy search for "a.*b" in "aaaaaaaaabbbb" will match the whole string. A nongreedy search will match up to the first b.




// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h1*>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);



// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
//
// let reCriminals = /c+/i; // Change this line
//
// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);


//
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = rickyAndCal.match(calRegex);
//
//
//
// console.log(result);


//
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = caboose.match(lastRegex);
//

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

//
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;


// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/g; // Change this line
// let result = numString.match(numRegex).length;


// let numString = "Your sandwich will be $5.00";
// let noNumRegex = /\D/g; // Change this line
// let result = numString.match(noNumRegex).length;


// let username = "JACK";
// let userCheck = /[A-Za-z]+(\w+|\d)$/; // Change this line
// let result = userCheck.test(username);
//


//Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);


//change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);


//Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".

// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\sno/i; // Change this line
// let result = ohRegex.test(ohStr);


//Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.


// let haStr = "Hazzzzah";
// let haRegex = /haz{3,}zah/i; // Change this line
// let result = haRegex.test(haStr);


 //Change the regex timRegex to match the word "Timber" only when it has four letter m's.

 // let timStr = "Timmmmber";
 // let timRegex = /tim{4}ber/i; // Change this line
 // let result =  timStr.match(timRegex);
 //



 //Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.


 // let favWord = "favorite";
 // let favRegex = /favou?rite/; // Change this line
 // let result = favRegex.test(favWord);


//A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for
//between 3 and 6 characters and at least one number:

 // let password = "abc123";
 // let checkPass = /(?=\w{3,6})(?=\D*\d)/;
 // checkPass.test(password); // Returns true


 //Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
 // let sampleWord = "astronaut";
 // let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
 // let result = pwRegex.test(sampleWord);



//Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
// let result = repeatNum.match(reRegex);


//Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".

//
// let huhText = "This sandwich is good.";
// let fixRegex = /(good)/; // Change this line
// let replaceText = "okey-dokey"; // Change this line
// let result = huhText.replace(fixRegex, replaceText);


//Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ''); // Change this line
//
// console.log(result);



// The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately,
// it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop.
// Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
// function zeroArray(m, n) {
// //   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//      row = [m[i]];
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }
//
// let matrix = zeroArray(3, 2);
// console.log(matrix);


//
// We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's elements. Modify the function, using
// splice(), so that it returns a value of 10.

// function sumOfTen(arr) {
//   // change code below this line
//     arr.splice(1, 2);
//   // change code above this line
//   return arr.reduce((a, b) => a + b);
// }
//
// // do not change code below this line
// console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the
// first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.



// function htmlColorNames(arr) {
//   // change code below this line
//     arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
//   // change code above this line
//   return arr;
// }
//
// // do not change code below this line
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));






// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the
// argument array and return a new array that contains the elements 'warm' and 'sunny'.

// function forecast(arr) {
//   // change code below this line
//   let newArr = arr.slice(2, 4);
//   return newArr;
// }
//
// // do not change code below this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
// The function is supposed to return a new array made up of num copies of arr.
// We have done most of the work for you, but it doesn't work quite right yet.
// Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line
//
//       newArr.push([...arr]);
//
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }
//
// // change code here to test different cases:
// console.log(copyMachine([true, false, true], 2));





// We have defined a function spreadOut that returns the variable sentence, modify the function using the spread operator so that it returns the array
// ['learning', 'to', 'code', 'is', 'fun'].



// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
//   return sentence;
// }
//
// // do not change code below this line
// console.log(spreadOut());




// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck,
//  that takes an array and an element as arguments.
//  Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

// function quickCheck(arr, elem) {
//   // change code below this line
//      if(arr.indexOf(elem) === -1) {
//        return false;
//      }
//      return true;
//   // change code above this line
// }
//
// // change code here to test different cases:
// console.log(quickCheck(['mushrooms','squash', 'onions', 'shallots'], 'mushrooms'));



// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
// elem represents an element that may or may not be present on one or more of the arrays nested within arr.
// Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr
// containing elem has been removed.

//
//
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line
//    for (var i = 0; i < arr.length; i++) {
//      if (arr[i].indexOf(elem) === -1) {
//       newArr.push(arr[i]);
//      }
//
//    }
//   // change code above this line
//   return newArr;
// }
//
// // change code here to test different cases:
// console.log(filteredArray([[2, 2, 1], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//

// reset item in the array
// let newArr = [[2, 2, 1], [1, 6, 3], [3, 13, 26], [19, 3, 9]];
//
//
// newArr[0]= [3, 5, 7];
//
// console.log(newArr);



// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans
// for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1).
// Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include
//  the string 'deepest'.


// let myNestedArray = [
//   // change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   [
//    ['concat', false, true, 'spread', 'array', 'deep'],
//   [
//     ['mutate', 1327.98, 'splice', 'slice', 'push', 'deeper'],
//     [
//       ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', 'deepest']
//     ]
//   ]
//   ],
//   // change code above this line
// ];
//


//
// console.log(myNestedArray);




// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };
//
// // change code below this line
//   foods['bananas'] = 13;
//   foods['grapes'] = 35;
//   foods['strawberries'] = 27;
// // change code above this line
//
// console.log(foods);



//
// Here we've defined an object, userActivity, which includes another object nested within it.
// You can modify properties on this nested object in the same way you modified properties in the last challenge.
//  Set the value of the online key to 45.
// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };
//
// // change code below this line
//   userActivity["data"]['online'] = 45;
// // change code above this line
//
// console.log(userActivity);


// We've defined a function, checkInventory, which receives a scanned item as an argument.
// Return the current value of the scannedItem key in the foods object.
// You can assume that only valid keys will be provided as an argument to checkInventory.


// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// // do not change code above this line
//
// function checkInventory(scannedItem) {
//   // change code below this line
//   return foods[scannedItem];
// }
//
// // change code below this line to test different cases:
// console.log(checkInventory("apples"));


//Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.


//
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
//
// // change code below this line
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
// // change code above this line
//
// console.log(foods);




// We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument.
// Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys,
//  and false otherwise.
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
//
//
// function isEveryoneHere(obj) {
//   // change code below this line
//      // if(users.hasOwnProperty('Alan','Jeff','Sarah','Ryan'))
//     if ('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users) {
//       return true;
//     }
//     return false;
//   // change code above this line
// }
//
// console.log(isEveryoneHere(users));


// We've defined a function, countOnline; use a for...in statement within this function to loop
// through the users in the users object and return the number of users whose online property is set to true.
//
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
// function countOnline(obj) {
//   // change code below this line
//
//   let count = 0;
//   for(let user in obj){
//       if (obj[user]['online']) {
//        count++;
//       }
//     }
//     return count;
//   // change code above this line
// }
//
// console.log(countOnline(users));




//Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
//
//
//
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
// function getArrayOfUsers(obj) {
//   // change code below this line
//     return Object.keys(obj);
//   // change code above this line
// }
//
// console.log(getArrayOfUsers(users));



// Take a look at the object we've provided in the code editor. The user object contains three keys.
//  The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures.
//  We've started writing a function addFriend.
//  Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.
//  data.friends and returns that array.




// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };
//
//


// take a look at the object we've provided in the code editor.
// The user object contains three keys. The data key contains five keys, one of which contains an array of friends.
// From this, you can see how flexible objects are as data structures. We've started writing a function addFriend.
// Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends
// and returns that array.
//
// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };
//
// function addFriend(userObj, friend) {
//   // change code below this line
//    let newArray = userObj['data']['friends'];
//     newArray.push(friend);
//     return newArray;
//   // change code above this line
// }
//
// console.log(addFriend(user, 'Pete'));




// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32


// function convertToF(celsius) {
//   let fahrenheit = celsius * 9.0 / 5 + 32;
//   return fahrenheit;
// }
//
// convertToF(-30);


// Reverse the provided string.

// function reverseString(str) {
//  const reverses = str.split('').reverse().join("");
//   return reverses;
//
// }
//
// reverseString("hello");



// //Return the factorial of the provided integer.

// 5*factorialize(4)
// 5*4*factorialize(3)
// 5*4*3factorialize(2)
// 5*4*3*2factorialize(1)
// 5*4*3*2*1
// 5*4*3*2
// 5*4*6
// 5*24
// 120

//always the multiply starts from right to left

// function factorialize(num) {
//   let factorialNum = num === 1 ? 1 :
//    factorialize(num -1) * num;
//   return factorialNum;
// }
//
//
// console.log(factorialize(5));
//
//
//
//
// //Return the length of the longest word in the provided sentence.
// function findLongestWordLength(str) {
//   let array = str.split(' ');
//   array.sort((a, b) => a.length - b.length);
//   let newArr = array.slice(-1).pop();
//   return newArr.length;
// }
//
//
//
// findLongestWordLength("The quick brown fox jumped over the lazy dog");



//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.


//
// function largestOfFour(arr) {
//   // You can do this!
//   const newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//      arr[i].sort((a, b) => a - b);
//      let lastArr = arr[i].slice(-1).shift();
//      newArr.push(lastArr);
//   }
//   return newArr;
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));





//Check if a string (first argument, str) ends with the given target string (second argument, target).

// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//   const lastlitters = target.length;
//   const lastItem = str.slice(-lastlitters);
//   return (lastItem === target ? true : false);
// }
//
// console.log(confirmEnding("Congratulation", "on"));




// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.


// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   let newStr= "";
//   for(let i = 0; i < num; i++){
//       num === 0 ? " " : newStr+= str;
//   }
//   return newStr;
// }
//
// console.log(repeatStringNumTimes("abc", 0));




//Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.




// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//
//   let truncatedStr = str.slice(0, num);
//    return (
//      num === str.length ? str :  num === str.length + 2 ? str : truncatedStr+="..."
//    );
//
// }
//
//
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));






// Create a function that looks through an array (first argument) and returns the first element in
// the array that passes a truth test (second argument). If no element passes the test, return undefined.



//
// function findElement(arr, func) {
//   let num = arr.filter(func);
//   return arr.indexOf(num[0]) ? num[0] : undefined;
// }
//
// console.log(findElement([1, 3, 5, 1, 9, 7], num => num % 2 === 0));






//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.


// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   return typeof(bool) === 'boolean' ? true : false;
// }
//
// console.log(booWho(null));


//
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


// function titleCase(str) {
//   let newArr =[];
//  str = str.split(' ');
//  for (var i = 0; i < str.length; i++) {
//    let array = str[i].charAt().toUpperCase().concat(str[i].slice(1).toLowerCase());
//    newArr.push(array);
//  }
//
//   return newArr.join(' ');
// }
//
// console.log(titleCase("I'm a little tea pot"));



//You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
//The second array should remain the same after the function runs.


// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let newArr2 = arr2.slice();
//    newArr2.splice(n, 0, ...arr1);
//   return newArr2;
// }
//
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.


// var x = [1, null, NaN, 2, undefined];
// const newX = x.filter(el => Boolean(el));
//
// console.log(newX);




// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

//
// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   arr.push(num);
//   arr.sort((a, b) => a - b);
//
//   return arr.indexOf(num);
// }
//
// console.log(getIndexToIns([3, 10, 5], 3));




// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


//Comparing each letter inside the second arra with all letters inside first array one syllable at the time.
// Return the maches letter
// if the maches equal to the second array return true
//using regex to remove comma and duplicated num



// function mutation(arr) {
//     const array2 = arr[1].toLowerCase().split('');
//     const array1 = arr[0].toLowerCase().split('');
//
//     const mapedArry = array1.map(el => el);
//     let newArr = [];
//     for (var i = 0; i <  array2.length; i++) {
//       const filteredArray = mapedArry.filter(el => !el.indexOf(array2[i]));
//       newArr.push(filteredArray);
//     }
//     const regex = /[,]+[\w]/g;
//     const newArr2 = newArr.join('').replace(regex, '').trim();
//     return (newArr2 === arr[1].toLowerCase() ? true : false);
// }
//
// console.log(mutation(["hello", "Hello"]));



//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


//changing the content of original array by removing the items accordinf to size number
//comparing the number of the item in the array with the size after modifing
//push the orginal array after being modified to the newArr
//
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//    let newArr = [arr.splice(0, size)];
//    for (let i = 0; i < arr.length; i++) {
//      if (arr.length > size) {
//         newArr.push(arr.splice(0, size));
//      }
//    }
//
//      newArr.push(arr.splice(0));
//
//      return newArr;
// }
//
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//

//
//
// function Dog(name) {
//   this.name = name;
// }
//
// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 2,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };
//
//
//
// console.log(Dog.describe);



// function Bird(name) {
//   this.name = name;
// }
//
// let duck = new Bird("Donald");


//
// let x = 3;
// let y = ++x;
//
// console.log(y+x);
//
// let arr = [2, 3, 2, 5];
//
// for (var i = 0; i < arr.length -1; i++) {
//   console.log(arr[0]+=arr[i + 1]);
// }
//
//


//
// var x = NaN;
// var y = 205;
//
// var z = x + y;
//
// console.log(z);
//
//
// let a  = 8;
// let b = 5;
//
// console.log(a**(a-b) + 1);
//
//
// let str = "SoloLearn";
// console.log(str.match(/o/g).length);
//



// function palindrome(str) {
//   // Good luck!
//   let newStr = str.split('').reverse().join('').toLowerCase();
//   console.log(str.toLowerCase());
//   return true;
// }
//
//
//
// palindrome("A man, a plan, a canal. Panama");



//Use Object.create to make two instances of Animal named duck and beagle.
// function Animal() { }
//
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
//
// // Add your code below this line
//
// let duck = Object.create(Animal.prototype); // Change this line
// let beagle= Object.create(Animal.prototype); // Change this line
//
// duck.eat(); // Should print "nom nom nom"
// beagle.eat(); // Should print "nom nom nom"




//Modify the code so that instances of Dog inherit from Animal.
// function Animal() { }
//
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
//
// function Dog() { }
//
// // Add your code below this line
//
// Dog.prototype = Object.create(Animal.prototype);
// let beagle = new Dog();
// beagle.eat();  // Should print "nom nom nom"




// Fix the code so duck.constructor and beagle.constructor return their respective constructors.


// function Animal() { }
// function Bird() { }
// function Dog() { }
//
// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);
//
// // Add your code below this line
//
// Bird.prototype.constructor = Bird;
//Dog.prototype.constructor = Dog;
// let duck = new Bird();
// let beagle = new Dog();








//Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
//Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.




// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };
//
// function Dog() { }
//
// // Add your code below this line
//
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function() {
//     return "Woof!";
// }
// Dog.prototype.constructor = Dog;
// // Add your code above this line
//
// let beagle = new Dog();
//
// beagle.eat(); // Should print "nom nom nom"
// beagle.bark(); // Should print "Woof!"
// console.log(beagle.bark());




//Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."
// function Bird() { }
//
// Bird.prototype.fly = function() { return "I am flying!"; };
//
// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;
//
// // Add your code below this line
//
// Penguin.prototype.fly = function() {
//     return "Alas, this is a flightless bird.";
// }
// // Add your code above this line
//
// let penguin = new Penguin();
// console.log(penguin.fly());




//Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };
//
// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };
//
// // Add your code below this line
//
//
// let glideMixin = function(obj) {
//    obj.glide = function() {
//       return "Gliding, wooosh!";
//    }
// }
//
//
// console.log(glideMixin(bird));
// glideMixin(boat);




//Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight.
// function Bird() {
//   let weight = 15;
//   this.getWeight = function() {
//     return weight;
//   }
// }





//Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
// (function() {
//   console.log("A cozy nest is ready");
// })();






//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

//
// let funModule = ( function() {
//   return {
//     isCuteMixin: function(obj) {
//      obj.isCute = function() {
//     return true;
//   };
// },
//
//
// singMixin: function(obj) {
//     obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// }
//   }
// }
// )();





//In the code editor, the prepareTea and getTea functions are already defined for you.
//Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

//
// /**
//  * A long process to prepare tea.
//  * @return {string} A cup of tea.
//  **/
// const prepareTea = () => 'greenTea';
//
// /**
//  * Get given number of cups of tea.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = (numOfCups) => {
//   const teaCups = [];
//
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//
//   return teaCups;
// };
//
// // Add your code below this line
//
// const tea4TeamFCC = getTea(40); // :)
//
// // Add your code above this line
//
// console.log(tea4TeamFCC);




//

//
// Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
//  You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how
//to filter an array.
//
// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value,
// are called first class functions. In JavaScript, all functions are first class functions.
//
// The functions that take a function as an argument, or return a function as a return value are called higher order functions.
//
// When the functions are passed in to another function or returned from another function,
// then those functions which gets passed in or returned can be called a lambda.
//
//
// Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.
// Note that the getTea function has been modified so it now takes a function as the first argument.


// /**
//  * A long process to prepare green tea.
//  * @return {string} A cup of green tea.
//  **/
// const prepareGreenTea = () => 'greenTea';
//
// /**
//  * A long process to prepare black tea.
//  * @return {string} A cup of black tea.
//  **/
// const prepareBlackTea = () => 'blackTea';
//
// /**
//  * Get given number of cups of tea.
//  * @param {function():string} prepareTea The type of tea preparing function.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];
//
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//
//   return teaCups;
// };
//
// // Add your code below this line
//
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :)
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :)
//
// // Add your code above this line
//
// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );










// let a = "text".split('e');
// console.log(a);




// (function(n){
//   console.log("hello" + n);
// })(1);



// let str = "abc";
// str.length= 2;
// console.log(str.length);



// let a = 0;
//
// for (var i = 7; i >0; i--) {
//   do {
//     ++a;
//   } while (a<0);
// }
//
//
// console.log(a);




//
// let a  = (function func(num){
//   if (num === 0) return 1;
//   return 1 + func(num -1);
// })(6);
//
//
// console.log(a);




// let num = new Map();
// num.set('1", one).set('2", two);
// console.log(num.has("one"));

// console.log(isNaN(5+5));



// Run the code in the editor. It's using a method that has side effects in the program, causing incorrect output.
// The final list of open tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix',
//  'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the output will be slightly different.



// tabs is an array of titles of each site open within the window
// var Window = function(tabs) {
//   this.tabs = tabs; // we keep a record of the array inside the object
// };
//
// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };
//
// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab'); // let's open a new tab for now
//   return this;
// };
//
// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
//   var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
//
//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
//   return this;
//  };
//
// // Let's create three browser windows
// var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
//
// // Now perform the tab opening, closing, and other operations
// var finalTabs = socialWindow
//                     .tabOpen() // Open a new tab for cat memes
//                     .join(videoWindow.tabClose()) // Close third tab in video window, and join
//                     .join(workWindow.tabClose(1).tabOpen());
//
//
// console.log(finalTabs.tabs);




// Avoid Mutations and Side Effects Using Functional Programming
// Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.



// // the global variable
// var fixedValue = 4;
//
// function incrementer () {
//   // Add your code below this line
//   var fixedValue = 5;
//   return fixedValue;
//   // Add your code above this line
// }
//
// var newValue = incrementer(); // Should equal 5
// console.log(newValue);
// console.log(fixedValue); // Should print 4




// Pass Arguments to Avoid External Dependence in a Function
// et's update the incrementer function to clearly declare its dependencies.
//
// Write the incrementer function so it takes an argument, and then increases the value by one.


// the global variable
// var fixedValue = 4;
//
// // Add your code below this line
// function incrementer (val) {
//    return val + 1;
//   // Add your code above this line
// }
//
// var newValue = incrementer(fixedValue); // Should equal 5
// console.log(newValue)
// console.log(fixedValue); // Should print 4




// Refactor (rewrite) the code so the global array bookList is not changed inside either function.
// The add function should add the given bookName to the end of an array.
// The remove function should remove the given bookName from an array. Both functions should return an array,
//  and any new parameters should be added before the bookName one.
// the global variable
// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
//
// /* This function should add a book to the list and return the list */
// // New parameters should come before the bookName one
//
// // Add your code below this line
// function add (arr, bookName) {
//   let newArr = arr.slice(0);
//     newArr.push(bookName);
//     return newArr;
//   // Add your code above this line
// }
//
// /* This function should remove a book from the list and return the list */
// // New parameters should come before the bookName one
//
// // Add your code below this line
// function remove (arr, bookName) {
//
//   let newArr = arr.slice(0);
//
//   if (bookList.indexOf(bookName) >= 0) {
//
//     return newArr.filter(item => item.indexOf(bookName));
//     // Add your code above this line
//     }
// }
//
// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
//
// console.log(newerBookList)
// //console.log(bookList);



// The watchList array holds objects with information on several movies.
// Use map to pull the title and rating from watchList and save the new array in the rating variable.
// The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.
//
// The watchList variable should not change.
// Your code should not use a for loop.
// Your code should use the map method.
// rating should equal [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}].


// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
//
// var rating = watchList.map(item =>
// ({"title":item.Title, "rating":item.imdbRating})
// );
// console.log(rating);






//Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.

// the global Array
// var s = [23, 65, 98, 5];
//
// Array.prototype.myMap = function(callback){
//   var newArray = [];
//   // Add your code below this line
//     this.forEach(item => newArray.push(callback(item)));
//   // Add your code above this line
//   return newArray;
// };
//
// var new_s = s.myMap(function(item){
//   return item * 2;
// });
//
//
// console.log(new_s);




// The variable watchList holds an array of objects with information on several movies.
// Use a combination of filter and map to return a new array of objects with only title
// and rating keys, but where imdbRating is greater than or equal to 8.0.
// Note that the rating values are saved as strings in the object and you may want to
// onvert them into numbers to perform mathematical operations on them.


//the global variable
// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
//
// // Add your code below this line
//
// var filteredList = watchList.map(item => ({
//   "title":item.Title, "rating":item.imdbRating
// })).filter(el => parseFloat(el.rating) >= 8);
// // Add your code above this line
//
// console.log(filteredList);




// Implement the filter Method on a Prototype
// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
// You may use a for loop or the Array.prototype.forEach() method.



// the global Array
// var s = [23, 65, 98, 5];
//
// Array.prototype.myFilter = function(callback){
//   var newArray = [];
//   // Add your code below this line
//    this.forEach((item) => {
//        if (callback(item) === true) {
//          return newArray.push(item)
//        }
//    });
//   // Add your code above this line
//   return newArray;
//
// };
//
// var new_s = s.myFilter(function(item){
//   return item % 2 === 1;
// });
//
//
// console.log(new_s);



// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices.
// The function should return an array.
// function sliceArray(anim, beginSlice, endSlice) {
//   // Add your code below this line
//   return anim.slice(beginSlice, endSlice);
//   // Add your code above this line
// }
// var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// sliceArray(inputAnim, 1, 3);
//
// console.log(sliceArray(inputAnim, 1, 3));





// Remove Elements from an Array Using slice Instead of splice
// Rewrite the function nonMutatingSplice by using slice instead of splice.
// It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
//
// Do not mutate the original array provided to the function.




// function nonMutatingSplice(cities) {
//   // Add your code below this line
//     return cities.slice(0, 3);
//   // Add your code above this line
// }
// var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// const newCitiesInout = nonMutatingSplice(inputCities);
//
//
//
// console.log(newCitiesInout);



// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.
// The function should return the concatenated array.


// function nonMutatingConcat(original, attach) {
//   // Add your code below this line
//    return original.concat(attach)
//   // Add your code above this line
// }
// var first = [1, 2, 3];
// var second = [4, 5];
// nonMutatingConcat(first, second);
//
// console.log(nonMutatingConcat(first, second));


//
// Add Elements to the End of an Array Using concat Instead of push
// Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
// function nonMutatingPush(original, newItem) {
//   // Add your code below this line
//   return original.concat(newItem);
//
//   // Add your code above this line
// }
// var first = [1, 2, 3];
// var second = [4, 5];
// nonMutatingPush(first, second);
//
// console.log(nonMutatingPush(first, second))






// Use the reduce Method to Analyze Data
// The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
//
// The watchList variable should not change.
// Your code should use the reduce method.
// The averageRating should equal 8.675.
// Your code should not use a for loop.




// the global variable
// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
//
// // Add your code below this line
// const filteredWatchList = watchList.map(item => ({
//   "Director":item.Director, "imdbRating":parseFloat(item.imdbRating)
// })).filter(el => el.Director === "Christopher Nolan");
// const averageRating = filteredWatchList.reduce((acc, curr) => acc + curr.imdbRating / filteredWatchList.length, 0);
//
// // Add your code above this line
//
// console.log(averageRating);



//Return a Sorted Array Without Changing the Original Array
// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
// The function should return a new array, and not mutate the globalArray variable.
// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
//     const newArr = [];
//     const sortArr = globalArray.slice(0).sort();
//     return newArr.concat(sortArr);
//   // Add your code above this line
// }
// nonMutatingSort(globalArray);
//
//
// console.log(nonMutatingSort(globalArray));





//Split a String into an Array Using the split Method
// Use the split method inside the splitify function to split str into an array of words.
// The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.


// function splitify(str) {
//   // Add your code below this line
//     return str.split(/\W/);
//   // Add your code above this line
// }
// splitify("Hello World,I-am code");
//
//
// console.log(splitify("Hello World,I-am code"))


// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
// The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars".
// For this challenge, do not use the replace method.

// function sentensify(str) {
//   // Add your code below this line
//   const regEx = /[-.,]/g;
//   const newArr = str.split(regEx);
//   return newArr.join(' ');
//   // Add your code above this line
// }
// sentensify("May-the-force-be-with-you")
//
// console.log(sentensify("May-the-force-be-with-you"));


//Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
//You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

// the global variable
// var globalTitle = " Winter Is  Coming";
//
// // Add your code below this line
// function urlSlug(title) {
//   const regEx = /\s+/g;
//   const hyphenatedString = title.trim().split(regEx).join('-').toLowerCase();
//   return hyphenatedString;
// }
// // Add your code above this line
//
// var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
//
// console.log(globalTitle);
// console.log(winterComing);


//Use the every Method to Check that Every Element in an Array Meets a Criteria
//Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.


//
// function checkPositive(arr) {
//   // Add your code below this line
//    return arr.every(el => el > 0)
//   // Add your code above this line
// }
// checkPositive([1, 2, 3, -4, 5]);
//
// console.log(checkPositive([1, 2, 3, 4, 5]));




//Introduction to Currying and Partial Application
//Fill in the body of the add function so it uses currying to add parameters x, y, and z.
// function add(x) {
//   // Add your code below this line
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       }
//     }
//   // Add your code above this line
// }
// add(10)(20)(30);
//
// console.log(add(10)(20)(30))






//You are given a two-digit integer n. Return the sum of its digits.


// const addTwoDigits = (n)=>  {
//   const addTwoDigi = n.toString().split('')
//                     .map(el => parseInt(el)).
//                     reduce((acc, curr) => acc + curr);
//   return addTwoDigi;
// }
//
// console.log(addTwoDigits(26));



// Given an integer n, return the largest number that contains exactly n digits.

//
// function largestNumber(n) {
//   // You can do this!
//   const newArr = [];
//
//   for (var i = 0; i < n; i++) {
//     const numNine = [9];
//     newArr.push(numNine);
//   }
//   const joinArr = newArr.join('');
//
//   return parseInt(joinArr);
// }
//
//
// console.log(largestNumber(3));


// for (var i = 0; i < n; i++) {
//    let lastArr = arr[0].slice(0).shift();
//    newArr.push(lastArr);
// }
// return newArr;




// function candies(n, m) {
//    if (n > m) {
//      return 0;
//    }
//    const remainder =  m % n;
//    const candies = m - remainder;
//    return candies;
// }
//
//
// candies(3,33);


//Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.



// function sumAll(arr) {
//   const newArr = arr.sort((a, b) => a - b);
//   const list = [];
//   const upper = newArr[1];
//   const lower = newArr[0];
//   for (var i = lower; i < upper+1; i++) {
//       list.push(i);
//   }
//   return list.reduce((acc, curr) => acc + curr);
// }
//
// console.log(sumAll([10, 5]));




//
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.



// function diffArray(arr1, arr2) {
//   const newArr = arr1.concat(arr2);
//   // change code below this line
//   let filteredArray = newArr.filter((el, i, arr) => {
//       let beforeIndex = arr.slice(0, i);
//       let afterIndex = arr.slice(i+1);
//       if (beforeIndex.includes(el) === false && afterIndex.includes(el) === false) {
//              return el;
//       }
//   });
//   // change code above this line
//   return filteredArray;
// }

//
// function diffArray(arr1, arr2) {
//   const newArr = arr1.concat(arr2);
//   // change code below this line
//   let filteredArray = newArr.filter((el, i, arr) => arr.indexOf(el) === i);
//   // change code above this line
//   return filteredArray;
// }

// change code here to test different cases:

//
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
//Intermediate Algorithm Scripting: Seek and Destroy


// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

// let filteredArray = newArr.filter((el, i, arr) => {
//       let beforeIndex = arr.slice(0, i);
//       let afterIndex = arr.slice(i+1);
//       if (beforeIndex.includes(el) === false && afterIndex.includes(el) === false) {
//              return el;
//       }
//   });
// function destroyer(arr1) {
//   // Remove all the values
//     const restOfArg = [...arguments].slice(1);
//
//     let filteredArray = arr1.map(item => {
//       if (restOfArg.includes(item) === false) {
//         return item;
//       }
//     });
//
//    return filteredArray.filter(el => Boolean(el));
// }
//
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53));





// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have
//  matching name and value pairs (second argument). Each name and value pair of the source object has to be present in
//  the object from the collection if it is to be included in the returned array.

//
// function whatIsInAName(collection, source) {
//   // What's in a name?
//
//   // Only change code below this line
//   const objtsKeys = Object.keys(source);
//     return collection.filter(item => {
//       return objtsKeys.every(key => {
//          return item[key] === source[key];
//       });
//   });
//   // Only change code above this line
// }
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));






//Intermediate Algorithm Scripting: Spinal Tap Case
//
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".

// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   let newStr;
//   const regEx1 = /([a-z])([A-Z])/g;
//   const regEx2 = /([A-Za-z])\s|_/g;
//    newStr =  str.trim().replace(regEx1, '$1-$2').replace(regEx2, '$1-');
//   return newStr.toLowerCase();
// }
//
//
// console.log(spinalCase("AllThe-small Things"));



//Intermediate Algorithm Scripting: Pig Latin


// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

// function translatePigLatin(str) {
//   const regEx2 = /^[^aeoia]+/gi;// matches all consonant  characters in string
//   const regEx1 = /^[aeoia]/i;// maches only vowel character in the string
//   const ayStr = "ay";
//   const wayStr = "way";
//
//   const newArr = str.split('');
//   const newStr = str.slice("");
//   const firstChar = newArr.slice(0, 1).join('');
//   const restOfArr = newArr.slice(1, newArr.length).join('');
//   const secondChar = newArr.slice(1, 2).join('');
//
//   if (regEx2.test(str)) {
//     const consonantChar = newStr.match(regEx2).join('');// the charachter maches the regEx2
//     const restOfConsonantChar = newArr.slice(consonantChar.length, newArr.length).join('');
//      return restOfConsonantChar.concat(consonantChar).concat(ayStr);
//   }
//   if (regEx1.test(str)) {
//     return str.concat(wayStr).toLowerCase();
//   }
//
//   return restOfArr.concat(firstChar).concat(ayStr);
// }
//
// console.log(translatePigLatin("paragraphs"));


//Intermediate Algorithm Scripting: Search and Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

// function myReplace(str, before, after) {
//   // Find the word corresponding to the second argument using indexOf() or includes
//   // or replace()
//   let regEx = /^[A-Z]/g;
//   const allLetters = after.slice(0, 1).toUpperCase() + after.slice(1);
//   if (regEx.test(before)) {
//      return str.replace(before, allLetters);
//   }
//
//   return str.replace(before, after);
// }
//  console.log(myReplace("Let us go to the store", "store", "mall"));





//Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

// function pairElement(str) {
//
//   const orginalStrand = ["TA", "AT", "CG", "GC"];
//   return str.split('').map(el => {
//     const dnaParing = orginalStrand.filter(item => {
//       if (item[0] === el) {
//         return item;
//       }
//     });
//     return dnaParing.join('').split('');
//   });
//
//   //return dnaPairArr;
// }
// console.log(pairElement("CTCTA"));





// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
//get the last letter of the array letters
//then get compair that last letter with alfabet array
// if the letter is found get the index of the letter inside alfabet;
//then copy the alfabet array until the index of the founded letter comparig with str letter and return the letter which doesnt mach!
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

// function fearNotLetter(str) {
//
//   let checkLetter = 0;
//   const alfabet ="abcdefghijklmnopqrstuvwxyz".split('');
//   const letters = str.split('');
//   const firstLetter = letters.slice(0, 1).join('');
//   const lastLetter = letters.slice(-1).join('');
//   const indexOfFirstLetter = alfabet.indexOf(firstLetter);
//   const indexOflastLetter = alfabet.indexOf(lastLetter);
//   const getCopyOfArr = alfabet.slice(indexOfFirstLetter, indexOflastLetter + 1);
//   const newArr = getCopyOfArr.concat(letters);
//   if (getCopyOfArr.length === letters.length) {
//     return undefined;
//   }
//     return newArr.filter((el, i, arr) => {
//         let beforeIndex = arr.slice(0, i);
//         let afterIndex = arr.slice(i+1);
//         if (beforeIndex.includes(el) === false && afterIndex.includes(el) === false) {
//               checkLetter+=1;
//                return el;
//         }
//   }).join('');
//
// }
// console.log(fearNotLetter("stvwx"));


// Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// So basically what this function going to check element's index for the first element which the index is 0 the indexOf going to check
// if the elments index is exactly the same index in the array? if yes will keep it for the number 2 wich is duplicted so the index of the
// first one is 2, and the index of the second one is 4 when indexOf checks the index of second two element but because we have number 2
// previously the indexOf will check that two because it is same number but the index is different then the condition is false
// and 2 is not going be included
// function uniteUnique(arr) {
//   const newArr = [...arguments];
//     return newArr.reduce((a, b) => {
//      return a.concat(b);
//    }).filter((el, i, arr) => arr.indexOf(el) === i);
//   return newArr;
// }
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));




// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


//
// function convertHTML(str) {
//   // &colon;&rpar;
//   const entitiesArr = {
//       "®": "&reg;",
//       "©": "&copy;",
//       "<": "&lt;",
//       ">" : "&gt;",
//       "&" : "&amp;",
//       "\"" :"&quot;",
//       "\'" : "&apos;"
//     };
//
//   const machedKey =  str.split('').map(key => {
//     return entitiesArr[key] || key;
//   }).join('');
//
//   return machedKey;
// }
// console.log(convertHTML("Dolce & Gabbana"));





// 5*factorialize(4)
// 5*4*factorialize(3)
// 5*4*3factorialize(2)
// 5*4*3*2factorialize(1)
// 5*4*3*2*1
// 5*4*3*2
// 5*4*6
// 5*24
// 120

// first run ((5 * 4) - 4) = 16
//((4 * 4) - 4) = 12
//((3 * 4) - 4) = 8
//((2 * 4) - 4) = 4
// 1
// function  shapeArea(n) {
//   let interstPolygon = n === 1 ? 1 :
//   shapeArea(n - 1) + (n - 1) * 4;
//
//   return interstPolygon;
// }
//
//
//
// console.log(shapeArea(5));
//
//
//
//
// const x = function(n) {
//     var area = 1;
//     for (var i = 1; i <= n; i++) {
//         area += ((i * 4) - 4);
//     }
//     console.log(area);
//     return area;
// }
//
// x(5);






// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// What my solution should achieve:
//
// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
// Let’s first take a look at what the Fibonacci Sequence is all about:
//
// The Fibonacci Sequence a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. It starts with 0 and 1, and the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. Based on this information and the provided starter code, I can create the following:
//
// function sumFibs(num) {
//     var a = 0,
//         b = 1,
//         f = 1,
//         sum = 0;
// }
// where a and b are the two preceding numbers, f is the fibonacci number, and sum will be the sum of all the odd fibonacci numbers. Next I have to set the condition to determine whether a fibonacci number is odd, and if it is odd, add it to sum. There is no else here. I use a while loop because I don’t know exactly how long f will be <= num. In other words, I don’t necessarily know the exact number of iterations involved over num. The while loop is followed by an if statement which sets the condition for determining whether f is odd, and if f is odd, f should be added to sum:
//
// function sumFibs(num) {
//     var a = 0,
//         b = 1,
//         f = 1,
//         sum = 0;
//     while (f <= num) {
//         if (f % 2 === 1) {
//             sum += f;
//         }
// Use of the modulo in the if statement is what determines whether f is odd. If f mod 2 results in a remainder of 1, f is odd. If f mod 2 results in a remainder of 0, then f is even. Test it out for yourself in the JS Console, or you can also test it out in the Modulo Calculator!
//
// This is all well and good, but how was I going to get this while loop to advance? Since each fibonacci number is derived from the addition of the previous two numbers in the sequence, advancement of the while loop should start with the equation for the fibonacci number:
//
// function sumFibs(num) {
//     var a = 0,
//         b = 1,
//         f = 1,
//         sum = 0;
//     while (f <= num) {
//         if (f % 2 === 1) {
//             sum += f;
//         }
//               f = a + b;
//      }
// Once I stated the current fibonacci number from the addition of the first two numbers previous to the fibonacci number, I had to somehow advance the sequence so that a became b, and b became f. In other words, the new a was the old b, and the new b was the old f. This is equivalent to f being the sum of the previous two numbers in the sequence.
//
// function sumFibs(num) {
//     var a = 0,
//         b = 1,
//         f = 1,
//         sum = 0;
//     while (f <= num) {
//         if (f % 2 === 1) {
//             sum += f;
//         }
//             f = a + b;
//             a = b;
//             b = f;
//   }
// Let’s see how this actually works:
//
// For the first fibonacci number, we have var a = 0, b = 1, and f = 1;
//
// Then we have while (1 <= 4) {
//
// if (1 % 2 === 1) {
// sum += f;
// Since 1 % 2 has a remainder of 1, that means that f is odd. f is added to sum.
// f = 0 + 1;
// a = b which means a = 1;
// b = f which means that b = 1;
// So f is still < 4, so we continue the loop.
// f % 2 === 1 still holds true, and f is added to sum. Now sum = 2.
// f = a + b which means that f = 1 + 1;
// a = b which means that a = 1;
// b = f which means that b = 2.
// f is still < 4, so the while loop continues.
// f % 2 === 1 does not coerce to true this time. Now f is 2, so 2 % 2 === 0. This means that f is even, and it does not get added to sum.
// f = a + b which means that f = 1 + 2.
// a = b which means that a = 2.
// b = f which means that b = 3.
// f is still < 4, so the loop continues.
// f % 2 === 1 is true, so f is added to sum. Now sum = 5.
// f = a + b which means that f = 2 + 3.
// a = b which means that a = 3.
// b = f which means that b = 5.
// f is now > 4, so the while loop stops.
// But at this point sum has to be returned so that the body of the sumFibs() function can be accessed outside of its local scope
//when invoked.
//  sum is returned at the end of the sumFibs() function right before its closing curly bracket.



// function sumFibs(n) {
//   let a = 0,
//       b = 1,
//       f = 1,
//       sum = 0;
//
//   while (f <= n) {
//     if (f % 2 === 1) {
//       sum += f;
//     }
//     f = a + b;
//         a = b;
//         b = f;
//   }
//   return sum;
// }
//
//
// console.log(sumFibs(1000));




// Intermediate Algorithm Scripting: Sum All Primes
//
// function sumPrimes(num) {
//   let sum = [];
//   for (let prime = 0; prime <= num; prime++) {
//     for (let div = 2; div <= prime; div++) {
//
//        if (div === prime) {
//            sum.push(prime);
//            console.log(div);
//            console.log(prime);
//        }
//        if (prime % div=== 0) {
//          break;
//        }
//     }
//   }
//   return sum.reduce((a, b) => a + b);
// }
//
// console.log(sumPrimes(10));

// When the funfction first runs will go through condtion one by one:
// num = 10
// primes empty array
// filteredArr empty array
// i undefined
// j undefined
// Then will start the for loop:
// i will be 2
// for loop will check the condition, that if i(2) is greater than 10, (which is NOT)
// then will go to the if statment to check if filteredArr is false, which it is,  then will push 2 to the primes array
// primes array has [2]
//Now the fucntion will go to the second for loop
// j equals to i >> 1 i equals to 2, 2 >> 1 results in 4, so j is 4
//for loop will check if 4 is greater than 10
// Then will push number 4 to filteredArr[j] with true
// and will add i(2) to j(4) that results to 6
// then for loop will check again is 6 greater than 10
// then again 6 will be added to filteredArr[j] with true
//and will add i(2) to j(6) that results to 8
// then for loop will check again is 8 greater than 10
//  then again 8 will be added to filteredArr[j] with true
// //and will add i(2) to j(8) that results to 10
//then again 10 will be added to filteredArr[j] with true
// now we have filteredArr of :
// 4: true
// 6: true
// 8: true
// 10: true
// will exit the loop beacuse 10 not greater than 10
// back to the first loop will add one to i that results to 3
// if statement will check filteredArr[j]
// which is doesn't have 3 now will push 3 to primes and jump to second loop
// the same priviouse process will continue unitl the condition exits for loop
// so only primes number will be included to primes array
// function sumPrimes(num) {
//     const primes = [];
//     const filteredArr = [];
//
//     let i;
//     let j;
//     for (i =2; i <= num; i++) {
//         if (!filteredArr[i]) {
//             primes.push(i);
//             console.log(primes);
//             // j = i << 1; is same as multiples of i and j = i. So the number that is passed over
//             // in the inside loop is the prime number. And that refers back to !filteredArr[i].
//             for (j = i << 1; j <= num; j += i) {
//                 filteredArr[j] = true;
//                 console.log(filteredArr);
//             }
//         }
//     }
//     return primes.reduce((a, b) => a + b);
//
// }

// console.log(sumPrimes(10));






//Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all
// numbers between 1 and 3. The answer here would be 6.
// Have two deep loops
// looping through each number multiply by 2
// return the first common number found
// Using Euclid’s Algorithm
// Dividend / Divisor = quotient r. remainder
// Dividend = Divisor * quotient + remainder
// how to find quotient and remainder
// Dividend / Divisor = Math.floor(quotient)
// Divisor * quotient = number
// Dividend - number = remainder
//Use the larger of the two numbers as the dividend
//Dividend = Divisor * quotient + remainder
// for example :
// 210 = 45 * 4 + 30
// we ill use 45 and 30 as the dividend
// 45 / 30 = Math.floor(1.5) + remainder
// 30 * 1 = 30
// 45 - 30 = 15
// 45 = 30 * 1 + 15
// 30 / 15 = 2 + 0
// 30 = 15 * 2 + 0
// 15 is the greatest common divisor
//210 * 45 = 9450
// 9450 / 15 = 630
//1, 5
//
// function smallestCommons(arr) {
//   arr.sort((a, b) => a -b)
//   let range = [];
//   //Create empty array
//   for (let i = arr[0]; i <= arr[arr.length -1]; i++) {
//     // pushing all the item inside arr from first item up to end.
//     range.push(i);
//   }
//   let LCM = 0;
//  // set LCM to 0 so will keep updating
//  let x = true;
//  // set the x value to true to continue looping until set to false
//   while (x) {
//      // each time the loop run will add one to LCM
//     LCM++;
// // The foor loop basicaly loop through each item in the range array
// // set the value of j to the first item in the range array which is 1
// // the condition checkes if the j is smaller than last item in the range arr
// // then for loop will contimue to the if statment to check if the LCM(1) remainder j is
//  // not 0 if it is not 0 will continue to else if statment
// // in the else if statment will check if j equals to the last item in the range array
// // if it is not then will start from beginning
// // will add one to LCM now LCM is 2 and so on until j equals to last item of range array
//     for (let j = range[0]; j <= range[range.length -1]; j++) {
//       if (LCM % j !==0) {
//         break;
//       }else if (j === range[range.length -1]) {
//          x = false;
//       }
//     }
//   }
//   return LCM;
// }

// function smallestCommons(arr) {
//   // sort array
//   arr.sort((a,b) => a -b);
//
//   // set LCM
//   let LCM = arr[arr.length -1];
//
//   for(var i = arr[arr.length -1]; i >= arr[0]; i--){
//     if(LCM % i !== 0){
//       LCM += arr[arr.length -1];
//       i = arr[arr.length -1];
//     }
//   }
//
//   return LCM;
// }
//
// smallestCommons([23, 18])
// console.log(smallestCommons([23, 18]));



//Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
//until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].


// function dropElements(arr, func) {
//   // Drop them elements.
//
//
//
//     // Check the element form 0 index until the function return True
//   const array = arguments[0];
//   const testElements = arguments[arguments.length -1];
//   const firstMatcheEl = array.map((el, i) => {
//     if (func(el) === true) {
//        return i;
//     }
//   });
//   // get the index of the first matched element
//   // Use typeof to only return the numbers
//   const elIndex = firstMatcheEl.filter(el => {
//     return (typeof(el) === "number")
//   }).slice(0,1).join("");
//   // slice the original array from the the index of first matched element
//
//    return  elIndex.length === 0 ? [] : arr.slice(parseInt(elIndex), arr.length);
// }
//
// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));





//Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
//
// function steamrollArray(arr) {
//   // I'm a steamroller, baby
//   const newArr = arr.reduce(( a, c ) => a.concat(c), [])
//                  .filter(el => el).
//                  reduce(( a, c ) => a.concat(c), [])
//                  .reduce(( a, c ) => a.concat(c), []);
//
//   return newArr;
// }
//
// console.log(steamrollArray([1, {}, [3, [[4]]]]));


// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.



// function binaryAgent(str) {
// //The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
// //The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
//   const binaryToText = "";
//   const newStr = str.split(' ').map(el => {
//   return String.fromCharCode(parseInt(el, 2));
// }).join('');
//   return newStr;
// }
// console.log(
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
//
//




//Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.
// function truthCheck(collection, pre) {
//   // Is everyone being true?
//   // hasOwnProperty
//   //The Boolean object is an object wrapper for a boolean value.
//   //use hasOwnProperty proerty to check every single element inside objects
//   const newArr = collection.every(el => {
//   if (el.hasOwnProperty(pre) && Boolean(el[pre])) {
//      return true;
//   }
//
//   });
//   return newArr;
// }
//
// console.log(
// truthCheck([{"single": "double"}, {"single": "NaN"}], "single"));






// //Intermediate Algorithm Scripting: Arguments Optional
// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided,
//then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.

// function addTogether(a, b) {
//   //Check if the arguments are numbers
//   // Use typeof a === "number" arguments.length === 1 to check If a is a number
//   // and there is only one provided argument, return function
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }else if(typeof a === "number" && arguments.length === 1){
//     return function(b) {
//       return addTogether(a, b);
//     }
//   }
//
// }
//
// addTogether(2, "3");





// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:
// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

// getFullName()  getFirstName() getLastName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// const Person = function(firstAndLast) {
//   // Complete the method below and implement the others similarly
//   // Parse the argument and return array of first and last name each in index position
//
//   let splitFirstAndLast = firstAndLast.split(" ");
//
// // call getFullName method and return splitFirstAndLast array and convert it to string with join method
//   this.getFullName = ()=>{
//     return this.splitFirstAndLast = splitFirstAndLast.join(" ");
//   };
// // call getFirstName method and return first item on index 0 from splitFirstAndLast array
//   this.getFirstName = ()=>{
//     return this.splitFirstAndLast = splitFirstAndLast[0];
//   };
//
// // call getFirstName method and return second item on index 1 from splitFirstAndLast array
//   this.getLastName = ()=>{
//     return this.splitFirstAndLast = splitFirstAndLast[1];
//   };
//
//   this.setFirstName = (setFirst)=> {
//     //The shift() method removes the first element from an array
//      splitFirstAndLast.shift();
//      return splitFirstAndLast.unshift(setFirst);
//   };
//   // Use pop method to remove element from the end of an array
//   // Use push method to push the element to the end of an array
//   this.setLastName = (setlast)=> {
//     splitFirstAndLast.pop();
//     return splitFirstAndLast.push(setlast);
//   };
//   this.setFullName = (setFirstAndLast) => {
//      return splitFirstAndLast = setFirstAndLast.split(" ");
//   };
// };
//
// const bob = new Person('Bob Ross');
// console.log(Object.keys(bob).length);






//Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


// function orbitalPeriod(arr) {
//   // Assign the array into another array so we don't to change the original array
//   let newArr = arr;
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   // Loop throgh each iteam in the array
//   for (var i = 0; i < newArr.length; i++) {
//   // Get the value of altitude for each item
//     const altitude = newArr[i].avgAlt;
//   // Get the value of  semi-major axis and return the base
//     const semiMAxis = altitude + earthRadius;
//     // delete the item in the object
//     delete newArr[i].avgAlt;
//     // add new property and assing orbital periods
//     newArr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(semiMAxis, 3) / GM));
//   }
//  return newArr;
// }
//
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//


// 1- JavaScript Algorithms and Data Structures Projects: Palindrome Checker

// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false
//
// function palindrome(str) {
//   // Good luck!
//   // Assign str to new variable so we don't need to change the original one
//   const newStr = str;
//   // Create a regEx to not get numbers and letter but other charachters
//   const reg = /[^A-Za-z0-9]/g;
//   // delete every character which is not number or letter
//    const originalStr = newStr.replace(reg, '').toLowerCase();
//    // reverse the str
//    const reverseStr = originalStr.split('').reverse().join('');
//    //compair two str to see if it is the same and the return method will output the boolean value
//    return reverseStr === originalStr;
// }
//
//
// console.log(palindrome("five|\_/|four"));



// 2-JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// In the following chalenge, the function will memorize two variables (deciNum and romanNumeral).
// As we notice that deciNum starts with the largest denomination on the left-hand side, and decrease as they go along.
// We will get into that later! Here we also need to format the romanNumeral array the same way we formated the romanNumeral variable.
// Hmm this is getting interesting wait for it! In the for loop we iterate throgh deciNum array, the first if statement
// we compair n that we passed as argument with 1, to see if 1 is greater than 1, which is false  because 1 equals to 1
// then the for loop jumps to the second condtion to check, if n is smaller or equals to the first element in deciNum array.
// The for loop continues iterating from 1000 along to 1, at this point the condition will be true the loop jumps to the return
// method, up to now everything is clear, but what the F**k is romanNumeral[i]? Ok take a deep breath and have your coffee:)
// I promise I'll tell you everything! Accourding to MDN JavaScript arrays are zero-indexed! What the hell that means?? it means the first
// element of an array is at index 0, and the last element is at the index equal to the value of the array's length property minus 1.
// ok enough theory let's back to some practice, i equals to 13, as we can access to array elements using index position, here we get
// 'I' at position 13 and we return that element. Oh god it was so easy! But hey what is toRoman(n - deciNum[i]?
// Here we call this function and we decrease n from 1 because deciNum[i] at this point equals to 1
// So back to our function again to for loop again but, at this point the condtion is true because n is 0 and it is smaller than 1
// we log out the function and we return only 'I'.
// in the for loop will
// M 2999
//M 1999
//M 999
// CM 99
// XC 9
// X 9
// MMMCMXCX

// function toRoman(n) {
//   // Make an array starts from the largest denomination  and decrease as they go along.
//     const deciNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// // Format the romanNumeral array the same way we formated the romanNumeral variable
//     const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
// // For loop loops throgh deciNum array to find the corresponding element
//     for (var i = 0; i < deciNum.length; i++) {
//
// // If the passed number equals to 1, will return ''
//         if(n < 1){
//               return "";
//         }
//
// // If the passed number is greater or equals to one of the deciNum elements will return the index position of corresponding letter
//
//         if(n >= deciNum[i]) {
//             return romanNumeral[i] + toRoman(n - deciNum[i]);
//         }
//     }
// }
// console.log(toRoman(1));





//3- JavaScript Algorithms and Data Structures Projects: Caesars Cipher




//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to FREE PIZZA!
// rot13("SERR YBIR?") should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


// function rot13(str) {
// // Assign str to new variable so the global won't be changed
//   const newStr = str.split('');
// // Make array of two letters of rot13
//   const rot13 =["AN", "BO", "CP", "DQ", "ER", "FS", "GT", "HU", "IV", "JW", "KX", "LY", "MZ",
//                 "NA", "OB", "PC", "QD", "RE", "SF", "TG", "UH", "VI", "WJ", "XK", "YL", "ZM", ",,", "..", "??", "!!"];
// // Map through each element inside newArr array to compair first item in rot13 with el in newStr
//     const newArr = newStr.map(el => {
//         const shiftCipher =  rot13.filter(item => {
//            if (el === item[0]) {
//              return item;
//            };
//         }).join('');
//         return shiftCipher[1];
//     });
//     return newArr.reduce((a, b) => a.concat(b)).replace(/undefined/g, ' ');
// }
// //FREE CODE CAMP
// console.log(rot13("SERR YBIR?"));
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");




//4- JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
//Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number.
// The following are examples of valid formats for US numbers (refer to the tests below for other variants)
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6054756961)") should return false
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
// telephoneCheck("2(757)6227382") should return false.
// telephoneCheck("2(757)622-7382") should return false.
// telephoneCheck("555)-555-5555") should return false.
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.

//
// function telephoneCheck(str) {
//   // .map(el => parseInt(el));
//    const newStr = str;
//    // console.log(newStr);
//    const regEx = /^1?\s?((\(\d{3}\))|\d{3})[-.]?\s?\d{3}[-.]?\s?\d{4}/g;
//
//    const found = newStr.match(regEx);
//   if ( found === null) {
//     return false;
//   }
//    return found.join('') === newStr ? true : false;
//
// }
//
// console.log(telephoneCheck("(555)555-5555"));
//
//


//JavaScript Algorithms and Data Structures Projects: Cash Register
// Example cash-in-drawer array:


const currency = [
  {name: "ONE HUNDRED", value: 100.00},// ["ONE HUNDRED", 100]],
  {name: "TWENTY", value: 20.00},// ["TWENTY", 60],
  {name: "TEN", value: 10.00},// ["TEN", 20],
  {name: "FIVE", value: 5.00},// ["FIVE", 55],
  {name: "ONE", value: 1.00},// ["ONE", 90],
  {name: "QUARTER", value: 0.25},// ["QUARTER", 4.25],
  {name: "DIME", value: 0.10},// ["DIME", 3.1],
  {name: "NICKEL", value: 0.05},// ["NICKEL", 2.05],
  {name: "PENNY", value: 0.01},// [["PENNY", 1.01],
];


function checkCashRegister(price, cash, cid) {
  let cashInDrawer = cid;
  const changeStatus = {};
  //Get the change value
      let  change = parseFloat(cash - price),
  // Iterate through two dementional array and get the collection value of second items
        totalCashAvailable = cashInDrawer.reduce((a, next) => {
     return a + next[1];

   }, 0.0);


   if (change > totalCashAvailable ||
       totalCashAvailable === 0.00 ||
       totalCashAvailable === 1.00 ||
        totalCashAvailable === 1.01) {
      changeStatus.status = "INSUFFICIENT_FUNDS";
      changeStatus.change = [];
   }
   else if(change < totalCashAvailable) {
     const result = checkChange(change, cashInDrawer);

       changeStatus.status = "OPEN";
       changeStatus.change = result;


   }else {
     changeStatus.status = "CLOSED";
     changeStatus.change = cid;
   }


    return changeStatus;
 }



// Create a global currency to check the currency and what is the value of that currency

//
function checkChange(change, cashInDrawer) {
  cashInDrawer =  cashInDrawer.reverse();
  const result =  currency.reduce((acc, next, i) => {
     if (change >= next.value) {
      let currentVal = 0.0;
      while(change >= next.value && cashInDrawer[i][1] >= next.value) {
       currentVal+= next.value;
       change -= next.value;
       change = Math.round(change * 100) / 100;
       cashInDrawer[i][1] -= next.value;
      }
      acc.push([next.name, currentVal]);
      return acc;
    }else {
      return acc;
    }
  }, []);
  return result;
}
// Create a global currency to check the currency and what is the value of that currency
console.log(
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
