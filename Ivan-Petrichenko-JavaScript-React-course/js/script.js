/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


// ####################################################### Мой ответ ##################################

// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genders: [],
// 	privat: false,
// };

// for (let i=0; i<2; i++) {
// 	let movieName = prompt('Один из последних просмотренных фильмов?', '');
// 	let movieRating = prompt('На сколько оцените его?', '');


// 	personalMovieDB.movies[movieName] = movieRating;
// }


// const resultContainer = document.getElementById('resultContainer');

// const resultElement = document.createElement('div');

// resultElement.innerHTML = `
//     <h2>Результаты теста:</h2>
//     <p>Количество фильмов: ${personalMovieDB.count}</p>
//     <h3>Информация о фильмах:</h3>
//         <ul>
//             ${Object.entries(personalMovieDB.movies).map(([movie, rating]) => `<li>${movie}: ${rating}</li>`).join('')}
//         </ul>
//     `;

// resultContainer.appendChild(resultElement);



// ####################################################### Ответ урока ##################################

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
    
console.log(personalMovieDB);