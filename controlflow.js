// controlflow 

// <, >, <=, >=, ==, !=, ===, !==
/*
temp=50
if (temp === 41){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}

const score = 200;

if(score>100){
    // var power = "Hollow purple"; // Var makes ele a global variable.
    let power = "Hollow purple";
    console.log(`User power:${power}`);
}

const a =1;
switch(a){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("Default case match");
        break;
}

const  userEmail = "@yash";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email.")
}

 falsy values -> false, 0, -0, BigInt On, "", null undefined, NaN

truthy values -> "0", "false", "", [], {}, function(){}

const emptyObj={};
if (Object.keys(emptyObj).length === 0){
    console.log("Objct is empty");
}

// Nullish Coalescing Operator (??): null, undefined.
*/

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10;
console.log(val1);
var1 = undefined ?? 15;
console.log(val1);
val1 = null ?? 10 ?? 20
console.log(val1);

// Terinary Operator 
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"):console.log("more than 80")