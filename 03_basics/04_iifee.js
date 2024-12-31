// Immediately Invoked Function Expressions (IIFEE)

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs
//  as soon as it is defined. It’s typically used to create a private scope and
//  avoid polluting the global namespace.


//Explanation:
//The function is wrapped in parentheses (function() { ... }) to turn it into an expression.
//The trailing () immediately invokes the function.

(function chai() {
   // named iife  
   
    console.log(`DB CONNECTED`);
})();


(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("narayan")
