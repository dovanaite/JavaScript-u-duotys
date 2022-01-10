function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const str = "Debeselis11b";

console.log(str[str.length - 1]);

//Žodį "Kurmis" atspausdinti po vieną raidę

const kurmis = "kurmis";

for (let i = 0; i < kurmis.length; i++) {
  console.log(kurmis[i]);
}

//Suskaičiuoti kiek 'a' raidžių yra žodyje 'apelsinas'
const ap = "apelsinAs";
let sk = 0;

for (let i = 0; i < ap.length; i++) {
  if (ap[i] == "a" || ap[i] == "A") {
    sk++;
  }
}
console.log("a raidziu:", sk);

//Žodį 'sanislepa' parašyti atvirkščiai

const back = "sanislepa";

let backBack = "";

for (let i = 0; i < back.length; i++) {
  console.log(back[i]);
  backBack = back[i] + backBack;
}
console.log(backBack);

//Sukurti naują žodį iš žodžio 'Karabasas', naujame žodyje panaudojant tik kas antrą raidę

let kar = "Karabasas";
let tarp = "";

for (let i = 0; i < kar.length; i++) {
  if (i % 2 == 0) {
    console.log(kar[i]);
    tarp = tarp + kar[i];
  }
}
console.log(tarp);

// Sukurti naują žodį iš žodžio 'Karabasas', naujame žodyje visas 'a' raides pakeisti *

let star = "";

for (let i = 0; i < kar.length; i++) {
  if (kar[i] == "a") {
    star = star + "*";
  } else {
    star = star + kar[i];
  }
}
console.log(star);

//Analogiškai kaip prieš tai, tik į * reikia keisti ne pačią a raidę, o raidę, esančią prieš tai

let newStar = "";

for (let i = 0; i < kar.length; i++) {
  if (kar[i + 1] == "a") {
    newStar = newStar + "*";
  } else {
    newStar = newStar + kar[i];
  }
}
console.log(newStar);

//reikia sugeneruoti atsitiktinį skaičių iš intervalo  nuo 222 iki 333

console.log(rand(222, 333));

//Tas pat uždavinys tik skaičius turi būti nelyginis (neporinis)

let nelyginis2;

do {
  nelyginis2 = rand(222, 333);
} while (!(nelyginis2 % 2));

console.log(nelyginis2);

//Duotas žodis: "abrakadabra" Surasti pirmą "b" raidę žodyje ir atspausdinti kelinta raidė jinai yra.

let abra = "abrakadabra";
let i = 0;

do {
  i++;
} while (abra[i] != "b");

console.log("eiles nr:", i + 1);
