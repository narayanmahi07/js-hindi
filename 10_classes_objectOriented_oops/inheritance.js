class user {
    constructor(username) {
        this.username = username
    }


    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password

    }

    addCourses() {
        console.log(`A new course was added by ${this.username}`)

    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.addCourses()
chai.logMe()

const masalachai = new user("masalachai")

masalachai.logMe()

console.log(chai === masalachai);
console.log(chai instanceof user);
