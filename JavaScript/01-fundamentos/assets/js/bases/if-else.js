let a =10;

if(a  >= 10){

 console.log('a es mayor o igual a 10');

}else{
    console.log('a es menor  a 10');

}

//console.log('fin de programa');

const hoy = new Date();
console.log(hoy);

let dia = hoy.getDay();
console.log(dia);

if(dia===0){ // el tripe igual me indica que el tipado debe ser el mismo
    console.log('domingo');

}else if(dia ===1){
    console.log('lunes');

}else if(dia===2){
    console.log('Martes');

}else{
    console.log('No es lunes, martes o domingo');

}

//ejercio no usar if ni switch
let semana =['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
console.log('Hoy es ', semana[dia]);