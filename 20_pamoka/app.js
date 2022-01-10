// 1

// Su forEach atspausdinti medžius

const masterArray = [
  "Beržas",
  "Drebulė",
  "Ąžuolas",
  "Klevas",
  "Uosis",
  "Palmė",
  "Agrastas",
  "Eglė",
];

masterArray.forEach((trees) => console.log(trees));

// 2

// Suskaičiuoti, kiek visuose žodžiuose yra raidžių

// let letters = 0;
let letter = 0;
masterArray.forEach((l) => (letter = l.length + letter));
console.log("raidžių skaičius:", letter);

// 3

// Suskaičiuoti, kiek visuose žodžiuose yra "a" raidžių.

let letterA = 0;

masterArray.forEach((l) => {
  for (let i = 0; i < l.length; i++) {
    if (l[i] == "a" || l[i] == "A") {
      letterA++;
    }
  }
});

console.log("a raidžių:", letterA);

// 4

// HTML faile sukurti tagą <ul> ir į jį sudėti <li> elementus

const ul = document.querySelector("ul");

// su masyvo medžiais

const medziai = () => {
  for (let i = 0; i < masterArray.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    const liText = document.createTextNode(masterArray[i]);
    li.appendChild(liText);
  }
};
medziai();

// 5

//Medžius turinčius savo pavadinime "a" raidę nudažyti raudonai

ul.querySelectorAll("li").forEach((li) => {
  for (let i = 0; i < li.innerText.length; i++) {
    if (li.innerText[i] == "a") {
      li.style.color = "red";
      break;
    }
  }
});

// 6

// Suskaičiuoti, kiek section#_1 yra gėlių

const geles = document.querySelector("#_1");
console.log("gėlių skaičius:", geles.querySelectorAll("p").length);

// 7

// Suskaičiuoti, kiek section#_1 gėlių pavadinuose yra raidžių (kaip nr2)

let flowerLetters = 0;

const flowers = () => {
  const geles = document.querySelector("#_1");
  console.log("gėlių skaičius:", geles.querySelectorAll("p").length);
};

flowers.forEach((f) => (flowerLetters = f.length + flowerLetters));

console.log("raidžių skaičius:", flowerLetters);
