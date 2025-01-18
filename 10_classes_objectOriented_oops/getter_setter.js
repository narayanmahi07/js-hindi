class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }

    get email() {
return this._email.toUpperCase();

    }

    set email(value) {
         this._email = value
    }
    get password() {
        // return this._password.toUpperCase()
        return `${this._password}narayan`

    }

    set password(value) {
     this._password = value
    }
}

const narayan = new User("naray@123","abc")
console.log(narayan.password);
console.log(narayan.email);