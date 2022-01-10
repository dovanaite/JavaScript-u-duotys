let  i;
i = 99;



if (true) {
    console.log('hello from IF')
    // let i;  //====================> LET - blokinis elementas, gyvena tik savo bloko viduje.
    i = 8;
};

console.log(i);

 //===================================>pirmiausia LET reikia deklaruoti kintamąjį, tik po to jį priskirti

 function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('------------------------2 užduotis su sudėtine sąlyga-----------------')

 //2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
console.log('eksperimento rezultatas', eksperimentoRezultatas)

if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4)
{ console.log('eksperimentas pavyko :)')
}
else {
    console.log('eksperimentas nepavyko :(')
}

console.log('------------------------2 užduotis su sudėtine sąlyga PABAIGA-----------------')



console.log('------------------------7 užduotis su sudėtine sąlyga-----------------')
//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

console.log('gyvuliukų skaičius:', asilai, karves)

if (asilai || karves){
    console.log('Gyvulių yra')
}
else {
    console.log('Gyvulių nėra')
}


console.log('------------------------7 užduotis su sudėtine sąlyga PABAIGA-----------------')

console.log('------------------------7 užduotis su sudėtine sąlyga II-----------------')
//7.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

console.log('gyvuliukų skaičius:', asilai, karves)

if (!(!asilai && !karves)){
    console.log('Gyvulių yra')
}
else {
    console.log('Gyvulių nėra')
}
console.log('------------------------7 užduotis su sudėtine sąlyga II PABAIGA-----------------')


let color1 = rand(0, 1) ? 'red' : 'blue';

let color2 = rand(0, 1) ? 'red' : 'blue';

let color3 = rand(0, 1) ? 'red' : 'blue';

let color4 = rand(0, 1) ? 'red' : 'blue';


console.log('1.             OK kai 1 ir 2 vienodi arba 3 ir 4 vienodi')

//NOT OK kitais atvejais
console.log('color1', color1)
console.log('color2', color2)
console.log('color3', color3)
console.log('color4', color4)

if (color1 == color2 || color3 == color4){
    console.log('OK')
}
else {console.log('NOT OK')}


console.log('2.           OK kai 1 ir 2 skiriasi, bet (ir) 1 ir 4 vienodi')

//NOT OK kitais atvejais

console.log('color1', color1)
console.log('color2', color2)
console.log('color3', color3)
console.log('color4', color4)

if (color1 != color2 && color1 == color4){
    console.log('OK')
}
else {console.log('NOT OK')}


console.log('3.           OK kai 1 ir 2 skiriasi, bet(ir) 1 ir 4  arba 1 ir 3 vienodi')

//NOT OK kitais atvejais

console.log('color1', color1)
console.log('color2', color2)
console.log('color3', color3)
console.log('color4', color4)

if (color1 != color2 && (color1 == color4 || color1 == color3))
{
    console.log('OK')
}
else {console.log('NOT OK')}


console.log('4.              OK kai 1 yra blue, bet(ir) 2 ir 3 ir 4 vienodi')

//NOT OK kitais atvejais

console.log('color1', color1)
console.log('color2', color2)
console.log('color3', color3)
console.log('color4', color4)

if ('blue' == color1 && color2 == color3 &&  color3 == color4 && color2 == color4) {
    console.log('OK')
}
else {console.log('NOT OK')}

console.log('5.              OK kai 1 ir 2 skiriasi, bet(ir) 3 ir 4 vienodi  arba OK kai 1 ir 4 yra blue')

//NOT OK kitais atvejais

console.log('color1', color1)
console.log('color2', color2)
console.log('color3', color3)
console.log('color4', color4)

if (color1 != color2 && (color3 == color4 || (color1 == 'blue' && color4 == 'blue')))
{
    console.log('OK')
}
else {console.log('NOT OK')}



