// array 
// const myarr = [0,1,2,3,4];
// const myhero = ['iron man','sukuna'];
// // console.log(myarr[3]);
// myarr.push(1); // Adding element in the array.
// console.log(myarr);
// myarr.pop(1); // Deleting elemetn from the array.
// console.log(myarr);
// myarr.unshift(9); // Adding ele at index '0'
// myarr.shift(); // Removing ele from front.
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));
// const newarr = myarr.join() // Convert array in the form of 'string'.
// console.log(typeof newarr)

//slice - array.slice(start, end);

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1, 3);  // ["Orange", "Lemon"]
// console.log(citrus);  // ["Orange", "Lemon"]
// console.log(fruits);  // ["Banana", "Orange", "Lemon", "Apple", "Mango"]

//splice - array.splice(start, deleteCount, item1, item2, ...);

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let removed = fruits.splice(2, 2);
// console.log(removed);  // ["Lemon", "Apple"]
// console.log(fruits);   // ["Banana", "Orange", "Grapes", "Pineapple", "Mango"]

/* 
Key Differences
Purpose: slice is used for copying portions of an array without modifying the original array, whereas splice is used for modifying the original array by adding/removing elements.
Return Value: slice returns a new array, while splice returns an array of removed elements.

*/
/*
const a = [1,2,3];
const b = ['a','b','c'];
const c = a.concat(b); // Mergin two arrays.
console.log(c);
const d = [...a,...b]; // Perefrable 
console.log(d);

const e = [1,2,[1,[1,[2,3,4,[4,5]]]]];
let f = e.flat(Infinity); 
console.log(f);
console.log(Array.isArray(e));
console.log(Array.from('Yash'));
*/

let a =1;
let b=2;
let c=2;
console.log(Array.of(a,b,c));
