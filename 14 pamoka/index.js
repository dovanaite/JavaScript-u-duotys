const h1 = document.querySelector("h1");

// const h1 = (document.querySelector("h1").style.color = "pink");

h1.style.color = "red";
h1.style.fontSize = "50px";

console.log(h1);

const div2 = document.querySelector("div:last-of-type");

div2.style.color = "pink";

const div1 = document.querySelector("div:first-of-type");

div1.style.borderStyle = "solid";
div1.style.borderColor = "blue";
div1.style.padding = "20px";
// div1.style.fontSize = "50px";
div1.style.letterSpacing = "3px";

const body = document.querySelector("body");

body.style.height = "100vh";
body.style.width = "100vw";
body.style.backgroundColor = "pink";
body.style.color = "black";

function doDisco() {
  //   if (body.style.backgroundColor == "black") {
  //     body.style.color = "white";
  //     body.style.backgroundColor = "pink";
  //   } else {
  //     body.style.backgroundColor = "black";
  //   }
  div1.classList.toggle("big");
  console.log("disco");
}

// setInterval(doDisco, 1000);

div1.classList.add("big", "suo");
div1.classList.remove("big", "zvirblis");

console.log(div1);

console.log(
  "Afrikai su js priskiriame blue klasę ir padarome green backgroundą be klasės o tiesiogiai "
);

const h21 = document.querySelector("h2:first-of-type");

h21.classList.add("blue");
h21.style.backgroundColor = "green";

const h22 = document.querySelector("h2:last-of-type");

h22.classList.add("green");
h22.style.backgroundColor = "blue";

function africaToAmerica() {
  if (h21.style.backgroundColor == "green") {
    h21.style.backgroundColor = "blue";
  } else {
    h21.style.backgroundColor = "green";
  }
  if (h22.style.backgroundColor == "green") {
    h22.style.backgroundColor = "blue";
  } else {
    h22.style.backgroundColor = "green";
  }
  h21.classList.toggle("blue");
  h21.classList.toggle("green");
  h22.classList.toggle("blue");
  h22.classList.toggle("green");
}

setInterval(function () {
  if (h21.style.backgroundColor == "green") {
    h21.style.backgroundColor = "blue";
  } else {
    h21.style.backgroundColor = "green";
  }
  if (h22.style.backgroundColor == "green") {
    h22.style.backgroundColor = "blue";
  } else {
    h22.style.backgroundColor = "green";
  }
  h21.classList.toggle("blue");
  h21.classList.toggle("green");
  h22.classList.toggle("blue");
  h22.classList.toggle("green");
}, 500);

function numygimas() {
  console.log("kažką paspaudei");
}

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("kažką paspaudei");
});

console.log(button);
