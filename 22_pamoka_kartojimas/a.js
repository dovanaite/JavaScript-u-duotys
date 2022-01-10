function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x;
let y;
let z;
let rezultatas;

x = rand(1, 200);
y = rand(1, 200);
z = rand(1, 200);

// rezultatas = x + y + z;

if (y < 50) {
  rezultatas = x * y * z;
} else {
  rezultatas = x + z;
}

console.log("rezultatas:", rezultatas);
console.log(x, y, z);

let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

if (egzaminoRezultatas >= 4) {
  console.log(egzaminoRezultatas, "išlaikyta");
} else console.log(egzaminoRezultatas, "neišlaikyta");

//Jeigu antrasis kintamasis yra mažesnis už 40 tai visus skaičius reikia sudauginti, jeigu antrasis kintamasis
//yra mažesnis nei 50 tai reikia atspausdinti žodį 'Valio' vietoj rezultato, kitais atvejais reikia sudėti tik pirmą ir trečią skaičių

let a = rand(1, 200);
let b = rand(1, 200);
let c = rand(1, 200);
let rezultatas2;

console.log("a", a, "b", b, "c", c);

if (b < 40) {
  console.log(a * b * c);
} else if (b < 50) {
  console.log("VALIO");
} else {
  console.log(a + c);
}

//Naudokite funkcija rand(). Sukurkite du kintamuosius ir
//naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()

let d = rand(0, 4);
let e = rand(0, 4);

console.log("d", d, "e", e);

if (d > e) {
  console.log(d / e);
} else {
  console.log(e / d);
}
