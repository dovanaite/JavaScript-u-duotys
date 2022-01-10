//1 a. Tamsiai žaliai nuspalvinti h1 tagą;

let h1 = document.querySelector("h1");
h1.style.color = "green";

//1 b. Tagui i pridėti klasę small;
let i = document.querySelector("i");

i.classList.add("small");

//1 c. Iš tago h1 pašalinti klasę main;

h1.classList.remove("main");

//1 d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;

let h21 = document.querySelector("h2:first-of-type");

h21.classList.remove("main");
h21.classList.add("first");

// 1 e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

let span = document.querySelector("h2 span");

span.style.fontSize = "10px";
span.style.color = "grey";

//2 a. Suskaičiuoti kiek yra h2 tagų;

console.log(document.querySelectorAll("h2").length);

// 2 b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

console.log("nor first class:", document.querySelectorAll("h2:not(.first"));

// 2 c. Visus h2 tagus nuspalvinti šviesiai mėlynai

document.querySelectorAll("h2").forEach((h2) => {
  h2.style.color = "lightBlue";
});

// 2 d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

document.querySelectorAll("div.prices h2").forEach((price) => {
  price.classList.add("price-tag");
});

// 2 e. Pabraukti visus tagus su klase new;

document.querySelectorAll(".new").forEach((a) => {
  a.style.textDecoration = "underline";
});

// 2 f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

let categories = 0;

const ul = document.querySelectorAll("ul");

console.log("kategoriju skaicius:", document.querySelectorAll("ul").length);

console.log(
  "zirafos:",
  document.querySelectorAll("#zirafos li:not(.like-button)").length
);

//2 g. "Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;"
