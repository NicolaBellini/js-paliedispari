
// elements
const random = getRandomNum(1, 5).toFixed(0);
const numPc = random;
const numUser = "";

// flag che mi consente di uscire da loop while
let validNumber = false;
let evenNumber = "";

// attribuisco il risultato della mia funzione ad una costante eliminando tutti i numeri dopo la virgola con il tofixed


console.log(numPc);

// while per verificare che nel prompt venga messo un numero valido
while(!validNumber){
  // chiedo all utente di immettere un numero da 1 a 5 con un prompt e ripeto l operazione se l utente inserisce un numero non valido
  const numUser = prompt("inserire un numero da 1 a 5");
// controllo per vedere se il numero è valido
  if(numUser<=5 && numUser>0){
  console.log("il numero è valido");
  validNumber = true;
  }else{
    validNumer = false;
    console.log(" il numero non è compreso tra 1 e 5");
  };
  const oddOrEven = prompt("scegli pari o dispari")
} 


// funzione per capire se la somma è pari
comparer(numPc, numUser);


// blocco if per stampare il risultato del comparer
if(evenNumber){
  console.log("la somma è pari");
}else{
  console.log("la somma è dispari");
}

console.log(evenNumber);



// _________FUNCTION_________

// creo la funzione per il numero casuale
function getRandomNum(min, max){
  return Math.random() * (max- min) + min;
};

// creo la funzione che somma e compara le cifre
function comparer(numA, numB){
  const sum = numA + numB

  if(sum % 2){
    evenNumber = true
  }else{
    evenNumber = false
  }

  winner()

}

// se il giocatore ha messo pari e la somma è pari vince
function winner(oddOrEven){
  if(((oddOrEven === "pari") && (evenNumber = true)) || ((oddOrEven === "dispari") && (evenNumber = false))){
    console.log("il giocatoe ha vinto")
  }else{
    console.log("il pc ha vinto")
  }

}

