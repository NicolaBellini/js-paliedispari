

const giocata = prompt("scegli pari o dipsari")
const numeroGiocatore =parseInt (prompt("scegli un numero "))
const numPc = getRandomNumber()

// qui sommo e lo passo alla funzione
const somma = numPc + numeroGiocatore

 let risultato;

 if(giocata === "pari" && isEven(somma)  || giocata === "dispari" && !isEven(somma)){
  console.log(getRisultato() +" vince il giocatore");
  risultato = getRisultato() +"vince il giocatore"
 }else{
   console.log(getRisultato() +" vince il pc")
   risultato = getRisultato() +"vince il pc"
 }


// ternario

// const risultato = (giocata === "pari" && isEven(somma) || giocata === "dispari" && !isEven(somma))
// ? getRisultato() + "vince il giocatore"
// : getRisultato() + "vince il pc"

console.log(numPc, numeroGiocatore, somma, isEven(somma))



// funzioni//////////

// random numero
function getRandomNumber(){
  return Math.ceil(Math.random() * 5)
}

// per capire se la somma è pari
function isEven(number){
  if(number % 2 === 0){
    return true
  }
  return false
}

function getRisultato(){
  return `numm giocatore: ${numeroGiocatore}, giocata ${giocata}, num pc ${numPc}`
}





