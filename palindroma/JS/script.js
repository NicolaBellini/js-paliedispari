
const inputWord = prompt("inserisci una parola per scoprire se è palindroma")

if(palindrom(inputWord)){
  console.log("la parola è palindroma");
}else{
  console.log(" la parola non è palindroma");
}

// creo la funzione che userà la parola di input


function palindrom(inputWord){
  // intanto rendo tutti i caratteri uguali portandoli a minuscolo
  inputWord = inputWord.toLowerCase();  
// applico un controllo per verificare che l utente non immetta un numero nella stringa da analizzare
  if (/\d/.test(inputWord)){
    console.log("la parola che hai inserto contiene numeri e non può essere analizzata")
    return false; // Se contiene numeri, non è palindroma
  };
  // confronto la prima lettera della prima metà della parola con l ultima lettera della seconda metà della parola
  for( let i = 0; i < inputWord.length -1 ; i++){
    if(inputWord[i] === inputWord[inputWord.length -1 - i]){
    // qui sto dicendo che se le lettere sono uguali, specificando con 3 uguali anche il tipo di dato, mi deve ritornare true
      return true
    };
    // se finito il ciclo for tutte le parole corrispondono mi darà true, se anche solo una non avrà la corrispondenza mi ridarà false 
// return false
}};
