const elMayor= (a,b)=>{
 return (a > b) ? a : b;
}
console.log(elMayor(20,6));

const tieneMembresi=(miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log(elMayor(15,85));
console.log(tieneMembresi(false));

const amigo= true;

const amigosArr= [
    'Peter',
    'tony',
    'Dr strange',
    amigo ? 'thor' : 'loki'
];
 console.log(amigosArr);

 const nota= 82.5;
 const grado= nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  : 
              nota >= 75 ? 'C+' : 
              nota >= 70 ? 'C' : 'F';

console.log({nota, grado});