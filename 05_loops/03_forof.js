// for of 

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
    //console.log(num);
}


const greetings = " hello world!"

for (const greet of greetings) {
    //console.log(`each char is ${greet}`)
}


// maps

const map  = new Map()

map.set(`IN`,"INDIA")
map.set(`USA`,"UK")
map.set(`FR`,"FRANCE")
map.set(`IN`,"INDIA")

//console.log(map);


for (const [KEY, value] of map) {
    //console.log(KEY, ':-' , value);
    
}


const myObject = {
    'game1' :'nfs',
    'game2' : 'spiderman'
}

//for (const [KEY, value] of myObject) {
 //   console.log(KEY, ':-' , value);             // not working here
//}


