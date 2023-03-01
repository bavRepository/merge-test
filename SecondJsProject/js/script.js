/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const numberOfFilms = +prompt("How many films have you already seen?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const oneOfLastFilmSeen = prompt("What is the name of the latest film you have seen?", "");
    const mark = +prompt("What is the mark you have given to this movie?", "");
    personalMovieDB.movies[oneOfLastFilmSeen] = mark;

}

console.log(personalMovieDB);

