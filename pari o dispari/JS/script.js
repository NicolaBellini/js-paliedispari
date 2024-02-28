





// Esegui il gioco
playGame();

// Funzione per generare un numero casuale compreso tra min e max (inclusi)
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per determinare se un numero è pari o dispari
function isEven(number) {
  return number % 2 === 0;
}

// Funzione per stabilire il vincitore in base alla scelta dell'utente e alla parità o disparità della somma dei numeri
function Winner(userChoice, userNumber, computerNumber) {
  const sum = userNumber + computerNumber;
  const sumIsEven = isEven(sum);

  if ((userChoice === 'pari' && sumIsEven) || (userChoice === 'dispari' && !sumIsEven)) {
    return "Hai vinto!";
  } else {
    return "Il computer ha vinto!";
  }
}

// Funzione principale del gioco
function playGame() {
  // Chiedi all'utente di scegliere pari o dispari
  const userChoice = prompt("Scegli pari o dispari:").toLowerCase();

  // Controlla se la scelta dell'utente è valida
  if (userChoice !== 'pari' && userChoice !== 'dispari') {
    console.log("Scelta non valida. Riprova.");
    return;
  }

  // Chiedi all'utente di inserire un numero da 1 a 5
  const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

  // Controlla se il numero inserito dall'utente è valido
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    console.log("Numero non valido. Riprova.");
    return;
  }

  // Genera un numero casuale per il computer
  const computerNumber = getRandomNum(1, 5);

  console.log("Il computer ha scelto il numero:", computerNumber);

  // Stabilisci se la somma dei numeri è pari o dispari e dichiara il vincitore
  console.log(Winner(userChoice, userNumber, computerNumber));
}


