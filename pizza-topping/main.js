/* Agregar estilos desde CSS */ 

const topping = document.querySelector('.topping')

topping.style.backgroundColor = 'blue'
topping.style.textTransform = 'uppercase'

/* Seleccionar texto */ 

const topList = document.getElementById('toppings')

console.log('> inner Text')
console.log(topList.innerText)

console.log('> text Content')
console.log(topList.textContent)

console.log('> innerHTML')
console.log(topList.innerHTML)

 /* Modificar atributos de elementos HTML */

 const link = document.getElementsByTagName('a')
 console.log(link[0].getAttribute('href'))

 link[0].removeAttribute('href')

 link[0].setAttribute('href', 'elcocodev.com')

