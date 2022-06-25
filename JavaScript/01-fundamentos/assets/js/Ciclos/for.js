const heroes =['Batman','Superman','Wonderwoman','Aquaman'];

console.warn('for tradicional');

for(let i=0 ; i<heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('for in');

for(let i in heroes){
    console.log(heroes[i]);

}

console.warn('for off');//extrae el valor de arreglo como un foreach 

for(let heroe of heroes){
    console.log(heroes);

}
