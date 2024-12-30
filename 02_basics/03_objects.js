// singleton 

// objects literals

const mySym = Symbol("key1")


const jsuser = {
    name:"Narayan" ,
    "full name":"Narayan Mahato",
    [mySym]: "mykey1",
    age:18,
    location:"delhi",
    email:"narayan@google.com",
    isloggedin:false,
    lastlogindays:["monday","satursay"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email ="naru@chatgpt.com"
// Object.freeze(jsuser)  //+++ freeze karne ke baad koi change nhi ayaga +++//
jsuser.email ="naru@microsoft.com"
console.log(jsuser);


jsuser.greeting = function() {
    console.log("hello js user" );
}

jsuser.greetingTwo = function() {
    console.log(`hello js user,${this.name}` );// Backticks (`), also known as grave accents or backquotes, are typographical symbols used in computing and scripting languages
}

console.log(jsuser.greeting());

console.log(jsuser.greetingTwo());



