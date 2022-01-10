function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(
  "1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25."
);

let masyvas = [];

for (let i = 0; i < 30; i++) {
  let randomas = rand(5, 25);
  masyvas.push(randomas);
}

console.log(masyvas);

console.log(
  "2 D. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;"
);

let naujasMasyvas = [];
masyvas = [];

for (let i = 0; i < 30; i++) {
  let randomas = rand(5, 25);
  masyvas.push(randomas);

  naujasMasyvas = randomas - i;
  console.log("randomas", randomas, "i", i, "NAUJAS MASYVAS", naujasMasyvas);
}

console.log(
  "2 E. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;"
);

for (let i = 0; i < 10; i++) {
  let randomas = rand(5, 25);
  masyvas.push(randomas);
}

console.log(masyvas);

console.log(
  "2 F. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;"
);

let porinisMasyvas = [];
let neporinisMasyvas = [];

for (let i = 0; i < masyvas.length; i++) {
  if (i % 2 == 0) {
    porinisMasyvas.push(masyvas[i]);
  } else {
    neporinisMasyvas.push(masyvas[i]);
  }
}
console.log(porinisMasyvas, neporinisMasyvas);

console.log(
  "2 G. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;"
);

for (let i = 0; i < masyvas.length; i = i + 2) {
  //i += 2) {

  if (i > 15) {
    masyvas[i] = 0;
  }
}

console.log(masyvas);

console.log(
  "2 H. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;"
);

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > 10) {
    console.log("i", i, "reiksme", masyvas[i]);
    break;
  } else {
    console.log("nieko nera");
  }
}

console.log(
  "3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės."
);

let raides = ["A", "B", "C", "D"];
let masyvas200 = [];
let raidziuKiekis = [0, 0, 0, 0];

for (let i = 0; i < 200; i++) {
  masyvas200.push(raides[rand(0, 3)]);
}

for (let i = 0; i < masyvas200.length; i++) {
  let raidesIndeksas = raides.indexOf(masyvas200[i]);
  raidziuKiekis[raidesIndeksas]++;
}

console.log(masyvas200, raidziuKiekis);
