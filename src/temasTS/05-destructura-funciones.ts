interface Producto
{
    nombre:string
    precio:number
}
const telefono:Producto={
    nombre:'Iphone 14',
    precio:1500
}
const tablet:Producto={
    nombre:'Ipad Air',
    precio:1500
}
function calcularISV(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total+=producto.precio
    }
    return total*0.15
}
const articulos=[telefono,tablet]
const isv=calcularISV(articulos)
console.log('ISV:',isv);

function calcularISV2 (productos:Producto[]):[number,number]{
    let total=0;
    for(let producto of productos){
        total+=producto.precio
    }
    return[total,total*.15]
}
const [total, isv2]=calcularISV2(articulos)
console.log('Total:',total);
console.log('isv2:',isv2);


