

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log('1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;')

let pirmas = rand(5, 25);
let antras = rand(5, 25);
let trecias = rand(5, 25);
let suma = pirmas + antras + trecias ;

console.log('A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;')

console.log ('pirmas', pirmas)
console.log ('antras', antras)
console.log ('trecias', trecias)

console.log(`suma ${suma}`)

console.log('B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;')


console.log('' + pirmas + '' + antras + '' + trecias)  //===> skaičiai paverčiami stringais (automatinė konversija)

console.log('C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;')


console.log(pirmas + ' ' + antras + ' ' + trecias)   //===> skaičiai paverčiami stringais (automatinė konversija)

console.log('D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;')

console.log(pirmas + ' ' + antras + ' ' + trecias + ' ' + suma) 

console.log('2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log')

let something = rand(1, 10);

console.log(`random number: ${something}`)

console.log('3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;')

let hello = 'Labas'

for(let i = 0; i <= 5; i++){
    console.log (hello);
}

console.log('4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;')

for(let i = 1; i <= 7; i++){
    console.log (something);
}

console.log('5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;')

for(let i = 1; i <= something; i++){
    console.log (something);
}

console.log('6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;')

{

    if(something > 7){

        for(let i = 1; i <= something; i++){
        console.log (something, 'pavyko');
    }}
    else{
        console.log(something, 'nieko gero');}
}

console.log('7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;')

let numberX;

for(let i = 0; i <= 5; i++) {
    let digitX = rand(10, 20);
    console.log(digitX);
}

console.log('A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;')

for(let i = 0; i < 5; i++) {
    let digitX = rand(10, 20)
    numberX = digitX
    console.log(numberX);
}

console.log('B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;')

numberX = 0; //====> reikia nunulinti, nes jis jau atsineša reikšmę, priskirtą prieš tai

for(let i = 0; i < 5; i++) {
    let digitX = rand(10, 20);
    numberX = digitX + numberX;
    console.log(numberX);
}
console.log(numberX);

console.log('C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;')

for(let i = 0; i < 5; i++) {
    let digitX = rand(10, 20);
    numberX = digitX + ' ' + numberX;
}
console.log(numberX);

console.log('D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;')

numberX = '';
let numberZ = 0;

for(let i = 0; i < 5; i++) {
    let digitX = rand(10, 20);
    numberX = digitX + ' ' + numberX;
    numberZ = numberZ + digitX;
    
}
numberZ = numberZ + numberX
console.log(numberZ)


console.log('*********************************KARTOJIMAS******************************')

console.log('1. Reikia kodo, kuris imituotų monetos metimą - jeigu herbas printinam H jeigu skaičius - S')

let moneta = rand(1, 2) ? 'H' : 'S' ;  //taip pat let moneta = rand(1, 2) ? 'H' ; 'S'

console.log(moneta)

// if (moneta == 1) {
//     console.log('H');
// }
// else {
//     console.log('S');
// }

console.log('2. Mesti monetą 7 kartus')

for(let i = 1; i <= 7; i++){
    let moneta = rand (0, 1) ? 'H' : 'S';
    console.log (moneta);
}

console.log('2. suskaičiuoti kiek herbų, kiek skaičių iš tų 7 metimų buvo')

let h = 0;
let s = 0;

for(let i = 1; i <= 7; i++){
    let moneta = rand (0, 1) ? 'H' : 'S';
    'H' == moneta ? h++ : s++;
    console.log (moneta);
}
console.log (`Rezultatas. S buvo ${s}, o H buvo ${h}`);