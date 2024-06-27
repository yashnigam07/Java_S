const name = 'yash';
const age = '69'
// console.log(`Hello my name is ${name} and my age is ${age}`);
const string = 'ya baby';
// console.log(string[0]);
// console.log(string.toUpperCase());
// console.log(string.indexOf('a'));
// const newstring = string.substring(0,4);
// // console.log(newstring);
// const anotherstring = string.slice(-2,3);
// console.log(anotherstring);
const a = '   yash    ';
console.log(a);
console.log(a.trim());
console.log(a.trimEnd()); // trim gap from end
console.log(a.trimStart()); // trim gap from start.
const url = "https://google.com";
console.log(url.includes('google'));

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

