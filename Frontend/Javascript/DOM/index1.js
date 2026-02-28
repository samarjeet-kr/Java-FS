// windows object - we can't see any object without browser. e.g. document.
// DOM - Document Object Model
// DOM manipulation - manipulating html elements using javascript is know as DOM manipulation.

const para1 = document.querySelector('p');
console.log(para1)
const head = document.querySelector('#heading')
console.log(head)
const para2 = document.querySelector('div.division')
console.log(para2)

// div p.papra

const para3 = document.querySelector('div p.para')
console.log(para3)

const paras = document.querySelectorAll('p')
console.log(paras)
console.log(paras[0])
console.log(paras[2])
console.log(paras[3])

paras.forEach(p => {
    console.log(p)
})

const tags = document.
getElementsByTagName('p')
console.log(tags)

const classes  = document
.getElementsByClassName('para')
console.log(classes)

const id = document.getElementById('heading')
console.log(id)

