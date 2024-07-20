// let myHeros = ["thor","spiderman"]
// let heropower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.yash = function(){
//     console.log(`yash is present in all objcets`);
// }

// heropower.yash()

// Array.prototype.heyyash = function(){
//     console.log(`Yash says hello`);
// }

// myHeros.yash()
// myHeros.heyyash()
// heropower.heyyash()

String.prototype.trueLentgh=function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}
"yash".trueLentgh();

