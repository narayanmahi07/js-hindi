const user = {

    username : "narayan",
    price :199,

    welcomemessage : function() {
        console.log(`${this.username}, welcome to website`);
      //console.log(this);
    }

}
//user.welcomemessage()
//user.username = "mahi"
//user.welcomemessage()


//console.log(this);


//function chai() {
 //   let username = "narayan"
//    console.log(this.username);
//}

//chai()


//const chai = function () {
//    let username = "narayan"
//    console.log(this.username);        // ====> this also gives undefined

//}

//chai()


const chai =  () =>{
    let username = "narayan"
    console.log(this);               //  ====> this also gives undefined

}

chai()



//const addTwo = (num1,num2 ) => {
//    return num1 + num2
//}
                                            // gives output 7
//console.log(addTwo(3,4));


//const addTwo = (num1,num2 ) =>  num1 + num2
//const addTwo = (num1,num2 ) =>  (num1 + num2)       // implicit return 

//const addTwo = (num1,num2 ) =>  {username:"narayan"}      // gives output undefined
const addTwo = (num1,num2 ) =>  ({username:"narayan"})
console.log(addTwo(3,4));


//const myArray = [2,3,4,5,7] 
//myArray.forEach()