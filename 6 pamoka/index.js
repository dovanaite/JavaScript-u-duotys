

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





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

let buvoCiklu = 0;
let h = 0;
let s = 0;

for(let i = 1; i <= 7; i++){
    let moneta = rand (0, 1) ? 'H' : 'S';
    'H' == moneta ? h++ : s++;
    console.log (moneta);
}
console.log (`Rezultatas. S buvo ${s}, o H buvo ${h}`);

buvoCiklu = 0;
h = 0;
s = 0;


do {
    buvoCiklu++;
    let moneta = rand (0, 1) ? 'H' : 'S';
    'H' == moneta ? h++ : s++;
    console.log (moneta);
}
while (h < 3)

console.log (`Rezultatas. S buvo ${s}, o H buvo ${h}`);
console.log('buvo ciklu', buvoCiklu)


console.log('8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;')

let randomNumber 

do {
    randomNumber = rand (0, 10);
    console.log(randomNumber)
  }
  while (randomNumber !=5 );

console.log('random number', randomNumber)


console.log('**********************tik su while***************************')

randomNumber = rand (0, 10)

while (randomNumber !=5) {
    randomNumber = rand (0, 10);
    console.log(randomNumber)
}
   

console.log('8.1 Padaryti tokį do while, kuris prasisuka 8 kartus.')

let i = 0;

do {
    i++;
    console.log('ratas nr', i)
  }
  while (i < 8);


console.log('9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;')
 
let a = 0;

do {let b = rand (0, 10);
    a = a + b;
    console.log('random skaiciu suma', a)
  }
  while (a < 100 );


  console.log('9. tik su while')

a = 0;

  while (a < 100)
{
    let b = rand (0, 10);
    a = a + b;
    console.log('random skaiciu suma', a)
}


console.log('10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;')

let taskTen = 0;
let prasisuko10 = 0;

do {taskTen = rand (0, 10);
    prasisuko10++;
    console.log('paskutinis', taskTen);
  }
  while (taskTen != 5 && taskTen != 7);
  console.log('prasisuko', prasisuko10)


  console.log('11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;')

let sumEleven = 0;
let prasisuko11 = 0;

  do {let eleven = rand (0, 10);
      sumEleven = sumEleven + eleven;
      prasisuko11++;
      console.log('random skaiciu suma', sumEleven)
      console.log('prasisuko', prasisuko11)
  }
  while (prasisuko11 < 11 || sumEleven < 20);
  

console.log('12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;')

let nelyginiai = 0;

do {
    let randomas = rand (0 , 10);
    console.log(randomas)
    if (randomas % 2 != 0){
        nelyginiai++;
    }
}while (nelyginiai < 3);