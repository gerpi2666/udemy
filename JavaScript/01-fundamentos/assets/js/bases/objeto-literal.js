let personaje={
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad: 44,
    coords:{
        lat:34.87,
        long:-25.34
    } ,
    trajes: ['Mark1','markV','Hulkbuster'],
    direccion: {
        zip:'10880, 90265',
        ubicacion:'Malibu california'
    }
};
console.log('Nombre',personaje.nombre);
//selecciona la propiedad del objeto
console.log('Nombre ', personaje['nombre']);
//selecciona las propiedades de un objeto anidado, se concatena con .
console.log('Latiud:',personaje.coords.lat);
//practica
console.log('Numero de trajes',personaje.trajes.length);

//mas detalles

//borra una propiedad del objeto
delete personaje.edad;
console.log(personaje);

//vizualiza las propiedades como un arreglo
const entriesPares= Object.entries(personaje);
console.log(entriesPares);

//crea una nueva propiedad
personaje.casado=true;
console.log(personaje);

//bloquea la modificacion de las propiedades
Object.freeze(personaje);

personaje.dinero=120020;
console.log(personaje);
