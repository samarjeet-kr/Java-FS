// let - it will not provide scoping
let a = 100
{
    let a = 50
    console.log(a)
}
console.log(a)

// var - it will provide scoping [ignores block]
var b = 200
var b = 60
{
    var b = 20
    console.log(b)
}
console.log(b)

// const - only constants we can not re-initialize
var c = 300
console.log(c)

// Null Number Bigint Boolean Symbol String Undefined
// 7 types of datatypes 