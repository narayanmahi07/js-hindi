const coding = ["js","rb","py","java","cpp"]

coding.forEach(function (val) {
   // console.log(val);
})


coding.forEach(  (item) => {
   // console.log(item);
})


function printme(item){
    //console.log(item);
}

// coding.forEach(printme)


coding.forEach( (item , index , arr) => {
console.log(item , index , arr);

})


const myCoding = [
    {
          
    lang : "javascript",
    langFileName: "js"
},

{  
     lang : "java",
    langFileName: "java"

},

{
    lang : "python",
    langFileName: "py"
}
       ]

       myCoding.forEach (  (item) => {
        console.log(item.lang);
       })