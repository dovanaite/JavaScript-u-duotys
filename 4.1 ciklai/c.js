//// CIKLAI

// ciklo kintamojo  deklaravimas

for(let i = 1; i <= 1; i++){
//do 10 times {
    console.log('hello', i);
    console.log('hi', i);
//}
}

console.log('1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;')
for(let i = 1; i <= 5; i++){
        console.log('Labas');
    }


console.log('2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);')

for(let i = 1; i <= 5; i++){
        console.log(i);
    }


console.log('3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);')

for(let i = 0; i <= 40; i = i + 10){
        console.log(i)
    }

console.log('4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);')

for(let i = 49; i <= 53; i++){
    console.log(i)
}

console.log('5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);')

for(let i = 4; i >= 0; i--){
    console.log(i)
}

console.log('6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);')

for(let i = 0; i <= 8; i = i + 2){
    console.log(i)
}

console.log('7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 1; i <= 5; i++){
    console.log(rand(0, 10));
}


console.log('Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;')

let pirmas = rand(5, 25);
let antras = rand(5, 25);
let trecias = rand(5, 25);
let suma = pirmas + antras + trecias ;

console.log('A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;')

console.log ('pirmas', pirmas)
console.log ('antras', antras)
console.log ('trecias', trecias)

console.log('suma', suma)

console.log('B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;')

let pirma = pirmas
let antra = antras
let trecia = trecias
let raide = pirma + antra + trecia ;

console.log ('pirma', pirma)
console.log ('antra', antra)
console.log ('trecia', trecia)
console.log('raide', raide)

console.log('C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;')

let raide1 = pirma
let raide2 = antra
let raide3 = trecia

console.log(raide1 + raide2 + raide3)

console.log('D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;')



