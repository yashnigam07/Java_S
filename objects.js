// Objects

/*

const gf = Symbol ("key1");


let a = {
    name : "Yash",
    age : 18,
    code : [1,2,3],
    [gf]:"0"
};
console.log(a.name);
console.log(a["name"]);
console.log(a["code"][0]);
console.log(a[gf]);
Object.freeze(a);
a["gf"] = "single hi best hai...";

*/

/*
// const a = new Object();
const b = {};
b.id="123";
b.name="yash";
b.roll=12;
console.log(a,b);

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj3 = {d:5,e:6};
const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);

console.log({...obj1,...obj2,...obj3,...obj4});
console.log(Object.keys(obj4));
console.log(Object.entries(obj4));
console.log(obj4.hasOwnProperty("d"));
*/

const obj1 = {a:1,b:2};
const {b} = obj1;
console.log(b);
