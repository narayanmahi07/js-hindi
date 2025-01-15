// ES6 Class Implementation
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    ChangeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.ChangeUsername());


// Behind-the-Scenes (Function Constructor Implementation)
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

User.prototype.ChangeUsername = function () {  // Fixed method name and correct assignment
    return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "456");

console.log(tea.encryptPassword());
console.log(tea.ChangeUsername());  // Now correctly calls the ChangeUsername method
