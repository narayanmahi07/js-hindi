const user = {
    username : "Narayan",
    loginCount: 7,
    signedIn:true,

    getUserDetails: function() {
        //console.log("got user details from database")
        //console.log(`username: ${this.username}`)
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username =  username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }

    return this
}

const user1  =new  User("Narayan",10,true)
const user2  = new User("chai aur code",11,false)
console.log(user1.constructor);
// console.log(user1);
// console.log(user2);


// ####################################
// 1.new object create
// 2. constructor function call under new keyword
// 3. (this) keyword inject

