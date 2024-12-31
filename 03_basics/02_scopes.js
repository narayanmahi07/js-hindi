
//var c = 300

let a = 300

if (true) {

let a =10
const b =20

//var c =30
c =30

//console.log("INNER:",a);

}

//console.log(a);
//console.log(b);
//console.log(c);



function one()  {
    const username = "narayan"

    function two() {
        const website = "youtube"
        //console.log(username)
    }
    //console.log(website);


    two()
}

one()


if (true) {

    const username ="narayan"

    if (username === "narayan") {
        const website = " youtube"
        //console.log(username + website);
        
    }
   // console.log(website);
    }

  //  console.log(username);


  // +++++++++++++++++ interesting ++++++++++++++++
 
 
  console.log(addone(5));

  function addone(num) {
    return num + 1
    
  }
  
  //addTwo(5)     //ReferenceError: Cannot access 'addTwo' before initialization

  const addTwo = function(num) {
    return num +2
  }

  console.log(addTwo(5));