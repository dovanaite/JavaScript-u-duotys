function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('----------------------------ternary-------------------------------')


let digit = 2;

let priskirta = rand(0 ,1 ) ? 'green' : 'red';   //====>čia turim tik dvi reikšmes:  iki klaustuko yra sąlyga, po klaustuko yra pirmoji reikšmė, jeigu ji false, tada eina prie antrosios reikšmės

let trys = rand(0, 2) ? (rand(0 , 1) ? 'green' : 'blue') : 'red'


console.log ('priskirta', priskirta);
console.log ('trys', trys);


// AND &&
// OR ||
//NOT !

// AND PAVYZDYS   
console.log('1 && 1', 1 && 1) //===> 1 TRUE
console.log('1 && 0', 1 && 0) //===> 0 FALSE
console.log('0 && 1', 0 && 1) //===> 0 FALSE
console.log('0 && 0', 0 && 0) //===> 0 FALSE


// OR PAVYZDYS
console.log('1 || 1', 1 || //===> 1 TRUE
console.log('1 || 0', 1 || //===> 1 TRUE
console.log('0 || 1', 0 || //===> 1 TRUE
console.log('0 || 0', 0 || //===> 0 FALSE

// ! PAVYZDYS
console.log('!0', !0) //===> 1 TRUE    0 yra pats savaime FALSE, tai ! atverčia 0 į 1, t.y. TRUE
console.log('!1', !1) //===> 0 FALSE
console.log('!!1', !!1) //===> 0 TRUE