let habilidades: string[];

/*Declarion de interfaz el ? signifa propiedad opcional*/ 
interface Personaje{
    nombre1: string;
    hp1: number;
    skills: string[];
    puebloNatal?: string;
}

 const personaje:Personaje={
     nombre1: 'Pardo',
     hp1:200,
     skills: ['rayo','garrotazo','rueda'],
     puebloNatal:'Bagaces'
 }
 
 console.table(personaje);