function random(min, max) {
    min = Math.ceil(min);  
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
} //The maximum is exclusive and the minimum is inclusive  }


let konvertas;

konvertas = ``;

// console.log(typeof konvertas);

// console.log(Boolean(konvertas))

// false visada =====> 0
// true visada =====> 1

// true =====> žodis "true"
// false =====> žodis "false"

// visi skaičiai  =====> true
// tik 0 ====> false

// visi stringai ====> true
// kai stringe nieko nėra "" ====> false

// > (daugiau) < (mažiau) == (lygu) >=  (daugiau arba lygu) <=  (mažiau arba lygu) != (nelygu)

console.log('2 > 5', 2 > 5); //====> false
console.log('14 > 5', 14 > 5); //====> true
console.log('18 == 5', 18 == 5); //====> false
console.log('18 != 5', 18 != 5); //====> true
console.log('18 >= 18', 18 >= 18); //====> true
console.log('18 < 18', 18 < 18); //====> false


console.log('a == a', 'a' == 'a');
console.log('a > a', 'a' > 'a');
console.log('b > a', 'b' > 'a'); //====> lygina pagal abėcėlę
console.log('bz > aa', 'bz' > 'aa');

console.log('a > A', 'a' > 'A');
console.log('a > B', 'a' > 'B');
console.log('a > b', 'a' > 'b');

console.log('aa  > aa ', 'aa  ' > 'aa ');

console.log('18 >= "18"', '18' >= '18');
console.log('1 == true', 1 == true);
console.log('18 === "18"', 18 === '18'); //====> lygina skaičių ir stringa, nevyksta konversija

console.log('CHECK start');



if (3 > 5) {
    console.log('Ja ja!');
} else if (2 > 3) {
    console.log('IDK');
} else {
    console.log('Nein nein!');
}

console.log('CHECK end')



console.log('----------------------1 užduoties PRADŽIA----------------------')



let Petrius = random(3, 7);
let One = random(5, 10);

console.log('Petriaus rezultatas', Petrius)
console.log('Ones rezultatas', One)

if (Petrius > One) {
    console.log('Petrius laimėjo')
} else if (Petrius < One) {
    console.log('One laimėjo')
} else {
    console.log('visi laimėjo')
}



console.log('----------------------1 užduoties PABAIGA---------------------')


// console.log('----------------------2 užduoties PRADŽIA----------------------')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// let pirmas = rand(0, 4);
// let antras = rand(0, 4);

// if (pirmas > antras) {
//     if (antras = 0, false) {
//         console.log('negalima dalinti iš 0')
//     } else {
//         console.log(pirmas / antras)
//     }

// } else if (antras > pirmas) {
//     if (pirmas = 0, false) {
//         console.log('negalima dalinti iš 0')
//     } else {
//         console.log(antras / pirmas)
//     }
// }

// console.log('----------------------2 užduoties PABAIGA---------------------')

console.log('----------------------1 egzamino Rezultatas---------------------')

//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4


console.log(egzaminoRezultatas)

if (egzaminoRezultatas >= 4) {
    console.log('egzaminas išlaikytas')
} else {
    console.log('egzaminas neišlaikytas')
}

console.log('----------------------1 egzamino Rezultatas PABAIGA---------------------')




console.log('----------------------2 eksperimento Rezultatas---------------------')

//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4

console.log(eksperimentoRezultatas)

if (eksperimentoRezultatas == 1) {
    console.log('eksperimentas pavyko :)')
}
else if (eksperimentoRezultatas == 4) {
    console.log('eksperimentas pavyko :)')
}
else {
    console.log('eksperimentas nepavyko :(')
}

console.log('----------------------2 eksperimento Rezultatas PABAIGA---------------------')






console.log('----------------------3 automobilio Greitis---------------------')

//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5

console.log('greitis:', automobilioGreitis)

if(automobilioGreitis > 60){
    let bauda = (automobilioGreitis-60)*5
    console.log('baudytė:', bauda)
}
else console.log('puikus greitis')

console.log('----------------------3 automobilio Greitis PABAIGA---------------------')




console.log('----------------------4 eiles Numeris ---------------------')

//4.
let eilesNumeris = rand(1, 30);

console.log(eilesNumeris)

if (eilesNumeris % 2)
{
    console.log('eilės numeris: neporinis')
}
else {console.log('eilės numeris: porinis')
}

console.log('----------------------4 eiles Numeris PABAIGA---------------------')



console.log('----------------------5 raide ABC ---------------------')

//5.
let raideABC 
//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę

let skaicius123 = rand(1, 3);

console.log(skaicius123)


if (skaicius123 == 1) {
    raideABC = 'A';
}
else if (skaicius123 == 2){
    raideABC = 'B';
}
else {
    raideABC = 'C';
}

console.log(raideABC)

console.log('----------------------5 raide ABC PABAIGA---------------------')


console.log('----------------------6 užduotis ---------------------')

//6.
let pirmas = rand(0, 3);
let antras = rand(0, 3);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 

let sandauga = pirmas * antras;
let sudetis = pirmas + antras;

console.log('sandauga', sandauga, 'sudetis', sudetis)

if (sandauga > sudetis){
    console.log('sandauga laimėjo')
}
else if (sandauga < sudetis){
    console.log('sudėtis laimėjo')
}
else (console.log('visi laimėjo'))

console.log('----------------------6 užduoties pabaiga---------------------')


console.log('----------------------7 užduotis ---------------------')

//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

let gyvuliai = asilai + karves;

console.log('gyvuliukų skaičius:', gyvuliai)

if (gyvuliai > 0){
    console.log('gyvulių yra')
}
else {
    console.log('gyvulių nėra')
}

console.log('----------------------7 užduoties pabaiga---------------------')


console.log('----------------------8 užduotis ---------------------')

//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 
let dalyviai = dalyvis1 + dalyvis2;

console.log('dalyvis1', dalyvis1)
console.log('dalyvis2', dalyvis2)
console.log('dalyvių skaičius', dalyviai)


if (dalyviai > 6) {
    console.log('Laimėjo')
}
else if (dalyvis1 == dalyvis2) {
    console.log('Laimėjo')
}
else {
    console.log('Pralaimėjo')
}

console.log('----------------------8 užduoties pabaiga---------------------')


console.log('----------------------9 užduotis ---------------------')

//9.
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.


let kiek = 0;


if (!(daug % 5)){
    kiek++;
}
if (!(daug % 10)){
    kiek++;
}
if (!(daug % 33)){
    kiek++;
}


console.log('va šitas skaičius:', daug)
console.log('va iš tiek skaičių dalinasi:', kiek)

console.log('----------------------9 užduoties pabaiga---------------------')





console.log('----------------------10 užduotis ---------------------')

//10.
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
console.log (as, tu)

if (as == 'popierius') {
    if (tu == 'popierius'){
        console.log('lygiosios')
    }
    else if (tu == 'akmuo'){
        console.log('laimejo AS')
    }
    else {console.log('laimejo TU')}

}

else if (as == 'zirklės'){
    if (tu == 'popierius'){
        console.log('laimejo AS')
    }
    else if (tu == 'akmuo'){
        console.log('laimejo TU')
    }
    else {console.log('lygiosios')}
}
else {
    console.log('laimejo AS')
}



console.log('----------------------10 užduoties pabaiga---------------------')