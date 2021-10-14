"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1000,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {  // создание метода у объекта
        console.log('Ura');
    }
};

options.makeTest(); //вызов срзданного метода

const {border, bg} = options.colors;

console.log(Object.keys(options).length); //внутренний метод вывода ключей

delete options.name;

console.log(options);

//если встречается перебор object Object то вводим условие 
//на проверку типа ключа на наличие "object"
let count = 0;

for (let key in options){
    count +=1;
    if (typeof (options[key]) == 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            count +=1;
        }
    } else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(count);

//object k