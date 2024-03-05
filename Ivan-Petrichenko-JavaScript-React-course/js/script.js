'use strict';

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

// 'use strict';

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// ####################################################### Цикл label ##################################

// 'use strict';

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// ####################################################### Задачи/ОТВЕТ №3 ##################################

// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
    
// }

// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) {
//             break; // прерывает выполнение цикла
//         }
//         console.log(i);
//     }
    
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for (let i = 2; i <= 10; i += 2) {
//         console.log(i);
//     }
    
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
//     //     if (i % 2 === 0) {
//         //         continue;
//         //     } else {
//             //         console.log(i);
//             //     }
//             // }
            
//             function fourthTask() {
//                 // Пишем решение вот тут
//                 let i = 2;
                
//                 while (i <= 16) {
//                     if (i % 2 !== 0) {
//                         console.log(i);
//                     }
//                     i++;
//                 }
                
//             }
            
//             // Место для пятой задачи
            
//             function fifthTask() {
//                 const arrayOfNumbers = [];
                
//                 // Пишем решение вот тут
//                 // Используем цикл for для заполнения массива числами от 5 до 10
//                 for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i);
//     }
    
//     // Возвращаем заполненный массив
//     // Не трогаем
//     return arrayOfNumbers;
// }

// // Вызываем функцию и выводим результат в консоль
// console.log(fifthTask());



// ####################################################### Задачи/ОТВЕТ №4 ##################################


// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
    
//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
    
//     // Не трогаем
//     return result;
// }

// // Вызываем функцию и выводим результат в консоль
// console.log(firstTask());

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
    
//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] *= 2; // Увеличиваем числа в 2 раза
//         } else if (typeof(data[i]) === 'string') {
//             data[i] += ' - done'; // Добавляем " - done" к строкам
//         }
//     }
    
//     // Не трогаем
//     return data;
// }

// console.log(secondTask());

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
    
//     // Пишем решение вот тут
//     for (let i = data.length - 1; i >= 0; i--) {
//         result.push(data[i]); // Добавляем текущий элемент массива data в начало массива result
//     }
    
    
//     // Не трогаем
//     return result;
// }

// console.log(thirdTask());


// ####################################################### Задачи/ОТВЕТ №5 ##################################

// НЕ РЕШИЛ
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)