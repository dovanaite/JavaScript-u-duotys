function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(
  "********************************************MASYVAS MASYVE********************************************"
);

console.log("komoda 4 stalčiai");
const komoda = [];
const dezute = [];

for (let i = 0; i < 4; i++) {
  komoda.push(rand(0, 10));
}

console.log(komoda);

console.log("dežutė 9 skyreliais");

for (let i = 0; i < 9; i++) {
  dezute.push(rand(0, 10));
}

console.log(dezute);

console.log("į dėžutės 2 skyrelį įdėti širdelę");

// for (let i = 0; i < dezute.length; i++) {
//   if (i == 2) {
//     dezute[i] = "<3";
//   }
// }

dezute[2] = "<3";

console.log(dezute);

console.log("dėžutę įdėti į komodą");

komoda[0] = dezute;

console.log(komoda);

console.log(komoda[0][2]); //čia nurodau, kurios man dėžutės komodoje reikia, atspausdina konkrečią jos reikšmę

console.log("Į dėžutės skyrelį nr 5 įdėti kryžiuką");

komoda[0][5] = "+";

console.log(komoda);

console.log(
  "Komodos stalčiuje 3 sukurti naują dėžutę su 20 skyrelių kuriuose po skirtingą kiekį saldainių (nuo 5 iki 17)"
);

komoda[3] = [];

for (let i = 0; i < 20; i++) {
  komoda[3].push(rand(5, 17));
}

console.log(komoda);

console.log(
  "Prie dėžutės su saldainiais pridėti dar du skyrelius kuriuose būtų 25 ir 18 saldainių"
);
komoda[3].push(25, 18);

console.log(komoda);

console.log("pridėti dėžutę su 4 skyr.");

komoda[3].push([1, 2, 3, 4]);

console.log(komoda);

console.log("Sudėti ką tik sukurtos dėžutės elementus su 0 ir su 2 indeksais");

console.log(komoda[3][22][0] + komoda[3][22][2]);

console.log("");

const xo = [];

for (let i = 0; i < 3; i++) {
  xo[i] = [];
  for (let a = 0; a < 3; a++) {
    xo[i][a] = rand(0, 1) ? "X" : "O";
  }
}

//   xo.push(rand(0, 1));
//   if (xo[i] == 0) {
//     xo[i] = "0";
//   } else {
//     xo[i] = "X";
//   }
// }

// // console.log(xo);

// let xo2 = [];

// for (let i = 0; i < 3; i++) {
//   xo2.push(rand(0, 1));
//   if (xo2[i] == 0) {
//     xo2[i] = "0";
//   } else {
//     xo2[i] = "X";
//   }
// }

// // console.log(xo2);

// let xo3 = [];

// for (let i = 0; i < 3; i++) {
//   xo3.push(rand(0, 1));
//   if (xo3[i] == 0) {
//     xo3[i] = "0";
//   } else {
//     xo3[i] = "X";
//   }
// }

// // console.log(xo3);

// let xo4 = [];

// for (let i = 0; i < 3; i++) {
//   xo4.push(rand(0, 1));
//   if (xo4[i] == 0) {
//     xo4[i] = "0";
//   } else {
//     xo4[i] = "X";
//   }
// }

// // console.log(xo4);

// xo[0] = xo2;
// xo[1] = xo3;
// xo[2] = xo4;

console.log(xo);

console.log("suskaičiuoti, kiek 0 ir X yra");

let iksiukai = 0;
let nuliukai = 0;

for (let i = 0; i < 3; i++) {
  for (let a = 0; a < 3; a++) {
    if (xo[i][a] == "O") {
      nuliukai++;
    } else {
      iksiukai++;
    }
  }
}

console.log("nuliukai", nuliukai, "iksiukai", iksiukai);

console.log(
  "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ OBJEKTAI }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"
);

const object = {};
const array = [];

array[0] = "Jonas";
array.push("Janina");

array.unshift("Nausėda");

