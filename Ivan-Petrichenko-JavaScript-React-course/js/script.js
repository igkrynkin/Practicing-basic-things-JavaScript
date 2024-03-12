// 'use strict';

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

// Ответ нашел.
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
        //         result += " ";
        //     }
        //     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)


// ####################################################### Циклы с помощью label ##################################

// outer: for (let i = 0; i < 3; i++) {
    
//     for (let j = 0; j < 3; j++) {
        
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
        
//         // если пустая строка или Отмена, то выйти из обоих циклов
//         if (!input) break outer; // (*)
        
//         // сделать что-нибудь со значениями...
//     }
// }

// alert('Готово!');


// ####################################################### Задачи/ОТВЕТ №6 ##################################

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genders: [],
// 	privat: false,
// };

// for (let i=0; i<2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('done');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }


// console.log(personalMovieDB);


// ####################################################### Задачи/ОТВЕТ переписать цикл 2 способами №6.1 ##################################

// Первый способ

// for (let i=0; i<2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('done');
//         i--;
//     }
// }
            
// Второй способ
            
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
                
//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// }
                        
// Третий способ
                        
// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
                            
//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//     }
//     i++;
 // } while (i < 2);
                                    
                                    
 // ####################################################### Замыкание в функциях ##################################
                                    
                                    
// Замыкание в JavaScript можно представить как ситуацию, когда у внутренней функции есть доступ к переменным и параметрам внешней функции, даже после того, как внешняя функция завершила свое выполнение. Другими словами, внутренняя функция "запоминает" свое окружение, где она была создана, и может продолжать использовать его, даже когда вызывающая функция уже завершила свою работу.
                                    
// Здесь функция createCounter создает счетчик, а вложенная функция возвращает и увеличивает значение счетчика при каждом вызове. Поскольку счетчик сохраняет свое текущее значение между вызовами благодаря замыканию, мы видим последовательный рост значений при каждом вызове.
                                    
// 'use strict';
                                    
// function createCounter() {
    //     let count = 0;
    
    //     return function() {
    //         return ++count;
    //     };
    // }
    
    // const counter = createCounter();
    // console.log(counter()); // 1
    // console.log(counter()); // 2
    // console.log(counter()); // 3
    
// ####################################################### Задачи/ОТВЕТ №7.1 ##################################
    
// 'use strict';
    
//     // Место для первой задачи
//     function sayHello(name) {
//     return "Привет, " + name + "!";
// }

// ####################################################### Задачи/ОТВЕТ №7.2 ##################################


// Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1];
// }


// ####################################################### Задачи/ОТВЕТ №7.3 ##################################


// Место для третьей задачи
// function getMathResult(base, times) {
//     if (typeof times !== 'number' || times <= 0) {
//         return base;
//     }
    
//     let result = '';
//     for (let i = 0; i < times; i++) {
//         result += base + (i * base);
//         if (i !== times - 1) {
//             result += '---';
//         }
//     }
//     return result;
// }



// ####################################################### Задачи/ОТВЕТ №8 ##################################

// 
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';


// let numberOfFilms;

// function start() {
    //     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    //     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        //         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        //     }
        // }
        
        // start();
        
        // const personalMovieDB = {
            //     count: numberOfFilms,
            // 	movies: {},
            // 	actors: {},
            // 	genders: [],
            // 	privat: false,
            // };
            
            
            // function rememberMyFilms() {
                //     for (let i=0; i<2; i++) {
                    //         const a = prompt('Один из последних просмотренных фильмов?', ''),
                    //         b = prompt('На сколько оцените его?', '');
                    
                    //         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        //             personalMovieDB.movies[a] = b;
                        //             console.log('done');
                        //         } else {
                            //             console.log('done');
                            //             i--;
                            //         }
                            //     }
                            // }

                            // rememberMyFilms();
                            
                            
                            // function detectPersonalLevel() {
                                //     if (personalMovieDB.count < 10) {
                                    //         console.log('Просмотрено довольно мало фильмов');
                                    //     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                                        //         console.log('Вы классический зритель');
                                        //     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
    //         console.log('Произошла ошибка');
    //     }
    // }
    
    // detectPersonalLevel();
    
    // console.log(personalMovieDB);
    
    
// ####################################################### Задачи/ОТВЕТ №8.1 ##################################


'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    
    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genre);
    }
}

showMyDB();
writeYourGenres();

console.log(personalMovieDB);