const animales = ['Perro', 'Gato', 'Gallina', 'Vaca', 'Caballo', 'Cerdo'];
let patas = Math.floor(Math.random() * 10);
const colores= ['Rojo', 'Azul', 'Verde', 'Morado', 'Rosado', 'Negro', 'Gris', 'Blanco', 'Amarillo',]


let animal = () => {
    let numero = Math.floor(Math.random() * animales.length);
    return animales[numero];
}

let color = () => {
    let num = Math.floor(Math.random() * colores.length);
    return colores[num];
}
let pet = animal();
let col = color();
let ojos = col.length;

