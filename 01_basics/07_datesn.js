// Date

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

//let myCreatedDate =new Date(2023,0,23)
//let myCreatedDate =new Date(2023,0,23,5,3)
//let myCreatedDate =new Date("2023-01-14")

let myCreatedDate =new Date("01-01-2025")


console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);

newDate.toDateString("default",{
    weekdays: "long"
})

