function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//DO WHILE LOGIKA:

/*

&& ===> ||

|| ===> &&

=  ===> !=

!= ===> ==

>  ===> <=

<  ===> >=

>= ===> <

<= ===> >

*/



console.log('console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;')

let skaicius131;
let skaicius132;

do{
    skaicius131 = rand (0, 10)
    skaicius132 = rand (0, 10)
    console.log(skaicius131, skaicius132)
}
while (skaicius131 != skaicius132)

console.log('8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;')

let number8;

do{
    number8 = rand (10, 25)
    // number12 = 12;
    console.log(number8)
}
while (number8 >= 12)


console.log('8A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;')

do{
    number8 = rand (10, 25);
    number12 = number8;
    console.log('number8', number8, 'number12', number12)
}
while (number8 != number12)

console.log('8 B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;')

number8 = 0;
let iteracijos = 0;

do{
    number8 = rand (10, 25)
    console.log(number8)
    iteracijos++;
}
while (number8 >= 12)

console.log('iteraciju skaicius', iteracijos)



console.log('8 C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;')

let suma7C = 0;
let skaitiklisC;

do {
    skaitiklisC = rand(10, 25);
    if (skaitiklisC > 18) { // reikia neigti i skaitiklisC <= 18

        // atmesta
    } else {
        suma7C = suma7C + skaitiklisC;

    }

} while (skaitiklisC >= 12);

console.log(suma7C);



console.log('8D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;')

let suma7D = 0;
let skaitiklisD;
let atmesta = 0;

do {
    skaitiklisD = rand(10, 25);
    if (skaitiklisD > 18) {
        atmesta++;
        console.log('===>atmesta', atmesta)
    } else {
        suma7D = suma7D + skaitiklisD;
        console.log('===>priimta', suma7D)
    }
} while (skaitiklisD >= 12);

console.log(suma7D, atmesta);

console.log('8E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.')

let skaitiklis;
let poriniai = 0;
let neporiniai = 0;

do {
    skaitiklis = rand(10,25);
    skaitiklis % 2 ? neporiniai++ : poriniai++;
    console.log(skaitiklis);
} while (skaitiklis >=12);

console.log(poriniai, neporiniai);

console.log('8F. Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. ')


let pirstukaiF = 0;
let statMaza = 0;
let statDid = 0;

do{
    statDid++
    let skaitiklisF;
    pirstukaiF = 0;
        do {
        statMaza++
        skaitiklisF = rand (10, 25);
        console.log(skaitiklisF);
        pirstukaiF++;
        } while (skaitiklisF >= 12);

        console.log('mazas prasisuko', pirstukaiF)

} while (pirstukaiF <=20)

console.log(statMaza, statDid)

console.log('9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;')

let numberNine = 0;
let prasisuko10 = 0;

do {numberNine = rand (0, 10);
    prasisuko10++;
    console.log('paskutinis', numberNine);
  }
  while (numberNine != 5);
  console.log('prasisuko', numberNine)

console.log('9 A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;')

let numberNineA;
let didelis9A = 0;
let mazas9A = 0;


do {numberNineA = rand (5, 10);
    didelis9A++;
    for (let i =0; i < numberNineA; i++){
        mazas9A++;
    }
  }
  while (numberNineA != 5);
  console.log('DIDELIS', didelis9A, 'mazas', mazas9A)

  console.log('9B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;')

  let toksba;
  let didelisba = 0;
    let mazasba = 0;
    let trysb = 0;
  
  do{
    didelisba++;
    toksba = rand(5,10);
    for(let i=0; i<toksba; i++){
        mazasba++;
      }
      if (toksba == 5)
      trysb++;
  }while(trysb != 3)
  
  console.log(didelisba, mazasba);



  console.log('9C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;')

  let toksca;
  let didelisca = 0;
  let mazasca = 0;
  let trysc = 0;
  
  do{
      didelisca++;
      toksca = rand(5,10);
      for(let i=0; i<toksca; i++){
          mazasca++;
      }
      if (toksca == 5) {
          trysc++;
      } else {
          trysc=0;
      }
      trysc++;
  }while(trysc != 3)
  
 
  console.log(didelisca, mazasca);