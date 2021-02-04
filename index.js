/**
 * Programación Funcional
 */

// USUARIOS
let usuario = {
    nombre: 'Pepe',
    edad: 41
}

// MOSTRAR MENÚ
const mostrarMenu = () => {
    console.log(`COD - PLATO - PRECIO`)
    console.log(`--------------------`)
    CARTA.forEach( plato => {
        console.log(`${plato.cod} - ${plato.nombre} - ${plato.precio}€`)
    } )
}
// Enseñar el menú al inicio
mostrarMenu()

//Le pedimos al usuario que ponga el código de lo que quiere pedir
// no consigo hacer de esto una funcion, ya que cuando quiero usar la variable platos 
//mas adelante me dice que no esta definida
let platos =  prompt(`Hola ${usuario.nombre}. Escriba el código de lo que desea pedir`)

//La funcion cambiar, sirve para que si el usuario ha inroducido el código en minúscula lo pase a mayuscula
const CAMBIAR = (mayus) =>{
    platos = platos.toUpperCase()
}
CAMBIAR(platos)

//Verificamos con esta funcion que ha escrito el código correcto
const VERIFICAR = (platos) =>{
    switch(true){
        case platos === '':
        case typeof platos === 'number':
        case platos.length < 3:
        case platos.length > 3:
        alert('Por favor revise si ha escrito correctamente el código')
        break
    }
}
VERIFICAR(platos)

//Esta funcion busca el código introducido en la variable platos por el usuario y nos devuelve el nombre
const nuevoPedido = (plat) =>{
    newPedido = CARTA.find(num => num.cod === platos)
    console.log(`${usuario.nombre} has pedido:  ${newPedido.nombre}`)
}
nuevoPedido(platos)


//Esta funcion busca el código introducido en la variable platos por el usuario y nos devuelve el precio
const PRECIO = (plato) => {
    total = CARTA.find( euros => euros.cod === platos)
    console.log(`El precio de tu pedido es: ${total.precio} €` )
}
PRECIO(platos)

//Le preguntamos al usuario si quiere pedir algo más, tampoco lo he metido en funcion por la misma razon que antes
let pedirmas = prompt('¿Quiere pedir algo mas? Por favor responda si o no')

// y por ultimo con esta funcion si ha respondido que si volvemos a ejecutar todas las funciones y si dice que no le decimos adios
const Mas = (pedir) =>{
 if(pedirmas === 'si'){
    platos =  prompt('Escriba el código del plato que desea pedir')
    CAMBIAR(platos)
    nuevoPedido(platos)
    PRECIO(platos)  
    }else{
        alert(`Gracias por su visita ${usuario.nombre}. Le esperamos pronto`)
    } 
}

Mas(pedirmas)

//No he conseguido descubrir como hacer para pedir varios platos y que me lo muestre y lo sume, no he podido dedicarle mas tiempo, a ver si es posible que mañana lo resuelvas tu y veo como hacerlo. Gracas Toni!

