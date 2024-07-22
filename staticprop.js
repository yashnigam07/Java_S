class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const yash = new User("yash");
console.log(User.createId()); // Corrected to call the static method on the class

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone@123.com");
iphone.logMe();
