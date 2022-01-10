// INPUT

const buttonDone = document.querySelector("button#done");
const inputMyText = document.querySelector("input#myText");

buttonDone.addEventListener("click", () => {
  const myText = inputMyText.value;
  console.log("click =>", myText);
});
inputMyText.addEventListener("input", () => {
  const myText = inputMyText.value;
  console.log("input =>", myText);
});

// SELECT

const buttonChoose = document.querySelector("button#choose");
const select = document.querySelector("select");

buttonChoose.addEventListener("click", () => {
  const mySelection = select.value;
  console.log("selected =>", mySelection);
});

select.addEventListener("change", () => {
  const mySelection = select.value;
  console.log("change =>", mySelection);
});

// RADIO

const buttonRadio = document.querySelector("button#radio");
const radios = document.querySelectorAll("[name=fm]");

buttonRadio.addEventListener("click", () => {
  let myRadio;
  radios.forEach((r) => {
    if (r.checked) {
      myRadio = r.value;
    }
  });

  console.log("CLICK RADIO =>", myRadio);
});

radios.forEach((r) => {
  r.addEventListener("change", () => {
    myRadio = r.value;
    console.log("CHANGE RADIO =>", myRadio);
  });
});

//CHECKBOX

const buttonCh = document.querySelector("button#ch");
const chOne = document.querySelector("input#one");

buttonCh.addEventListener("click", () => {
  const myCh = chOne.checked ? "YES" : "NO";
  console.log("Checked CLICK =>", myCh);
});

chOne.addEventListener("change", () => {
  const myCh = chOne.checked ? "YES" : "NO";
  console.log("Checked =>", myCh);
});

//CHECKBOX MANY

const buttonChs = document.querySelector("button#chs");
const allIWant = document.querySelectorAll("input.manyCh");

buttonChs.addEventListener("click", () => {
  const myCh = [];
  allIWant.forEach((w) => {
    if (w.checked) {
      myCh.push(w.value);
    }
  });
  console.log("All I WANT BUTTON => ", myCh);
});

allIWant.forEach((wi) => {
  wi.addEventListener("change", () => {
    const myCh = [];
    allIWant.forEach((w) => {
      if (w.checked) {
        myCh.push(w.value);
      }
    });
    console.log("All I WANT BUTTON => ", myCh);
  });
});
