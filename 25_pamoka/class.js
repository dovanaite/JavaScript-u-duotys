class Cat {
  constructor(catName, catAge) {
    this.name = catName;
    this.age = catAge;
  }
  bigName = () => {
    console.log(this.name.toUpperCase());
  };
  addYear = () => {
    this.age++;
  };

  //Pridėti į katino klasę metoda sayNames() kuris katino vardą didžiosiom raidėm atspausdina tiek kartų, kiek katinui yra metų
  sayName = () => {
    for (let i = 0; i < this.age; i++) {
      this.bigName();
    }
  };
}

const cat1 = new Cat("Zbitmen", 2);
const cat2 = new Cat("Mauglis", 2);
const cat3 = new Cat("Fre", 3);

cat3.addYear();
cat2.bigName();
cat1.sayName();

console.log(cat1, cat2, cat3);

//1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis:
//prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
//Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

console.log("1. ***********************");

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni = () => {
    this.akmenuKiekis++;
  };
  pridetiDaugAkmenu = (kiekis) => {
    this.akmenuKiekis += kiekis;
  };
  kiekPririnktaAkmenu = () => {
    console.log("pririnkta", this.akmenuKiekis);
  };
}
const k1 = new Kibiras1(1);

// k1.prideti1Akmeni();
k1.pridetiDaugAkmenu(7);
k1.prideti1Akmeni();
k1.kiekPririnktaAkmenu();

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
//Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę.
//Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai.
//Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą.
//Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

console.log("2. ***********************");

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }
  ideti = (kiekis) => {
    if (kiekis < 2) {
      this.metaliniaiPinigai += kiekis;
    } else {
      this.popieriniaiPinigai += kiekis;
    }
  };
  skaiciuoti = () => {
    console.log(
      "popierius:",
      this.popieriniaiPinigai,
      "metalas:",
      this.metaliniaiPinigai,
      "suma:",
      this.popieriniaiPinigai + this.metaliniaiPinigai
    );
  };
}

const pin1 = new Pinigine();
pin1.ideti(4);
pin1.ideti(9);
pin1.ideti(1);
pin1.ideti(3);
pin1.ideti(3);
pin1.ideti(2);
pin1.ideti(1);
pin1.skaiciuoti();

console.log("3. ***********************");

// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
//Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
//O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių.
//Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa = (keleiviuSkaicius) => {
    this.keleiviuSkaicius += keleiviuSkaicius;
  };
  islipa = (keleiviuSkaicius) => {
    this.keleiviuSkaicius -= keleiviuSkaicius;
  };
  vaziuoja = () => {
    if (this.keleiviuSkaicius > 0) {
      console.log(this.keleiviuSkaicius);
    } else {
      console.log("niekas nevaziuoja");
    }
  };
}

const t1 = new Troleibusas();
t1.ilipa(5);
t1.islipa(8);
t1.vaziuoja();
