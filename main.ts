main();

function main() {
  greetings(janosVitez);
}

function greetings(callBack: Function) {
  console.log("Hello there, I am your homework, make me better ;) \n");
  callBack();
  console.log("\nGoodbye");
}

export function janosVitez() {
  const verse = `"No, hogy még szebb legyen," felelt a kapitány,"  Lássunk, embereim, az áldomás után;  Papok pincéjéből van jó borunk elég,  Nézzük meg a kancsók mélységes fenekét!"`;

  let formatVerse = verse.replace(new RegExp("\\s{2}", "g"), "\n");
  console.log(formatVerse, "\n");

  const num = Math.floor(Math.random() * 10);
  if (num % 2 == 0) {
    console.log("The number is even", num);
  } else {
    console.log("The number is odd", num);
  }

  if (num < 8 && num > 0 && num % 2 == 0) {
    console.log(
      "You are lucky, here is Janos Vitez one more time, nicely.\n",
      formatVerse
    );
  }
}
