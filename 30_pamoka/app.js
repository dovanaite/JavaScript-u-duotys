function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reikia hello atspausdinti po vieną raidę į eilutę

const hello = "Kitty";

for (let i = 0; i < hello.length; i++) {
  console.log(hello[i]);
}

const helloArray = ["K", "i", "t", "t", "y"];

for (let i = 0; i < helloArray.length; i++) {
  console.log(helloArray[i]);
}

const digArray = [5, 5, 10, 10, 105, 105];

for (let i = 0; i < digArray.length; i++) {
  console.log(digArray[i]);
}

//Paskaičiuoti masyvo reikšmių sumą ir atspausdinti

let sum = 0;

for (let i = 0; i < digArray.length; i++) {
  sum = sum + digArray[i];
}
console.log(sum);

//Paskaičiuoti masyvo reikšmių, kurios didesnės už 10 sumą ir atspausdinti

let sumVirs10 = 0;

for (let i = 0; i < digArray.length; i++) {
  if (digArray[i] > 10) {
    sumVirs10 = sumVirs10 + digArray[i];
  }
}
console.log(sumVirs10);

//Paskaičiuoti masyvo reikšmių, kurios didesnės už 5 kiekį ir atspausdinti

let kiekVirs5 = 0;

for (let i = 0; i < digArray.length; i++) {
  if (digArray[i] > 5) {
    kiekVirs5++;
  }
}
console.log(kiekVirs5);

let sumVirs5 = 0;
let vidurkis = 0;

for (let i = 0; i < digArray.length; i++) {
  if (digArray[i] > 5) {
    sumVirs5 = sumVirs5 + digArray[i];

    vidurkis = sumVirs5 / kiekVirs5;
  }
}
console.log(vidurkis);

//Sukurti tuščią masyvą ir tada į jį pridėti du vardus. Gautą masyvą atspausdinti.

let katinai = [];

katinai.push("Miauskis", "Murrskis");

console.log(katinai);

//Sukurti masyvą iš 10 elementų, kurie yra random skaičiai nuo 5 iki 20

const bla = [];

let randomSkaicius;

for (let i = 0; i < 10; i++) {
  randomSkaicius = rand(5, 20);
  bla.push(randomSkaicius);
}

console.log(bla);

//Kiek raidžių yra masyve?

const seas = ["BlackSea", "CaribbeanSea", "NorthSea", "BalticSea"];
let raidziuSuma = 0;

for (let i = 0; i < seas.length; i++) {
  raidziuSuma += seas[i].length;

  console.log(seas[i]);
  console.log(seas[i].length);
}
console.log("raidziu suma:", raidziuSuma);

//Duoto masyvo žodžių raides surašyti stulpeliu

let masyvoVienetas;

for (let i = 0; i < seas.length; i++) {
  masyvoVienetas = seas[i];
  console.log(masyvoVienetas);
  for (let i = 0; i < masyvoVienetas.length; i++) {
    console.log(masyvoVienetas[i]);
  }
}

//Kiek a ir kiek e raidžių yra masyve?

let aeRaides = 0;
let aRaide = 0;
let eRaide = 0;

for (let i = 0; i < seas.length; i++) {
  masyvoVienetas = seas[i];
  console.log(masyvoVienetas);
  for (let i = 0; i < masyvoVienetas.length; i++) {
    if (masyvoVienetas[i] == "a") {
      aRaide++;
    }
    if (masyvoVienetas[i] == "e") {
      eRaide++;
    }
  }
}
console.log("raides A:", aRaide, "raides E:", eRaide);

//Pagal masyvą seas sukurti naują masyvą, kurio elementai būtų seas masyvo stringų ilgiai

const seasString = [];

for (let i = 0; i < seas.length; i++) {
  seasString.push(seas[i].length);
}
console.log(seasString);

//Reikia sukurti naują masyvą iš 5 vienodų elementų. Masyvo elementai yra masyvas seas

const masyvasPenki = [];

for (let i = 0; i < 5; i++) {
  masyvasPenki.push(seas);
}

console.log(masyvasPenki);

//Naudojan jūrų jūrų masyvą visas jūras atspausdinti atskirose eilutėse

for (let i = 0; i < masyvasPenki.length; i++) {
  console.log(masyvasPenki[i]);
  for (let k = 0; k < masyvasPenki[i].length; k++)
    console.log(masyvasPenki[i][k]);
}

//Reikia padaryti 5 skirtingus masyvus kurių reikšmės atsitiktiniai skaičiai nuo 1 iki 10 Ir tuos 5 masyvus sudėti į vieną bendrą masyvą.

let masyvuMasyvas = [];
let masyvas1 = [];
let masyvas2 = [];
let masyvas3 = [];
let masyvas4 = [];
let masyvas5 = [];

masyvuMasyvas.push(masyvas1, masyvas2, masyvas3, masyvas4, masyvas5);

for (let k = 0; k < 5; k++) {
  masyvas1.push(rand(1, 10));
  masyvas2.push(rand(1, 10));
  masyvas3.push(rand(1, 10));
  masyvas4.push(rand(1, 10));
  masyvas5.push(rand(1, 10));
}

console.log(masyvuMasyvas);

const xo = [];

for (let i = 0; i < 3; i++) {
  const a3 = [];

  for (let k = 0; k < 3; k++) {
    a3.push(rand(0, 1) ? "X" : "O");
  }

  xo.push(a3);
}

let is = "no";
const check = ["X", "O"];
for (let i = 0; i < check.length; i++) {
  const a = check[i];
  if (
    (xo[0][0] == a && xo[1][1] == a && xo[2][2] == a) ||
    (xo[0][2] == a && xo[1][1] == a && xo[2][0] == a)
  ) {
    is = "yes";
    break;
  }
}

console.log(xo, is);

pirstukai % 2 ? "stars+='o" : "stars+='*";
