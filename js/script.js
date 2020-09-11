
let numberOfFilms = 0;

function start () {
    numberOfFilms = +prompt('2Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('1Сколько фильмов вы уже посмотрели?', '');
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
 
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', ''),
              b = prompt ('На сколько оцениет его?', ''); 
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log ('done');
        } else {
            console.log ('error');
            i--;
        }
    }
}

//rememberMyFilms ();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ("Мало");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ("Норм");
    } else if (personalMovieDB.count >= 30) {
        console.log ("Много");
    } else {
        console.log ("Ошибка");
    }
}

//detectPersonalLevel ();

function showMyDB (hidden) {
    if ( !hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB (personalMovieDB.privat);

function writeYourGenres (numberOfFilms) {
    for ( let i = 1; i < 4; i++) {
        const genres = prompt(`Ваш любимый жанр по номером ${i}`);
        personalMovieDB.genres [i - 1] = genres;
    }
}

writeYourGenres (numberOfFilms);



