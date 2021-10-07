"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel (){
    if (personalMovieDB.count <10){
        alert("Прсмотренно довольно мало фильмов");
    }
    else if (10 <= personalMovieDB.count < 30){
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count > 30){
        alert("Вы киноман");
    }
    else{
        alert("Произошла ошибка");
    }
}

//detectPersonalLevel();

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
        
        if (a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movies[a]=b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        // personalMovieDB.movies[a] = b;
    }
}

//rememberMyFilms();

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for (let i = 1; i<4; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
