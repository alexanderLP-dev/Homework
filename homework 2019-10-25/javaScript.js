"use strict";
//task 1  !!!!!!!!!!!!!!!!!!

//Task 2
// let inputSpeed = prompt("Введите скорость улитки : ");
// let speed = "При скорости " + inputSpeed + "км\\с";
// if (inputSpeed < 0) {
//   alert(speed + " Улитка ползет назад!");
// } else if (inputSpeed > 0) {
//   alert(speed + " Улитка ползет вперед!");
// } else if (inputSpeed == 0) alert("Ваша улитка до сих пор на месте!");
// else {
//   alert("Введите скорость улитки!");
// }

//task 3
// debugger;
// let moneyPetr = parseFloat(+prompt("Введите кол-во денег Петра : " + "грн"));
// let moneyVasya = +prompt("Введите кол-во денег Васи : " + "грн");
// let allMoney = moneyPetr + moneyVasya;

// if (allMoney > 1000) {
//   alert("Вася и Петр имеют возможность отправится на Мальту");
// } else if (allMoney >= 20) {
//   alert("Этих денег возможно хватит попить пивка");
// } else if (allMoney < 0) {
//   alert("Долги или кредиты надо возвращать!!!");
// } else {
//   allMoney = 0;
//   alert("Попробуйте еще, или введите цифрами");
// }

// task 4
// let age = 31;
// if (age >= 20 && age < 30) {
//   alert("Упс вы выписали себе повестку в армию и переписали  квартиру!))");
// } else alert("С вами все в порядке");

// task 5

// var suitable = +prompt(`Подходящие маршрутки : 7, 225, 255
// Введите какая приехала: `);
// if (suitable == 7 || suitable == 225 || suitable == 255) {
//   alert("О! Мой номер пора ехать");
// } else {
//   alert("Прийдется опять ждать(");
// }

// task 6
// переменные пробовал и в if присваивать тоже получалось
// let a, b;
// a = `saturday`;
// b = `sunday`;
// let day = b;

// if (day != a && day != b) {
//   alert(`на работу!`);
// } else {
//   alert(`выходной`);
// }

// task 7
// debugger;
// var name = prompt(`Введите ваше имя : `);

// if (name !== "null" && name !== "") {
//   alert("Я Вас приветствую " + name + "!");
// } else {
//   alert(`write somthing`);
// }

// task 8

// let typeOperation = prompt(`Введите тип операции :
// 1)USD - UAH
// 2)UAH - USD`);
// let a, b;
// a = `usd-uah`;
// b = `uah-usd`;

// let howMany = prompt(`Сколько денег хотите перевести?`);

// let USD = 25;
// let UAH = 25;
// let first = USD * howMany;
// let second = howMany / UAH;

// switch (typeOperation) {
//   case a:
//     alert(first + `гривень`);
//     break;
//   case b:
//     alert(second + `долларов`);
//     break;
//   default:
//     alert(`вы не ввели во что куда!`);
// }

// task 9

// let greeting = "да прибудет с тобой сила!";
// let lang = prompt(`enter language please : en, ru, de`);

// let en = `en`,
//   ru = `ru`,
//   de = `de`;
// if (lang == en) {
//   alert(greeting + ` may the force come with you!`);
// } else if (lang == ru) {
//   alert(greeting + ` да прибудет с тобой сила!`);
// } else if (lang == de) {
//   alert(greeting + ` Möge die Macht mit dir sein!`);
// } else {
//   alert(`Эта задача оказалась легче чем с именем`);
// }

// switch (lang) {
//   case ru:
//     alert(`да прибудет с тобой сила!`);
//     break;
//   case en:
//     alert(`may the force come with you!`);
//     break;
//   case de:
//     alert(`Möge die Macht mit dir sein!`);
//     break;
//   default:
//     alert(`Эта задача оказалась легче чем с именем`);
// }

// task 10
// var x = +prompt(`Введите месяц `, 1);
// var month = new Date().getMonth(x);
// month++;
// if (x <= 3) {
//   alert(`сейчас зима`);
// } else if (x > 3 && x <= 6) {
//   alert(`сейчас весна`);
// } else if (x > 6 && x <= 9) {
//   alert(`сейчас лето`);
// } else {
//   alert(`сейчас осень`);
// }

// task 11
// debugger;
// let lang = prompt(`выберите язык : ру, en`);
// let ru = `ру`;
// let en = `en`;
// let dayEn, day;
// let def = `введите цифру 0-6! / choose number 0-6!`;

// if (lang == ru) {
//   day = +prompt(`выберите день от 0 - 6. Если что воскресенье = 0 )`);
// } else if (lang == en) {
//   dayEn = +prompt(`select a day 0 - 6.If that Sunday = 0)`);
// } else {
//   alert(`вы не выбрали`);
// }

// switch (day) {
//   case 0:
//     day = alert(`Сегодня воскресенье`);
//     break;
//   case 1:
//     day = alert(`Сегодня понедельник`);
//     break;
//   case 2:
//     day = alert(`Сегодня вторник`);
//     break;
//   case 3:
//     day = alert(`Сегодня среда`);
//     break;
//   case 4:
//     day = alert(`Сегодня четверг`);
//     break;
//   case 5:
//     day = alert(`Сегодня пятница`);
//     break;
//   case 6:
//     day = alert(`Сегодня суббота`);
//     break;
// }

// switch (dayEn) {
//   case 0:
//     day = alert(`Today is sunday`);
//     break;
//   case 1:
//     day = alert(`Today is monday`);
//     break;
//   case 2:
//     day = alert(`Today is tuesday`);
//     break;
//   case 3:
//     day = alert(`today is wednesday`);
//     break;
//   case 4:
//     day = alert(`today is thursday`);
//     break;
//   case 5:
//     day = alert(`today is friday`);
//     break;
//   case 6:
//     day = alert(`today is saturday`);
//     break;
// }

// if (day >= 7) {
//   alert(def);
// } else {
//   alert(`Конец/the end`);
// }

//task 12
// debugger;
// var x = +prompt(`x`, 0);
// var error = null;

// switch (x) {
//   case 0:
//     error = `на ноль делить нельзя`;
//     break;
//   case 1:
//     error = `На единицу делить бессмысленно`;
//     break;
// }

// if ( error) {
//   alert(error);
// } else {
//   alert(100 / x);
// }
