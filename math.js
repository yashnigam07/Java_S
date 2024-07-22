// const score = 400;
// console.log(score);

// const balance=new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const anothernumber=12.39;
// console.log(anothernumber.toPrecision(4));
// const a = 1000000;
// console.log(a.toLocaleString('en-In')); //Give no in Indain no system.

// *************** Matha **************

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));/

// console.log(Math.min(1,2,3,4));

// console.log(Math.floor(Math.random()*10)+1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random()*(max-min+1)+min));

// Object.getOwnPropertyDescriptor(Math)

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.PI);

// Creating an object with no prototype
const mynewObject = Object.create(null);

// Defining an object with some properties
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("Mein chai nhi peeta.");
    }
}

// Trying to get a non-existing property descriptor will return undefined
console.log(Object.getOwnPropertyDescriptor(chai, "yash")); // undefined

// Making the 'name' property non-writable and non-enumerable
Object.defineProperty(chai, 'name', {
    writable: false, // the property cannot be changed
    enumerable: false // the property will not show up in for...in loops or Object.keys()
});

// Verify the changes
console.log(Object.getOwnPropertyDescriptor(chai, "name")); // { value: 'ginger chai', writable: false, enumerable: false, configurable: false }
console.log(Object.keys(chai)); // ["price", "isAvailable"]

for (let [key, value] of Object.entries(chai)){
    if (typeof value !=='function')
    {
        console.log(`${key}:${value}`);
    }
}