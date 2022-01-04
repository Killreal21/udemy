"use strict";

function hi(){
    console.log("Hi");
}

hi();

function hello(){
    console.log("Hello");
}

hello();




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function() {
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
    },
    rememberMyFilms: function() {
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
    },
    rememberMyFilms: function() {
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
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i<4; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if (genre === "" || genre == null){
                console.log('Error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} -это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    }
};

//detectPersonalLevel();

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");



//rememberMyFilms();

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



