import {type Producto, calcularISV2}from './05-destructura-funciones'

const carrito:Producto[]=[
    {nombre: 'iphone 14',precio:1500},
    {nombre: 'i pad air',precio:1500},
    {nombre: 'Macbook pro',precio:1500},

];
const [total, isv2]=calcularISV2(carrito);
console.log('Total:', total);
console.log('ISV', isv2)