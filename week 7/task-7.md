A promise represents the completion or failure of an operation.

Differnce between synchronous and asynchronous code
 synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing.
 Asynchronous code doesn’t have to wait – your program can continue to run.

Write out any sample syncronous and asyncronous javascript code

Asynchronous code: 
    console.log("use the bathroom);
    setTimeout(function() {
    console.log("Dress up");
    }, 2000);
    console.log("Eat breakfast");
Synchronous code:
    console.log("use the bathroom);
    console.log("Dress up");
     console.log("Eat breakfast");

 List the different ways to deal with Asynchronous Code?