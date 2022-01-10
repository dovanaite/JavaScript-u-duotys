let kintamasis = 0;

kintamasis++;
kintamasis++;
kintamasis++;
console.log(kintamasis);

let kintamasis10 = 0;

kintamasis10 += 10;
kintamasis10 += 10;
kintamasis10 += 10;

console.log(kintamasis10);

let pirstukai = 0;

for (let i = 0; i < 10; i++) {
  pirstukai++;
  console.log(pirstukai);
}

let vienasCiklas = 0;
let kitasCiklas = 0;

for (let i = 0; i < 3; i++) {
  vienasCiklas++;
  console.log(vienasCiklas);
}
for (let i = 0; i < 3; i++) {
  kitasCiklas += 10;
  console.log(kitasCiklas);
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomas = rand(5, 15);

for (let i = 0; i < 11; i++) {
  console.log("random skaicius", rand(5, 15));
}

let sk1 = rand(5, 25);
let sk2 = rand(5, 25);
let sk3 = sk1 + sk2;

console.log("skaicius 1", sk1);
console.log("skaicius 2", sk2);
console.log("random suma", sk3);

let suma = 0;
let sumaMaza = 0;

for (let i = 0; i < 11; i++) {
  let atsitiktinis = rand(5, 25);
  console.log("atsitiktinis", atsitiktinis);
  if (atsitiktinis > 15) {
    suma = suma + atsitiktinis;
  } else {
    sumaMaza = sumaMaza + atsitiktinis;
  }
}

console.log("suma didele:", suma);
console.log("suma maza:", sumaMaza);

if (suma > sumaMaza) {
  console.log("DIDIEJI LAIMEJO");
} else if (suma < sumaMaza) console.log("MAZIEJI LAIMEJO");
else {
  console.log("laimejo draugyste, yayy");
}

let stars = "";

for (let i = 0; i < 123; i++) {
  stars = stars + "*";
}

console.log(stars);

let stringai = "";

for (let i = 0; i < 123; i++) {
  if (i % 2 == 0) {
    stringai = stringai + "o";
  } else {
    stringai = stringai + "*";
  }
}
console.log(stringai);

//Padaryti ciklą, kuris atspausdina "X" atsitiktinį nuo 5 iki 10 skaičių kartų

let x = "";

for (let i = 0; i < rand(5, 10); i++) {
  console.log("" + "x");
}

//Padaryti ciklą, kuris pagamintų strigą su atsitiktiniu nuo 5 iki 10 kiekiu "X"
for (let i = 0; i < rand(5, 10); i++) {
  x = x + "x";
}
console.log(x);

//Prie skirtingų ilgių stringų išvedame ir to stringo ilgį
//Išvesti ir atspausdinti tik tuos stringus ir jų ilgius, kurie yra ilgesni nei 7

for (let k = 0; k < 11; k++) {
  let y = rand(5, 10);
  let meh = "";
  for (let i = 0; i < rand(5, 25); i++) {
    meh = meh + "y";
  }

  if (meh.length > 7) {
    console.log(`${meh} ${meh.length}`);
  } else {
    console.log(meh.length, "per trumpas");
  }
}
