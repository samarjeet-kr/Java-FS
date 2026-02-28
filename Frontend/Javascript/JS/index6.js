let print = (a) => {
    console.log(a)
}
// Object

let arr = [1,2,3,4,5,6]
console.log(arr[2]) // Index access

let user = {
    // key - values
    username : 'Samarjeet',
    age : 50,
    height : Symbol('5.8ft'),
    isAvailabale : false
}
print(user)
print(typeof(user))
print(user['username']) // Has keys to access
user['username'] = 'Honey Single'
print(user['username'])

// Using dot operator
print(user.age)
user.age = 100
print(user.age)