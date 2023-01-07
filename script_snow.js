let snow_1 = document.getElementById("1");
let snow_2 = document.getElementById("2");
let snow_3 = document.getElementById("3");
let snow_4 = document.getElementById("4");
let snow_5 = document.getElementById("5");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let i = 1;
let j = 2;
let o = 3;
let k = 4;
let p = 5;

setInterval (function(){
    setTimeout(function(){
        i = Math.trunc(getRandomArbitrary(1, 5));
        j = Math.trunc(getRandomArbitrary(1, 5));
        o = Math.trunc(getRandomArbitrary(1, 5));
        k = Math.trunc(getRandomArbitrary(1, 5));
        p = Math.trunc(getRandomArbitrary(1, 5));
        snow_1.classList.add(`animation_snow_dansing_${i}`);
        snow_2.classList.add(`animation_snow_dansing_${j}`);
        snow_3.classList.add(`animation_snow_dansing_${o}`);
        snow_4.classList.add(`animation_snow_dansing_${k}`);
        snow_5.classList.add(`animation_snow_dansing_${p}`);
    },1000);
    snow_1.classList.remove(`animation_snow_dansing_${i}`);
    snow_2.classList.remove(`animation_snow_dansing_${j}`);
    snow_3.classList.remove(`animation_snow_dansing_${o}`);
    snow_4.classList.remove(`animation_snow_dansing_${k}`);
    snow_5.classList.remove(`animation_snow_dansing_${p}`);
},11000);