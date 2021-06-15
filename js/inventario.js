//  CAPTURO EL ELEMENTO FORM

const form = document.querySelector("form");

// A ESTE FORM LE CAPTURO EL EVENTO SUBMIT DEL BUTTON, Y LE AGREGO PREVENTDEFAULT PARA EVITAR
// EL COMPORTAMIENTO PREDETERMINADO QUE TIENE SUBMIT

form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("¡Producto añadido!")
    

// CAPTURO LOS DATOS QUE INGRESA EL USUARIO EN LOS INPUT 
const nombre = document.querySelector("#nombre")
const cantidad = document.querySelector("#cantidad")
const precio = document.querySelector("#precio")
//LE AGREGO AL OBJETO PRODUCTOS LOS VALORES DE LOS INPUT
let productos = {nombre: nombre.value,  cantidad:cantidad.value, precio:precio.value};
//SI NO HAY CLAVE "PRODUCTOS" EN EL STORAGE LO CREA CON VALOR VACIO
if(!localStorage.getItem("productos")){
localStorage.setItem("productos", "[]")
}
//RECIBE PASANDO A JAVASCRIPT EL ARRAY VACIO Y LE HACE PUSH (A VARIABLE) DE PRODUCTOS(LO QUE INGRESA EL USUARIO)
let arrayProductos = JSON.parse(localStorage.getItem("productos"))
arrayProductos.push(productos)
//PISO(SUBO) CON EN NUEVO DATO EL DATO ANTERIOR 
localStorage.setItem("productos",JSON.stringify (arrayProductos))

//PARA QUE VUELVAN LOS VALORES DEL FORMULARIO A 0
nombre.value = ''
cantidad.value = ''
precio.value = '$'

})
