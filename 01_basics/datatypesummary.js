// primitive 

//7 types : string , number , boolean , null , undefined , symbol
// BigInt

const score =100
const scorevalue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);


// const bigNumber = 37947948029809n



// reference type (non primitive)

// Array , Objects, Functions

const hero =["shaktiman","naagraj","doga"];
let myObj =

{
    name:"Narayan",
    age:18,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof scorevalue);
console.log(typeof myFunction);


console.log(typeof outsideTemp);



// stack (primitive), heap (non - primitive)

let myname = "Narayan"

let anothername = myname
anothername = "mahi"

console.log(myname);
console.log(anothername);

let user = {
   
  email:"naru@google.com",
   upi :"user@ybl"

}

let usertwo = user

usertwo.email ="mahi@google.com"

console.log(user.email);
console.log(usertwo.email);




/*   [ data type summary ]

- interview related questions 

- primitive and non primitive (call by value, call by reference)

- primitive:7 (call by value)

- string, number, bolean, null, undefined, symbol , BigInt

- non primitive:3 (call by reference)

- arrays, object, function 


- dynamically type vs statically type

- js is dynamically typed

- const id = Symbol("123")

- const anotherId = Symbol("123")

- id === anotherId => false

- array, object, function overview 

- typeof datatyped is available on documentation */






/*   [ stack and heap memory ]
- Primitive data type goes to Stack we get a copy of that value.
- Non-Primitive data type goes to Heap we get refrence of that value.  
*/