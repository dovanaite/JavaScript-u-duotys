const kvadratas = document.querySelector("div");

kvadratas.classList.add("position1");

kvadratas.addEventListener("click", function () {
  kvadratas.classList.toggle("position2");
  kvadratas.classList.toggle("position1");
});

console.log(kvadratas);
