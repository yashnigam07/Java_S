function SetUsername(username) {
    this.username = username; // Corrected typo here
    console.log("called");
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username); // Use call to set the context of `this`
    this.email = email;
    this.password = password;
}

const chai = new CreateUser("chai", "chat@gmail.com", "123");
console.log(chai);
