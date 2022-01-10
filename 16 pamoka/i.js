const tevas = document.querySelector(".tevas");

const body = document.querySelector("body");

const vaikas = document.querySelector(".vaikas");

const vaikas2 = document.querySelector(".vaikas2");

body.addEventListener("click", function () {
  body.style.backgroundColor = "yellow";
});

tevas.addEventListener("click", function (e) {
  e.stopPropagation();
  tevas.style.backgroundColor = "green";
});

vaikas.addEventListener("click", function (e) {
  e.stopPropagation();
  vaikas.style.backgroundColor = "pink";
});

vaikas2.addEventListener("click", function (e) {
  e.preventDefault(); //<-- sustabdo "defaultinį" veiksmą. Šiuo atveju <a href></a> - "click".
  e.stopPropagation(); //<--sustabdo evento plitimą kitur
  vaikas2.style.backgroundColor = "red";
  setTimeout(function () {
    //<-- nueina po 2 sekundžių į prašomą nuorodą
    window.location = "http://127.0.0.1:5500/1%20pamoka/i.html";
  }, 2000);
});
