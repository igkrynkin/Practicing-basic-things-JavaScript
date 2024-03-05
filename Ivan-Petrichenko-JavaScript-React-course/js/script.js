// ####################################################### Задача №1 ##################################

/* Задание на урок №1:

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


// ####################################################### Мой ответ №1 ##################################

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



// ####################################################### Ответ урока №1 ##################################

// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
    
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');
    
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
    
// console.log(personalMovieDB);


// ####################################################### Задача/ОТВЕТ №2 ##################################

/* Задание Логические операторы:

https://docs.google.com/document/d/1RDxwMg7pSI9QzhYU0sY59kyspI71r-3_hzJoSbHRk0I/edit?pli=1


'use strict';

const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

############## 1 #################

Что выведет в консоль код?


console.log( NaN || 2 || undefined );  выведет 2 (первое ложное значение)

console.log( NaN && 2 && undefined );  выведет NaN (первое ложное значение)

console.log( 1 && 2 && 3 );  выведет 3, так как все истинные, то выводит крайний

console.log( !1 && 2 || !3 );    выведет 2, так как || возвращает первое истинное значение

console.log( 25 || null && !3 );  выведет 25

console.log( NaN || null || !3 || undefined || 5);   выведет 5

console.log( NaN || null && !3 && undefined || 5);   выведет 5

console.log( 5 === 5 && 3 > 1 || 5);    выведет true


############## 2 #################

Выполняется ли условие?

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

Условия выполнятся, так-как false || true = true.



############## 3 #################

Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

Условия выполнятся, nuggets = true.


Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

Условия не выполнятся.

*/


// ####################################################### Вложенный цикл ##################################

'use strict';

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);