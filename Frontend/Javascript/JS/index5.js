// Parameters - When a function is declared then the local variable declared inside fucntion's body is known as parameter.

/**/
let greet = function(name, age){ // Parameter
    console.log(`Hello my name is ${name} and age is ${age}.`)
}

greet()


// Default value
let greet1 = function(name='User', age=0){ // Parameter
    console.log(`Hello my name is ${name} and age is ${age}.`)
}
greet1()

let greet2 = function(name, age){ // Parameter
    console.log(`Hello my name is ${name} and age is ${age}.`)
}

greet2('Samarjeet',20)
greet2('Honey Singh',50) // Arguments

// Variable types function has two types
// 1. Regualar functions

let add = function(a,b){
    return a+b;
}
console.log('Additon is '+ add(5,10))

// 2. Arrow function
let sub = (a,b) => {
    return a-b;
}
console.log('Subtraction is ' + sub(10,5))

// Difference between regular and arrow functions
let areaRect = function(height, width){
    return height*width;
}
console.log('Area of rectangle is '+ areaRect(7,8))

// Single line statement, we can avoid using return.
// Only to arrow function.
let areaCircle = (radius) => Math.PI * radius ** 2
console.log('Area of circle ' + Math.round(areaCircle(13))); // Needed to avoid not a function error in anon func


// Anonymous fucntion : If a function has no name.
(function(){
    console.log('I am anon func...')
}())

// Higher order function : If a function a returning is returning multiple function at single time then most outer function or parent function is known as higher order function.

let mult1 = (a) => {
    return mult2 = (b) =>{
        return mult3 = (c) => {
            return a*b*c;
        }
    }
}

//console.log(mult1(10)(5)(2))
// WTF just happend
let res1 = mult1(5)
let res2 = mult2(6)
let res3 = mult3(7)
console.log(res3);

// Filter method
let arr =  [1,2,3,4,5,6,7,8,9,10]
console.log(arr.filter((a) => a%2 === 0))

// Map method - manly used to map object's key int jsx
console.log(arr.map((a)=> a*10))

