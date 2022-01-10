function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(a, b) {
  return a + b; //<== po 'return' funkcija nebevykdoma, tai paskutinė vykdoma eilutė
  console.log("bla bla");
}

let suma1 = sum(9, 6);
let suma2 = sum(18, 18);
let suma3 = sum(22, 0);

console.log("suma1", suma1);
console.log(sum(20, 15));

function calculator(a, b, c) {
  if ("-" == c) {
    return a - b;
  }
  if ("+" == c) {
    return a + b;
  }
  if ("*" == c) {
    return a * b;
  }
  if ("/" == c) {
    return a / b;
  }
  return "error";
}

console.log(calculator(5, 2, "*"));

function add3(a, b) {
  return [a + 3, b + 3];
}

// console.log("masyvas ==>", add3(5, 7));

let [k1, k2] = add3(10, 20); //<== k1 prisiskirs 10, k2 priskirs 20

console.log(k1, k2);
console.log(k1 + k2);

console.log(
  "duotos trys spalvos: red, blue ir green. Reikia parašyti funkciją su vienu argumentu. Funkcija turi veikti taip: jeigu argumentas yra red, turi grąžinti dvi kitas spalvas. Jeigu argumentas blue, grąžina dvi kitas."
);

function spalvos(color) {
  //MANO
  if ("red" == color) {
    return ["blue", "green"];
  }
  if ("blue" == color) {
    return ["red", "green"];
  }
  if ("green" == color) {
    return ["blue", "red"];
  }
  return "error";
}
console.log(spalvos("blue"));

function rgb(c) {
  const m = ["Red", "Green", "Blue"];

  m.splice(m.indexOf(c), 1);

  return m;
}

let [color1, color2] = rgb("Blue");

console.log(color1, color2);

console.log(
  "Reikia padaryti funkciją, kuri neturi argumentų, bet ji grąžina dvi raides X ir U. Raides reikia įrašyti į du kintamuosius l1 ir l2"
);

function xu() {
  const masyvas = [];
  masyvas.push("x");
  masyvas.push("u");
  return masyvas;
}

let [l1, l2] = xu();

console.log(l1, l2);

console.log('sukurt obj baras, su savybėm alus = "", kedes = rand (5, 20) ');

const baras = {
  alus: "geek",
  kedes: rand(5, 20),
};

// baras.daina = function () {
//   console.log("lalala");
// };

// baras.daina();
// baras.daina();
// baras.daina();

// this;

baras.daina = function () {
  // console.log('2 gaideliai, 2 gaideliai...');

  console.log(this.alus);
};

const baras2 = { ...baras };
baras2.kedes = 1000;

console.log(
  'objektas baras turetu savybe, kuri yra funkcija sakančia "Šiame bare yra XX"'
);

baras.seats = function () {
  console.log(`Šiame bare yra: ${this.kedes} kėdžių`);
};

console.log(baras, baras2);

baras.seats();
// baras2.seats();

console.log(
  'reikia suprototaipinti strigą pridedant metodą addStars kuris grąžintų to stringo reikšmę su 3 PVZ vardas="jonas" vardas.addStar() ====> jonas***'
);

let stringas = "bla bla bla";

String.prototype.addstar = function () {
  return this.valueOf() + "***";
};

console.log(stringas.addstar());
