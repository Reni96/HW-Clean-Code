/*
  Author: Burom Barna
  Date: 2019 09 29
  Location: Budapest
  Purpose: Clean Code HW
*/
main();

function main() {
  greetings(janosVitez);
}

function greetings(callBack: Function) {
  // Introduction
  console.log("Hello there, I am your homework, make me better ;) \n");
  callBack();
  // Viszlat
  console.log("\nGoodbye");
}

export function janosVitez() {
  // Init string with Janos Vitez
  const verse = `"No, hogy még szebb legyen," felelt a kapitány,"  Lássunk, embereim, az áldomás után;  Papok pincéjéből van jó borunk elég,  Nézzük meg a kancsók mélységes fenekét!"`;

  // Format that sh*t
  let formatVerse = verse.replace(new RegExp("\\s{2}", "g"), "\n");
  console.log(formatVerse, "\n");

  // Number based Janos Vitez you got m8
  const num = Math.floor(Math.random() * 10);
  // compute x modulo 2 and check whether it is zero, log the results
  if (num % 2 == 0) {
    /* the number is even */ console.log("The number is even", num);
  } else {
    /* the number is even */ console.log("The number is odd", num);
  }

  // Don't know why even numbers between 1 and 7 but it was told to do it like this
  if (num < 8 && num > 0 && num % 2 == 0) {
    console.log(
      "You are lucky, here is Janos Vitez one more time, nicely.\n",
      formatVerse
    );
  }
}
