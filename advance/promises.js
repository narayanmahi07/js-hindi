// fetch('https://google,com').then().catch().finally()


const promise1 = new Promise(function (resolve, reject) {
    // do an aync task
    // dB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promise1.then(function() {
    console.log("promise consumed")
})


new Promise(function(resolve,reject) {

    setTimeout(function() {
       console.log("Async task 2");
       resolve()
    },1000)
}).then(function() {
    console.log("Async 2 resolved")
})


const promise3 = new Promise(function(resolve,reject) {
    setTimeout(function()  {
     resolve({username: "chai",email:"chai@example.com"})   
    }, 1000);
})
promise3.then(function(user) {
console.log(user)
})

const promise4 = new Promise (function(resolve,reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "Narayan",password:"777"})
        } else {
            reject('ERROR: Something went wrong')
        }
        
    },1000)
})

const username = promise4
.then((user) => {
console.log(user);
return user.username
}).then((username) => {
console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))



const promise5  = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "Narayan",password:"777"})
        } else {
            reject('ERROR: Something went wrong')
        }
},1000)
})

async function consumepromise5() {
   try{
    const response = await promise5
    console.log(response)
   } catch(error){
         console.log(error);
   }
}

// consumepromise5()


// async function getallUser() {
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    //console.log(response);
//      const data = await response.json()
//      console.log(data);
//    } catch(error) {
//     console.log("E:",Error);
//    }

// }

// getallUser()



// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/hiteshchoudhary')

.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



