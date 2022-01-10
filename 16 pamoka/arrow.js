// ARROW FUNCTION

const anon1 = function () {
  console.log("I am anon No 1");
  return "***";
};

const anon2 = () => {
  console.log("I am anon No 2");
};

//jeigu funkcija turi VIENĄĄĄĄĄĄĄ ARGUMENTĄ, galima praleisti skliaustelius
const anon3 = (number) => {
  console.log("I am anon No 3", number);
};

//jeigu funkcija turi VIENĄĄĄĄ EILUTĘ, galima praleisti garbanotus skliaustelius
const anon4 = (number) => console.log("I am anon No 4", number);

//yra iškart grąžinama
const anon5 = (number) => number;

anon1();
anon2();
anon3(333);
anon4(4444);
console.log(anon5(55555));
