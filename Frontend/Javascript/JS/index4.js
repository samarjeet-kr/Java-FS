// Declaration wise

    //show() // func hositing possible

    // Pure function
function show(){
    console.log("Hello World")
}

/*
show();
show();
show();
show();
*/

    //greet() // func hoisting not possible

    // Variable type function
let greet = function(){
    console.log("Hello world again")

}

/*
greet()
greet()
greet()
greet()
*/

// Function hoisting : If we call a function before its declaration then it is known as function hoisting.
// No changes even used var instead let
