class user {
    constructor(username) {
        this.username = username
    }


logMe(){
    console.log(`username: ${this.username}`);
}

static createId() {
    return `123`
 }

}

const narayan = new user("narayan")
// console.log(narayan.createId())

class Teacher extends user {
    constructor(username,email) {
        super(username)
        this.email = email
}
}

const iphone = new Teacher("iphone" , "i@phone.com")

console.log(iphone.logMe());




