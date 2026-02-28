let str = 'abc@learn.js'
/*
console.log(str[3])
console.log(str.length)
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.includes('!'))
console.log(str.replace('@','#'))
console.log(str.slice(3,9))
*/

let a = 100
/*
console.log(a == '100') // loose comparison
console.log(a ==='100') // strict comparison

console.log(a != '100') // loose comparison
console.log(a !=='100') // strict comparison
*/

let age = 50
let firstName = 'mario'
let lastName = 'jackson'

// Concatenation in normal way
let res = 'hello my name is ' + firstName + " " + lastName + ', and my age is. ' + age
//console.log(res)

// backticks
let res1 = `hello my name is ${firstName} ${lastName}, and my age is ${age}.`
console.log(res1)