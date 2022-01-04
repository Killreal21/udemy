"use strict";

let str = 'some';
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

const cats = {
    color: '',
    name: '',
    vid: 'kit',
    sayMew: function() {
        console.log("Mew");
    }
};

const jerry =  Object.create(cats);
//jerry.__proto__ = cats; старый способо прототипирования

Object.setPrototypeOf(jerry, cats);

jerry.sayMew();