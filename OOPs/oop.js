// const user = {
//     username:"Yash Nigam",
//     loginCount: 4,
//     signedIn: true,
//     getdetails: function(){
//         // return("Got user details from DB.")
//         return(`Username:${this.username},This:${this}`);

//     }
// }
// console.log(user.loginCount);
// console.log(user.getdetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userone = new User("Yash", 12, true);
const usertwo = new User("Yash_2",13,true);
console.log(userone);
// console.log(usertwo);

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  

