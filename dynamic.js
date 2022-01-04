"use strict"

// to str

console.log(typeof(String(null)));
console.log(typeof(String(4)));

const num = 5;
console.log("https://vk.com/catalog/" + num)

const fontSize = 26 + 'px';
console.log(fontSize);

console.log(typeof(+'4'));

console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("hello", '');


//to boolean
//1
let switcher = null;

if (switcher) {
    console.log('ok'); //не выведет т.к null false
}

//2
console.log(typeof(Boolean('4')));

//3
console.log(typeof(!!'4'));
