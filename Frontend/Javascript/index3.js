const link = document.querySelector('a')
console.log(link)
console.log(link.getAttribute('href'))
link.setAttribute('href','https://www.youtube.com')
console.log(link.getAttribute('href'))
link.setAttribute('target','_blank')
// link.setAttribute('title','Youtube')
link.setAttribute('style', 'color : red ')
//link.setAttribute('style', 'font-size : 40px ')
link.setAttribute('style','text-decoration : none')

console.log(link.style)
link.style.color = 'red'
link.style.textDecoration = 'none'
link.style.fontSize = '40px'
link.style.fontFamily = 'calibri'
link.style.textShadow = '2px 2px 5px #ff5252'