// 1. Su JS skripto pagalba aplink kiekvieną katiną apibraukite baltą,
//suapvalintais kraštais rėmelį (ant kiekvieno <li> elemento uždėti border);

document.querySelectorAll("li").forEach((e) => {
  e.style.border = "solid";
  e.style.borderRadius = "10px";
  e.style.borderColor = "white";
});

// 2 .Suskaičiuokite kiek katinų turi klasę “black” ir kiek “ginger”.
//Rezultatus atspausdinkite konsolėje;

console.log("black:", document.querySelectorAll("li.black"));

console.log("ginger:", document.querySelectorAll("li.ginger"));

// 3. Į katino <li> elementą su JS įterpkite <span> elementą,
//kurio viduje įrašytas katino eilės numeris iš sąrašo;

const span = document.createElement("span");

// 4. Padarykite taip, kad paspaudus ant katino vardo,
//to vardo teksto fonto storis pasidarytų bold, o spalva pasikeistų į darkcyan;

document.querySelectorAll("li").forEach((i) => {
  i.addEventListener("click", function () {
    i.style.color = "darkcyan";
    i.style.fontWeight = "bold";
  });
});

// 5. Parašykite skriptą, kuris
//kas kelias sekundes keistų visų katinų vardų teksto spalvas į atsitiktines.

setInterval(() => {
  document.querySelectorAll("li").forEach((e) => {
    e.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
}, 2000);
