let a= 10;
let b=10;
a=30;

console.log({a,b});

let Juan={nombre:'Juan'};
let ana= {...Juan};//operador spred rompe las referencias
ana.nombre= 'ana';

console.log(Juan, ana)

const cambiarNombre =(persona) =>{
    persona.nombre='tony';
    return persona; 
}

let peter= {nombre: 'Peter'};
let tony = cambiarNombre(peter);
console.log({peter,tony});

//arreglos
const frutas= ['Manzana','Pera','Piña'];

const otrasFrutas= [...frutas];




otrasFrutas.push('Mango');
console.table({frutas,otrasFrutas});