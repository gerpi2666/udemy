function saludar(){
    console.log('hola mundo');
}

function saludar2(nombre){
    console.log('Hola: '+ nombre);
}

saludar();
saludar2('Gerald');

//funcion de flcha
const saludarFlecha= ()=> {
    console.log('hola planeta');

}
const saludarFlecha2= (nombre)=> {
    console.log('hola:'+nombre);

}
saludarFlecha();
saludarFlecha2('pepeland');

//funciones de retorno
function saludar(){
    console.log('hola mundo');
    return 'Hola';
}
let saludo= saludar()
console.log(saludo);

function sumar(a,b){
    return a+b
}

console.log( sumar(3,2) );

const sumar2= (a,b)=> a+b;// funcion de flecha abreviada


function getRamdon(){
    return Math.random();
}
//console.log( getRamdon() );

const getRandom2 = () => Math.random();

console.log(getRandom2);
