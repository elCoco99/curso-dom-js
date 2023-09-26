/* Constantes */ 

const topping = document.querySelector('.topping')
const topList = document.getElementById('toppings')
const link = document.getElementsByTagName('a')

/* Agregar estilos desde CSS */ 

topping.style.backgroundColor = 'blue'    // modifica el fondo
topping.style.textTransform = 'uppercase' // modifica la letra a mayus

/* Seleccionar texto */ 

console.log('> inner Text')
console.log(topList.innerText) // muestra el texto de los elem seleccionados

console.log('> text Content')
console.log(topList.textContent) // muestra el texto de los elem seleccionados (incluye espacios identados)

console.log('> innerHTML')
console.log(topList.innerHTML) // muestra html del elemento seleccionado

/* Modificar atributos de elementos HTML */

console.log(link[0].getAttribute('href')) // selecciona atributo

link[0].removeAttribute('href') // elimina atributo
link[0].setAttribute('href', 'elcocodev.com') // crea o modifica si ya existe, el atributo seleccionado


/* Agregar y modificar clases */ 

console.log('> classList')
console.log(topping.classList)

console.log('> Agregar clase')
topping.classList.add('nueva-clase')
// se agregó nueva-clase al topping
console.log('se agregó nueva-clase al topping')
console.log(document.getElementsByTagName('li'))









