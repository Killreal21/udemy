"use strict";

let arr = [10, 2, 3, 4, 5, 6, 7, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a-b;
}

// //arr.pop(); -last elem
// //arr.push(9); 

// arr.forEach(function(item/*значение элемента*/, i/*индекс*/, arr/*ссылка к осн массиву*/) {
// //коллбэк метод позволяет применять функциюк каждому эл массива
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// console.log(arr.join(" "));

// let arrayRed = {  //объект для редактированния массива
//     firstElem: function(array, number) {  // функция замены первого элемента
//        array[0] = number; 
//     },
// };

// //arrayRed.firstElem(arr, 10);
// arrayRed.firstElem(arr,10);

// console.log(arr);

const str = prompt ("", "");

const products = str.split(", ");
console.log(products);
products.sort();
console.log(products.join('; '));