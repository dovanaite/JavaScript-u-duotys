//1. Funkcijos deklaracija

function sayHello(name, count) {
  for (let i = 0; i < count; i++) {
    console.log(`Hello, ${name}`); //viduje galima rašyti bet ką if'us, ciklus, kitas f-jas
  }
}

console.log("Have fun!", sayHello());

//2. Funkcijos iškvietimas

// argumentas - konkreti reikšmė, kurią galima įrašyti į funkcijos skliaustelius
// parametras - funkcijos vidinis kintamasis (be aiškios reikšmės)

const times = 25;

sayHello("Martyna", 1);
sayHello("Martynai", times);
sayHello("Bobikai", 20);

console.log(
  "Sukurti funkciją sum su dviem parametrais, kuri savo viduje, konsolėje atspausdintų argumentų sumą. Pademonstruoti veikimą 6+6, 18+18, 22+0"
);

function sum(a, b) {
  console.log(a + b);
}

sum(6, 6);
sum(18, 18);
sum(22, 0);

console.log(
  'sukurti funkciją calculator() su trim parametrais skaicius1 skaicius2 ir veiksmas. Funkcija calculator(5, 8, "-") turi consolėje spausdinti skirtumą +, / ir * titinkamai'
);

function calculator(a, b, c) {
  console.log(eval(a + c + b)); //<==== tinginių būdas, taip geriau nereikia
}

calculator(9, 3, "*");

function calculatorIf(a, b, c) {
  if ("-" == c) {
    console.log(a - b);
  } else if ("+" == c) {
    console.log(a + b);
  } else if ("*" == c) {
    console.log(a * b);
  } else if ("/" == c) {
    console.log(a / b);
  } else {
    console.log("error");
  }
}

calculatorIf(9, 3, "*");

function calculatorSw(a, b, c) {
  switch (c) {
    case "-":
      console.log(a - b);
      break;
    case "+":
      console.log(a + b);
    case "*":
      console.log(a * b);
    case "/":
      console.log(a / b);
    default:
      console.log("error");
  }
}

calculatorSw(9, 3, "*"); //<==jis ką randa, nuo to skaito viską, padaro, ko man reikia ir eina toliau
