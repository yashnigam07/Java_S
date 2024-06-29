/*
function add(a,b){
    console.log(a+b);
}

const result = add(3,5);
console.log(result);


function add(a,b){
    return a+b;
}
console.log("Result:",add(3,0));


function name_user (username){
    if(!undefined){
        console.log("Please enter a username");
    }
    // else{
    //       `${username} just logged in`
    // }
};
console.log(name_user());


function cart(...num){
    return num;
}
console.log(cart(1,2,3,4));

*/

const object= {
    username : "Yash",
    age: 14
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject["username"]} and age is ${anyobject["age"]}.`)
};

handleObject(object)