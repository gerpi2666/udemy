const regresaTrue= () =>{
    console.log('Regresa true')
    return true;
}

const regresaFalse= () =>{
    console.log('Regresa false')
    return false;
}

console.warn('Not o la negacaion');

console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);

console.log('-----------------')

console.log(regresaTrue() && regresaFalse());

console.warn('OR');
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());


console.warn('Asignaciones');

const soyUndefined= undefined;
const soyNull= null;
const soyFalso= false;

const a1= true && 'hola mundo';// si es falso no asigna ningun valor
const a2= 'hola'&&'mundo'&& soyFalso;
const a3= soyFalso || 'Yo no soy falso';
const a4 = soyFalso || soyUndefined|| soyNull ||'Ya no soy falso de nuevo' ||true
console.log({a1,a2,a3,a4});





