// let a = 300;
// console.log(`Global ${a}`)
// if (true){
//     let a = 10;
//     const b = 20;
//     console.log(`Local ${a}`);
// }
/*
function one() {
    const username = "yash";
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two();
}

one()

add_1(9,2);
function add_1(c,d){
    console.log(c+d);
}
const add = function(a,b){
    console.log(a+b);
}
add(3,5);

const user = {
    username: "yash",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username},welcomme to website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "nigam";
// user.welcomeMessage()
console.log(this);


function coffee(){
    console.log(this);
}
coffee();



// Arrow function
const chai = () => {
    let username = "yash"
    console.log(this);
}
chai();

const add = (a,b) => {
    console.log(a+b);
}
add(3,4);

*/

const add = (a,b) => (a+b);
console.log(add(3,4));