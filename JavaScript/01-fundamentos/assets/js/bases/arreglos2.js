let juegos= ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo:',juegos.length)

let primero=[2-2];
let ultimo= [juegos.length-1];
console.log(primero, ultimo);

//recorre el arreglo
juegos.forEach((elemento,indice,arr)=>{
    console.log(elemento,indice,arr);
})

//inserta al final
juegos.push('Wow');

//inserta al inicio
juegos.unshift('lolsito');

//saca el ultimo y lo retorna
juegos.pop();

//borra segun indice, y retorna un arrrglo
let juegosBorrados=juegos.splice(1,2);
console.log(juegosBorrados,juegos);

//retorna el indice
let indexMetroid= juegos.indexOf('Metroid');
console.log(indexMetroid);
