function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(
  "1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);"
);

let pinigine = [];

for (let i = 0; i < rand(10, 30); i++) {
  let centai = rand(0, 10);
  pinigine.push(centai);
}
console.log("pinigine", pinigine);

console.log(
  "2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;"
);

let centuSuma = 0;

for (let i = 0; i < pinigine.length; i++) {
  pinigine[i] = rand(0, 10);
  centuSuma = pinigine[i] + centuSuma;
}
console.log("centu suma", centuSuma);

console.log(
  "3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;"
);

let didesniNei2 = 0;

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] > 2) {
    didesniNei2 = pinigine[i] + didesniNei2;
  }
}
console.log("centai daugiau uz 2:", didesniNei2);

console.log(
  "4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;"
);
console.log("pinigine su centu", pinigine);

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) {
    pinigine[i] = 0;
  }
}
console.log("pinigine be centu", pinigine);

console.log(
  "5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;"
);

let maxReiksme = pinigine[0];
let maxReiksmiuKiekis = 0;

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] > maxReiksme) {
    maxReiksme = pinigine[i];
    maxReiksmiuKiekis = 0;
  }

  if (pinigine[i] == maxReiksme) {
    maxReiksmiuKiekis++;
  }
}

console.log("max reiksme", maxReiksme, "reiksmiu kiekis", maxReiksmiuKiekis);

console.log(
  "6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;"
);

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] == 0) {
    pinigine[i] = i;
  }
}
console.log(pinigine);

console.log(
  "7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;"
);

let truksta = 30 - pinigine.length;

if (truksta) {
  for (let i = 0; i < truksta; i++) {
    pinigine.push(rand(0, 10));
  }
}

//taip pat galima ir taip:
//for(let i = 0; i < pinigine.length; i++){
// if(pinigine.length < 30){
//pinigine.push(rand(0, 10));}}

console.log(pinigine);
console.log(truksta);

console.log(
  "8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);"
);

let monetos = [];
let popierius = [];

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) {
    monetos.push(pinigine[i]);
  } else {
    popierius.push(pinigine[i]);
  }
}

console.log(monetos, popierius);

console.log(
  "9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;"
);

let korteles = [
  "KIKA",
  "Euro Vaistinė",
  "Drogas",
  "Ačiū",
  "Lietuvos Geležinkeliai",
  "Mano RIMI",
];

pinigine = [monetos, popierius, korteles];

console.log(pinigine);

korteles[3] = "Kino klubas"; //<-- pakeitimas

for (let i = 0; i < korteles.length; i++) {
  korteles[i] = i;
}

console.log("korteles", korteles);

console.log("10. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;");

korteles.sort();

console.log(korteles);

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

console.log("dežutė 9 skyreliai");

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
