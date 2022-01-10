class Stikline {
  constructor(turis) {
    this.kiekis = 0;
    this.turis = turis;
  }

  ipilti = (kiekis) => {
    this.kiekis += kiekis;
    this.kiekis = Math.min(this.turis, this.kiekis);
    return this;
  };

  ispilti = () => {
    const tarpinisKiekis = this.kiekis;
    this.kiekis = 0;
    return tarpinisKiekis;
  };

  stiklinejeYra = () => {
    return this.kiekis;
  };
}

const s200 = new Stikline(200);
const s150 = new Stikline(150);
const s100 = new Stikline(100);

// s200.ipilti(200);
// s150.ipilti(s200.ispilti());
// s100.ipilti(s150.ispilti());

s100.ipilti(s150.ipilti(s200.ipilti(200).ispilti()).ispilti());

console.log("200: " + s200.stiklinejeYra());
console.log("150: " + s150.stiklinejeYra());
console.log("100: " + s100.stiklinejeYra());

///////////////////////////////////////////////MAPPINGAS///////////////////////////////////////////////////////////

const mapas = new Map();

mapas.set("Fre", 3); //irasyti
mapas.set("Zbitmen", 2);
mapas.set("Smaugl", 2);
mapas.set("Smaugl", 4); //perrasyti
mapas.delete("Zbitmen"); //istrinti
console.log(mapas.has("Zbitmen")); //paklausti, ar turi Zbitmen
console.log(mapas.get("Fre")); //paklausti, kokia reiksme Fre
console.log(mapas.has("Fre")); //paklausti, ar turi Fre
console.log(mapas.size); //kokio dydzio mapas (kiek uzima vietos)
console.log(mapas);

for (const value of mapas) {
  console.log(value);
}

// 5. Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas.
//Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis).
//Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį).
//Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }
  idetiSureli = (kiekis) => {
    if (this.turinys.has("surelis")) {
      kiekis += this.turinys.get("surelis");
    }

    this.turinys.set("surelis", kiekis);
  };
  idetiPieno = (kiekis) => {
    if (this.turinys.has("pienas")) {
      kiekis += this.turinys.get("pienas");
    }

    this.turinys.set("pienas", kiekis);
  };
  idetiDuonos = (kiekis) => {
    if (this.turinys.has("duona")) {
      kiekis += this.turinys.get("duona");
    }

    this.turinys.set("duona", kiekis);
  };
  krepselioTurinys = () => {
    console.log("krepselio turinys:");
    for (const product of this.turinys)
      console.log(`${product[0]} yra: ${product[1]}`);
  };
}

const pk1 = new PirkiniuKrepselis();

pk1.idetiSureli(2);
pk1.idetiPieno(3);
pk1.idetiPieno(5);
pk1.idetiDuonos(4);
pk1.krepselioTurinys();
