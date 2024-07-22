// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email; // Added email assignment
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Yash", "yash@example.com", "123"); // Added missing email argument
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email; // Added email assignment
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Yash", "tea@example.com", "123"); // Added missing email argument
console.log(tea.encryptPassword());
console.log(tea.changeUsername());