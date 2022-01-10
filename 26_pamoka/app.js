class Maisas {
  static visoBulviu = 0;

  constructor() {
    this.bulviu = 0;
  }

  deti = (kiek) => {
    this.bulviu += kiek;
    Maisas.visoBulviu += kiek;
  };
  kiekMaise = () => {
    console.log("maise yra:" + this.bulviu);
  };

  kiekYraViso = () => {
    console.log("Viso bulviu:", Maisas.visoBulviu);
  };
}

const m1 = new Maisas();
const m2 = new Maisas();
const m3 = new Maisas();

m1.deti(10);
m1.deti(10);
m2.deti(10);
m3.deti(10);

m1.kiekMaise();
m2.kiekMaise();
m3.kiekMaise();
m3.kiekYraViso();

// o tai kiek isvis yra tu bulviu blyn? (ziurek 10 eilute, nafik)

console.log(m1);
console.log("Viso bulviu:", Maisas.visoBulviu);

console.log("4. **********************************");

// 4. STATIC Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
//Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius),
//kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius).
//Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Troleibusas {
  static visiKeleiviai = 0;

  static bendrasKeleiviuSkaicius = (keleiviuSkaicius) => {
    Troleibusas.visiKeleiviai += keleiviuSkaicius;
  };

  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa = (keleiviuSkaicius) => {
    this.keleiviuSkaicius += keleiviuSkaicius;
    Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
  };

  islipa = (keleiviuSkaicius) => {
    Troleibusas.bendrasKeleiviuSkaicius(
      -1 * Math.min(this.keleiviuSkaicius, keleiviuSkaicius)
    );
    this.keleiviuSkaicius = Math.max(
      0,
      (this.keleiviuSkaicius -= keleiviuSkaicius)
    );
  };

  keleiviuSkaiciusVisuoseTroleibusuose = () => {
    console.log(
      "Visais Trūlais važiuoja: " + Troleibusas.visiKeleiviai + " keleivių"
    );
  };

  vaziuoja = () => {
    console.log("Trūlu važiuoja: " + this.keleiviuSkaicius + " keleivių");
  };
}

const t4 = new Troleibusas();
const t10 = new Troleibusas();

t4.ilipa(10);
t10.ilipa(10);
t4.ilipa(10);
t10.ilipa(10);
t4.islipa(80);

t4.keleiviuSkaiciusVisuoseTroleibusuose();

console.log("7. **********************************");

// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį
//(visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius),
//kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius).
//Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 {
  static visiAkmenys = 0;

  static bendrasAkmenuSkaicius = (akmenuSkaicius) => {
    Kibiras1.visiAkmenys += akmenuSkaicius;
  };

  static akmenuSkaiciusVisuoseKibiruose = () => {
    console.log("akmenu skaicius visuose kibiruose:" + Kibiras1.visiAkmenys);
  };

  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni = () => {
    this.akmenuKiekis++;
    Kibiras1.bendrasAkmenuSkaicius(1);
  };
  pridetiDaugAkmenu = (kiekis) => {
    this.akmenuKiekis += kiekis;
    Kibiras1.bendrasAkmenuSkaicius(kiekis);
  };
  kiekPririnktaAkmenu = () => {
    console.log("pririnkta", this.akmenuKiekis);
  };
}
const k1 = new Kibiras1();
const k2 = new Kibiras1();

// k1.prideti1Akmeni();
k1.pridetiDaugAkmenu(1);
k2.pridetiDaugAkmenu(9);

k1.kiekPririnktaAkmenu();
Kibiras1.akmenuSkaiciusVisuoseKibiruose();

console.log("6. **********************************");

// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų.
//Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() -
//popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = [];
    this.metaliniaiPinigai = [];
  }

  ideti = (kiekis) => {
    if (kiekis > 2) {
      this.popieriniaiPinigai.push(kiekis);
    } else {
      this.metaliniaiPinigai.push(kiekis);
    }
  };

  skaiciuoti = () => {
    let popSuma = 0;
    let metSuma = 0;

    // const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // popSuma = this.popieriniaiPinigai.reduce(reducer);
    // metSuma = this.metaliniaiPinigai.reduce(reducer);

    this.popieriniaiPinigai.forEach((p) => (popSuma += p));
    this.metaliniaiPinigai.forEach((p) => (metSuma += p));

    console.log("popierius: " + this.popieriniaiPinigai.length);
    console.log("metalas: " + this.metaliniaiPinigai.length);
    console.log("Piniginėje yra: " + (popSuma + metSuma));
  };

  monetos = () => {
    let metSuma = 0;
    // const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // metSuma = this.metaliniaiPinigai.reduce(reducer);
    this.metaliniaiPinigai.forEach((p) => (metSuma += p));
    console.log("metalas: " + this.metaliniaiPinigai.length);
    console.log("Piniginėje yra: " + metSuma);
  };

  banknotai = () => {
    let popSuma = 0;
    // const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // popSuma = this.popieriniaiPinigai.reduce(reducer);
    this.popieriniaiPinigai.forEach((p) => (popSuma += p));
    console.log("popierius: " + this.popieriniaiPinigai.length);
    console.log("Piniginėje yra: " + popSuma);
  };
}

const p = new Pinigine();

p.ideti(10);
p.ideti(0.9);
p.ideti(0.7);
p.ideti(10);
p.ideti(10);
p.ideti(0.8);
p.ideti(0.7);

// p.skaiciuoti();
p.banknotai();
p.monetos();

console.log(p);
