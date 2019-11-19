"use strict";

// Task 1

// Создайте функцию p и a, которые будут служить короткими
// именами для prompt и alert соответственно,
// то есть запрашивать окно с полем ввода и выводить
// любое пользовательское сообщение в стандартном модальном
// окне.Напишите функцию d, которая будет служить коротким
// именем для debugger, то есть запускать процесс отладки.
// Используя эти псевдонимы получите значение из prompt и
// отобразите в alert.А процесс работы скрипта
// проконтролируйте с помощью функции,
// которая служит для дебага.

// function p() {
//   //   debugger;
//   d();
//   var message = prompt("enter something", "");
//   if (message != null && message != "") {
//     a();
//   } else {
//     alert("something wrong!");
//     p();
//   }

//   function a() {
//     alert(message);
//   }
//   function d() {
//     debugger;
//   }
// }
// p();

// Task 2

// Используя стрелочный синтаксис ES6,
// напишите функцию max (аналог Math.max),
// которая сравнивает два числа и возвращает большее:

// let a = (z, y) => {
//   let max = z > y;
//   if (max == true) {
//     console.log(z);
//   } else {
//     console.log(y);
//   }
// };

// a(0, -1);

// Task 3

// Используя синтаксис ES5,
// напишите функцию - аналог Math.min().
// Функция принимает любое количество чисел
// и возвращает меньшее из них:

// function min() {
//   var argument = [];
//   for (let i = 0; i < arguments.length; i++) {
//     argument[i] = arguments[i];
//   }
//   let z = argument.sort();

//   alert("Minimal number = " + z[0]);
// }
// min(15, 5, 7, 0, 3, 5, 6, 3, 543, 5345, 434, 32, 3, 5, 35, 3, 2, 5, 35, -2);

// ---------------------------

// var insert = [];
// for (let k = 0; k < 2; k++) {
//   debugger;
//   var x = +prompt("введите числo :");
//   var argument = insert.unshift(x);

//   //   if (insert != null && insert != "") {
//   //   }
// }
// min();

// Task 4

// Не используя методы массива, напишите функцию аналог
// метода shift.Функция удаляет из переданного в параметре
// массива первый элемент и возвращает новый массив.

// function delElement() {
//   var arr = [];
//   // debugger;
//   for (var i = 0; i < arguments.length; i++) {
//     arr[i] = arguments[i];
//     delete arr[0];

//     if (arr[0] != undefined);
//     {
//       arr[0] = "deleted)))";
//       // arr.length = 5;
//     }
//   }

//   console.log(arr);
// }

// delElement(3, 4, 2, 1, 5, 6);

// delElement(5, 3, 2, 80, 2, 6);

// Task 5

// Не используя методы массива,
// напишите функцию аналог метода массива push.
// Функция добавляет в конец переданного в параметре
// массив произвольное количество элементов.

// debugger;
// var arr = [];
// var array = [arr]; //чтобы наверняка

// function addArr() {
//   for (let i = 0; i <= arr.length; i++) {
//     var addArg = prompt("Добавте элемент в массив :");
//     arr[i] = addArg;
//     if (arr.length == 5) {
//       var question = confirm("может хватит ?");
//       {
//         if (question == true) {
//           break;
//         } else {
//           continue;
//         }
//       }
//     } else if (addArg === null || addArg == "") {
//       arr[i] = "";
//       break;
//     }
//   }
//   console.log(array);
// }

// addArr(array);

// var arr = [];
// var array = [arr];
// addArr(array);

// Task 6

// Напишите функцию аналог метода ES6 Object.assign().
// Первый параметр функции - целевой объект,
// поля которого будут изменены или расширены.
// Остальные параметры - объекты - источники,
// полями которых будет расширяться целевой объект

// --------  в процессе выполнения)))--------------

// var user = {
//   name: "Alex",
//   age: 32,
//   wife: "Alla",
//   son: "Maksim"
// };
// var key;
// var about;
// var user2={};

// // debugger;
// function assign(getObj, addKeys, final) {
//   for (var i = 0; i < 3; i++) {
//     var addKeys = prompt("Добавим чего ? :");
//     var about = prompt("Добавте описание:");
//     for(let key in user2) {
//        user2={
//         [addKeys]:[about],
//        }
//     }

//     if (addKeys === null) {
//       break;
//     }
//   }
//   console.log(final);

//   console.log(getObj);
// }
// assign(user, key, user2);

