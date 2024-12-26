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
