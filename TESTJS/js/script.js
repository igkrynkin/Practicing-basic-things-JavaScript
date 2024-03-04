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

// ####################################################### Ответ урока ##################################

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
    
    
// ####################################################### Мой ответ ##################################
    
'use strict';

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


// ################################## СОРТИРОВКА ПУЗЫРЬКОМ  #################################################

// https://www.youtube.com/watch?v=QMTbRBTauV0

// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
// 	for(let j = 0; j < arr.length; j++) {
// 		let box;
// 		if(arr[j] > arr[j+1]) {
// 			box = arr[j + 1];
// 			arr[j + 1] = arr[j];
// 			arr[j] = box;
// 		}
// 	}
// }

// console.log(arr);
    
// ######################################## возврат Имя и Инициалы ############################################

// // https://www.youtube.com/watch?v=5zRRLcab520

// const getInitial = (name) => {
// 	return name.split(' ').map(item => item[0]).join('.').toUpperCase() + '.';
// };
// console.log(getInitial('Иванов вова'));


        
// ####################################################################################

// let openOffice = null;
// let securityChange = null;


// openOffice = prompt ('Во сколько вы прейдёте?', '');
// securityChange = prompt ('Ты охранник?', '');

// if( openOffice < 10 || openOffice > 18 ) {
// 	console.log('Офис закрыт');
// }
// else if (securityChange === 'да') {
// 	console.log('Ну привет работничек');
// } 
// else {
// 	console.log('Милости просим!');
// }


// let openOffice = null;
// let securityChange = null;

// // Получаем время прихода на работу и информацию о том, является ли пользователь охранником
// openOffice = prompt('Во сколько вы придёте?', '');
// securityChange = prompt('Ты охранник?', '');

// // Проверяем условия
// if (securityChange === 'да') {
// 	console.log('Ну привет работничек');
// } else if (openOffice < 10 || openOffice > 18) {
// 	console.log('Офис закрыт');
// } else {
// 	console.log('Милости просим!');
// }

// console.log( false && true && 11);

// console.log( false || 0 || 0);

// var str = '123';
// var num = parseInt(str);

// console.log(typeof num);