object.vyras = "Jonas";
object.moteris = "Janina";
object.president = "Nausėda";

console.log(object, array);

console.log(object.vyras, array[1]);

const namas = {};

namas.stogas = {};

namas.stogas.antena = "antena";

namas.stogas.kaminas = [];

for (let i = 1; i <= 100; i++) {
  namas.stogas.kaminas.push("PLyta nr." + i);
}

console.log(namas);

namas.siena = [];

for (let i = 1; i <= 4; i++) {
  namas.siena.push(i + " langas");
}

namas.siena.stoglangiai = [];

for (let i = 1; i <= 10; i++) {
  namas.siena.stoglangiai.push(i + " stoglangis");
}

console.log(
  "[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ KVARTALAS ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]"
);

/*
Kvartalas
Reikia sukurti 33 namų kvartalą. kvartalas yra masyvas;
Kiekvienas namas kvartale yra objektas.
Kiekvienas namas turi number, color, hasDog
number skaičiai nuo 1 iki 33 iš eilės
color random iš 'red', 'blue', 'ugly'
hasDog random true arba false
*/

const kvartalas = [];

const colors = ["red", "blue", "ugly"];

for (let i = 1; i <= 33; i++) {
  kvartalas[i] = {};
  kvartalas[i].number = i + 1;
  kvartalas[i].colors = colors[rand(0, 2)];
  kvartalas[i].hasDog = !rand(0, 1);
}

console.log(kvartalas);

const sunys = [
  "Zbitmenas",
  "Dikas",
  "Mauglis",
  "Bembė",
  "Švembis",
  "Eugenijus",
  "Petrius",
];

console.log(
  "Jeigu kotedže yra šuo, duoti jam vardą priskiriant kotedžui naują savybę dogName. Vardas random iš pačių sudaryto šunų masyvo vardų"
);

for (let i = 1; i < kvartalas.length; i++) {
  if (kvartalas[i].hasDog) {
    kvartalas[i].dogName = sunys[rand(0, sunys.length - 1)];
  }
}

console.log(kvartalas);

console.log("suskaičiuoti, kiek kvartale yra šunų");

let sunuSkaicius = 0;
for (let i = 1; i < kvartalas.length; i++) {
  if (kvartalas[i].hasDog) {
    sunuSkaicius++;
  }
}

console.log(sunuSkaicius);

console.log("Kokios spalvos namų kvartale yra daugiausia?");

let namuSpalvos = [];
let namuSkaicius = 0;

for (let i = 1; i < kvartalas.length; i++) {
  if (namuSpalvos.indexOf(kvartalas[i]) != -1) {
    namuSpalvos.push(kvartalas[i]);
    namuSkaicius++;
  }
}

console.log(namuSkaicius);

let dogCounter = 0;
for (let i = 0; i < kvartalas.length; i++) {
  if (kvartalas[i].hasDog === true) {
    dogCounter++;
  }
}

const colorCounter = { ugly: 0, blue: 0, red: 0 };
let maxColor;
let maxColorFancy;
for (let i = 0; i < kvartalas.length; i++) {
  const color = kvartalas[i].color;
  colorCounter[color]++;
  // jeigu color == ugly
  // colorCounter.ugly
}

if (
  colorCounter.ugly > colorCounter.blue &&
  colorCounter.ugly > colorCounter.red
) {
  maxColor = "ugly";
} else if (
  colorCounter.blue > colorCounter.ugly &&
  colorCounter.blue > colorCounter.red
) {
  maxColor = "blue";
} else {
  maxColor = "red";
}

const fancy = [];
fancy[colorCounter.ugly] = "ugly";
fancy[colorCounter.blue] = "blue";
fancy[colorCounter.red] = "red";
maxColorFancy =
  fancy[Math.max(colorCounter.ugly, colorCounter.blue, colorCounter.red)];

// console.log(fancy);

console.log(kvartalas, dogCounter, colorCounter, maxColor, maxColorFancy);
