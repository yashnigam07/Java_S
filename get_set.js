class User {
    constructor(email, password) {
        this.email = email;  // This will call the set email method
        this.password = password;  // This will call the set password method
    }
    
    get password() {
        return `${this._password}yash`;
    }

    get email() {
        return this._email.toUpperCase();
    }
    
    set email(value) {
        this._email = value;
    }

    set password(value) {
        this._password = value.toUpperCase();
    }
}

const yash = new User("yash@1234", "123");
console.log(yash.password); // Should print "123YASHyash"
console.log(yash.email); // Should print "YASH@1234"
