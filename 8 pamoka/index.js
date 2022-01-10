function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log('1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.')

let masyvas = [];

for (let i = 0; i <30; i++) {

    let randomas = rand(5, 25);
    masyvas.push(randomas);
}

console.log(masyvas);


console.log('2A. Naudodamiesi 1 uždavinio masyvu: Suskaičiuokite kiek masyve yra reikšmių, didesnių už 10;')

let more10 = 0;

for (let i = 0; i < masyvas.length; i++) {

    if (masyvas[i] > 10) {
        more10++;
    }
}

console.log(more10);

console.log('2B. Raskite didžiausią masyvo reikšmę ir jos indeksą;')

//masyvas[i]


// let max = Math.max(...masyvas);
let max = masyvas [0];
let maxIndex = 0;

for (let i = 0; i < masyvas.length; i++) {

    if (masyvas[i] > max){
        max = masyvas[i];
        maxIndex = i;
    }
}

console.log(max, maxIndex);

console.log('2 C. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;')

let suma = 0;

for (let i = 0; i < masyvas.length; i++) {

    if (i % 2 ==0) {
        suma = masyvas[i] + suma

    }    
}
    console.log(suma)

console.log('2 D. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;')