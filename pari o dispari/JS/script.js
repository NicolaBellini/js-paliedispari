
// elements
const random = getRandomNum(1, 5).toFixed(0);
const numPc = random;
let numUser = "";

// flag che mi consente di uscire da loop while
let validNumber = false;
let evenNumber = "";

// attribuisco il risultato della mia funzione ad una costante eliminando tutti i numeri dopo la virgola con il tofixed


console.log(numPc);

// while per verificare che nel prompt venga messo un numero valido
while(!validNumber){
  // chiedo all utente di immettere un numero da 1 a 5 con un prompt e ripeto l operazione se l utente inserisce un numero non valido
  numUser = prompt("inserire un numero da 1 a 5");
// controllo per vedere se il numero è valido
  if(numUser<=5 && numUser>0){
  console.log("il numero è valido");
  validNumber = true;
  }else{
    validNumber = false;
    console.log(" il numero non è compreso tra 1 e 5");
  };

} 

const oddOrEven = prompt("scegli pari o dispari")



console.log(numUser)

// funzione per capire se la somma è pari
comparer(numPc, numUser);


// blocco if per stampare il risultato del comparer
if(evenNumber){
  console.log("la somma è pari");
}else{
  console.log("la somma è dispari");
}

console.log(evenNumber, oddOrEven, numUser);



// _________FUNCTION_________

// creo la funzione per il numero casuale
function getRandomNum(min, max){
  return Math.random() * (max- min) + min;
};

// creo la funzione che somma e compara le cifre
function comparer(numA, numB){
  const sum = numA + numB

  if(sum % 2){
    // dispari
    evenNumber = false
  }else{
    // pari
    evenNumber = true
  }

  oddEven(evenNumber, oddOrEven)

  console.log("-------" ,oddEven)
}

// se il giocatore ha messo pari e la somma è pari vince
// function winner(somma, scelta){
//   if(((scelta === "pari") && (somma = true)) || ((scelta === "dispari") && (somma = false))){
//     console.log("il giocatoe ha vinto")
//   }else{
//     console.log("il pc ha vinto")
//   }

// }




// // secondo tentativo
function oddEven(inputscelta, evenNumber){
// se la somma è pari
  if((evenNumber && (inputscelta === "pari")) || (!evenNumber && (inputscelta === "dispari"))){
    console.log("il giocatore ha vinto")
  }else if((evenNumber && (inputscelta === "dispari")) || (!evenNumber && (inputscelta === "pari"))){
    console.log("il pc ha vinto")
  }
}

