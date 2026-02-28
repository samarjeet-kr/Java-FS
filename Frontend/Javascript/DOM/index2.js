const para = document.querySelector('p')
console.log(para.innerText)

const paras = document.querySelectorAll('p')
console.log(paras[2].innerText)
paras[2].innerText = 'new text'

para.innerText += ' New text added' 
console.log(paras[3].textContent)

const div =  document.querySelector('.division')
console.log(div.innerHTML) // child 

let names = ['Mario','Luigi', 'Shaun', 'Youahsi']
names.forEach(name => {
    div.innerHTML += `<h3>${name}</h3>`
})

