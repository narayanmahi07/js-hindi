

function sayMyName() {
console.log("N");
console.log("A");
console.log("R");
console.log("A");
console.log("Y");
console.log("A");
console.log("N");
}

//sayMyName()


//function addTwoNumbers(number1,number2) {  // number2 => parameters
//  console.log(number1+ number2);
//}



function addTwoNumbers(number1,number2) { 

    //let result = number1 + number2
   // console.log("narayan");
   //  return result
     

   return number1 + number2
}

addTwoNumbers(3,4)
addTwoNumbers(3,null)  //null => argument


const result = addTwoNumbers(3,5)

//console.log("result:",result);


function loginUserMessage(username="sam") {
       
    if(!username) {
        console.log("please enter a username")
        return
        
    }

    // if(username === undefined) {
//
    // console.log("please enter a username")
    // return
   //  }

    return `${username} just logged in` 
}

//console.log(loginUserMessage("narayan"))

console.log(loginUserMessage())
