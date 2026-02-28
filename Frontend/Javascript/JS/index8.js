console.log(Math)
console.log(Math.PI)
console.log(Math.LN10E)
console.log(Math.SQRT1_2)

let num1 = 7.7
console.log(Math.round(num1))
let num2 = 7.1
console.log(Math.ceil(num1))
let num3 = 7.9
console.log(Math.floor(num3))
let num4 = 7.5
console.log(Math.trunc(num4))

console.log(Math.random())
let random = Math.random() * 100
console.log(Math.round(random))

// Destructuring of object
let nums = {
    n1 : 10,
    n2 : 20,
    n3 : 30
}

let {n1,n2,n3} = nums;
console.log(n1)
console.log(n2)
console.log(n3)

// Promise Object
let message = new Promise((success, fail)=>{
  let status = false; // true
  if(status) {
    success('Welcome')
  }  else{
    fail('Get lost')
  }
})

// we will use .then to grab the type of output return by promise object

// .then is used to get correct output.

// we will use .catch to grab the false output return by promise object

// .catch is used to get the error


message
    .then((msg)=>{
        console.log(msg) // true
    })
    .catch((msg)=>{
        console.log(msg) //false
    })