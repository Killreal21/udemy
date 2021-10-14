"use strict";

function first () {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 1000);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {//lang - первый аргумент, 
//аргумент коллбэк в который передается функция
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log("Я прошел этот урок");
});

//или learnJS('JavaScript', function);
//если ф-ция уже создана то без скобок