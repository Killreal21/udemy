"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //передает не значение а ссылку на структуру

copy.a = 10;
console.log(copy);
console.log(obj);

//создание копии obj
function copyObj(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 6,
    c: {
        x: 7,
        y: 4
    }
};

const New = {...numbers};
console.log(New);
//console.log('objCopy = ', copyObj(numbers));


const add ={
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a','b', 'c'];
const newArray = oldArray.slice();

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rurube'],
      blogs = ['wp', 'lj', 'bl'],
      internet = [...video, ...blogs, 'vk'];

console.log(internet);

function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];

log(...num);

const array = ['a', 'b'];
const newAray = [...array];
console.log(newAray);

