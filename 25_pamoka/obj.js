let cat = {
  name: "Mauglis",
  age: 3,
  bigName: null,
};

console.log(cat);

//Padaryti funkcija, kuri turi vieną argumentą, kuris gali būti stringas. Iškvietus tą funkciją ji turi atspausdinti į argumentą įvestą funkciją didžiosiom raidėm.
const big = (bla) => {
  console.log(bla.toUpperCase());
};

big("bla bla bla");
//Padaryti funkciją, kuri turi du argumentus stringus.Iškvietus tą funkciją turi būti atspausdinti abudu strigai atskirti "-" minuso ženklu.
function bla(g, d) {
  console.log(g + "----" + d);
}
bla("hei", "hou");

//Į katino objektą reikia pridėti metoda bigName, kurį iškvietus katino vardas būtų atspausdinamas didžiosiom raidėm
cat.bigName = function () {
  console.log(this.name.toUpperCase());
};

cat.bigName();

//metodas addYear, kurį iškvietus katino amžius padidėja vienais metais
cat.addYear = function () {
  this.age++;
};

cat.addYear();
cat.addYear();
cat.addYear();

const catmiau = {
  name: "Zbitmen",
  age: 3,
  bigName: function () {
    console.log(this.name.toUpperCase());
  },
  addYear: function () {
    this.age++;
  },
};

console.log(cat, catmiau.name);
