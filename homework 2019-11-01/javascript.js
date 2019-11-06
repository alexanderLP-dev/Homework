"use strict";
// Task 1

// Создайте объект person, описывающий персону,
// с произвольным количеством произвольных полей.
// С помощью оператора in или typeof проверьте наличие
// в объекте свойства, прочитанного из prompt,
// и выведите его на экран. Если свойства нет,
// то добавляйте его в объект со значением,
// которое также запрашивается из prompt.

// здесь же если в prompt нажать All можно увидеть 4 задачу)))

// debugger;
// var all = "all";
// var infoPerson = prompt("Hello! What do you want to know about Boris?", all);
// var person = {
//   name: "Boris",
//   age: 25,
//   weigth: 80,
//   height: 190,
//   car: "Jiguli"
// };
// var listElement = document.createElement("dl");
// document.body.appendChild(listElement);
// if (infoPerson == "all") {
//   for (var key in person) {
//     if (typeof person[key] == Number) continue;

//     var titleElement = document.createElement("dt");
//     listElement.appendChild(titleElement);
//     titleElement.innerText = key;

//     var defElement = document.createElement("dd");
//     listElement.appendChild(defElement);
//     defElement.innerText = person[key];
//   }
// } else if (infoPerson in person) {
//   for (var key in person) {
//     if (key == infoPerson) {
//       listElement.innerText = typeof person[key] + " " + person[key];
//     }
//   }
// } else {
//   let addKeys = confirm("такой инфы нет( желаете добавить элемент?");
//   for (let k = 0; k < 1000; k++) {
//     if (addKeys == true) {
//       var infoPerson = prompt("Какой элемент добавляем ? :");
//       let aboutAddKeys = prompt("Добавьте описание : ");
//       person[infoPerson] = aboutAddKeys;
//       let resume = confirm("желаете добавить еще что то ?");
//       if (resume == true) {
//         infoPerson;
//       } else if (resume != true) {
//         let del = confirm("удалить какой то элемент?");
//         if (del == true) {
//           let delElement = prompt("какой элемент удаляем?");
//           delete person[delElement];
//         } else break;
//       } else {
//         alert("все отправлено!");
//       }
//     }
//   }
// }

// task 2

// Сгенерируйте объект, описывающий модель телефона,
// заполнив все свойства значениями, прочитанными из
// prompt(например: brand, model, resolution, color...),
// не используя вспомогательные переменные.
// Добавьте этот гаджет персоне, созданной ранее

// почему то добавлялось иногда только 2 промпт??

//  работает с 1 заданием)

// debugger;
// var addGadjet = confirm("добавте телефон");
// if (addGadjet == !true) {
//   alert("bye!");
//   gadjet;
// } else if (addGadjet == true) {
//   var phone = {
//     model: prompt("model"),
//     screen: prompt("size screen"),
//     price: prompt("how much?"),
//     os: prompt("enter os")
//   };
// }

// var gadjet = confirm("Хотите добавить устройство  Борису ? ");
// if (gadjet == true) {
//   person.phone = phone;
// } else alert("Как хотите");

// console.log(person);

// Task 3 тоже в первом

// Запустите бесконечный цикл.
// В цикле вызывайте prompt, в котором пишется либо delete,
// либо update.В зависимости от указанного действия,
// удаляйте или добавляйте(редактируйте) свойство в объекте
// персоны(которая уже имеет телефон).Какое именно свойство
// удалять или добавлять - также читается из prompt.
// Какое значение будет у добавленного свойства -
// тоже берется из prompt.При нажатии на Отмена при
// появлении prompt редактирование person заканчивается.
// И обновленные данные распечатываются в консоли.

// Task 4 В первом задании)

// Task 5

// Создайте объект dates для хранения дат.
// Первая дата – позавчера.Вторая дата – текущая дата(new Date)
// минус 365 дней.Из prompt читается дата в формате
// yyyy - MM - dd.Проверьте, попадает ли введенная дата
// в диапазон дат объекта dates.

// var check = prompt("Введите дату для проверки", "yyyy-mm-dd");
// var data = new Date();
// var second = new Date();
// second.getYear("2018");
// var dates = {
//   pozavchera: new Date("2019 november 04,10:35:33"),
//   tekyschaya: second
// };
// console.log(new Date("-365"));
// console.log(dates);
// debugger;

// var pozavchera = new Date(segodnya.setDate(segodnya.getDate() - 2));
// // var mnogoDnei = 365 - segodnya.getDay();
// // segodnya.setDate(segodnya.getDate() - 365);
// var mnogoDnei2 = new Date(segodnya.setDate(segodnya.getDate() - 365));

// Начало !!!!!!!!!!!!!

// var check = new Date(prompt("Введите дату для проверки", "yyyy-mm-dd"));

// var segodnya = new Date();
// var dates = {
//   pozavchera: new Date(segodnya.setDate(segodnya.getDate() - 2)),
//   mnogoDnei2: new Date(segodnya.setDate(segodnya.getDate() - 365))
// };

// if (check < dates.pozavchera && check > dates.mnogoDnei2) {
//   alert(" введенная дата попадает в диапазон дат объекта dates.");
// } else alert("Что то не то!");

// console.log(dates);

// Task 6
// Создайте структуру данных,
// полностью описывающую html - разметку картинки.
// С помощью методов браузера добавьте ее на страницу
// со всеми атрибутами, читая значения свойств из созданного
// объекта.

/* <img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" alt="" style="border: 1px solid #ccc" width="200" /> */

// let img = document.createElement("img");
// img.src =
//   "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif";
// img.alt = "picture";
// img.style = "border: 1px solid #ccc";
// img.width = "200";
// document.body.appendChild(img);
// console.log(img);
