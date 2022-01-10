const bitGirls = ["Brigita", "Edita", "Deimantė", "Justė", "Lina"];

const bitAnimals = ["Bunny", "Cat", "Second Cat", "Dog", "Mouse", "Cacadoo"];

const bits = [4, 56, 897, 465, 156, 654798, 8489, 51, 654, 849, 894];

//Atspausdinti girls vardus
// console.log("***********PIRMAS VARIANTAS***********");

// for (let i = 0; i < bitGirls.length; i++) {
//   console.log(bitGirls[i]);
// }

// console.log("***********ANTRAS VARIANTAS***********");

// bitGirls.forEach((girl) => console.log(girl));

// console.log("***********TREČIAS VARIANTAS***********");

// bitGirls.forEach(function (girl) {
//   console.log(girl);
// });

console.log("***********FOR EACH GYVŪNAI***********");

bitAnimals.forEach((animal) => console.log(animal));

console.log("***********GYVŪNAI BE CAT IR DOG***********");

bitAnimals.forEach((animal) => {
  if (animal !== "Cat" && animal !== "Dog") {
    console.log(animal);
  }
});

console.log("***********SUMA***********");

let sum = 0;

bits.forEach((d) => (sum += d));

console.log(sum);

bits.forEach((d) => {
  if (d % 2) {
    console.log(d);
  }
});

let sumL = 0;
bits.forEach((d) => {
  if (d % 2 == 0) {
    sumL++;
  }
});

console.log(sumL);

let _8 = 0;

bits.forEach((d) => {
  const s = "" + d;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "8") {
      _8++;
    }
  }
});

console.log(_8);
