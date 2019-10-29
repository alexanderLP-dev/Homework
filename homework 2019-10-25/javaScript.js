"use strict";
//task 1
// Создайте блок - схему, описывающую алгоритм поиска минимального из трех чисел.
// Запишите алгоритм программно:
// создайте три переменные с любыми числовыми значениями;
// используя только вложенные условные операторы if (НЕ логические операторы),
// найдите минимальное число и отобразите на экране его значение.

// Схема в HTML!!!

// var x, y, z;
// var x = prompt("Введите x :", 1);
// var y = prompt("Введите y :", 1);
// var z = prompt("Введите z :", 1);

// if (x < y) {
//   alert("меньшее х");
// } else if (z > y) {
//   alert("меньшее у");
// } else if (y > z) {
//   alert("меньшее z");
// } else {
//   alert("что то не заладилось(");
// }

//Task 2

// По склону Фудзи ползет улитка.
// Ее скорость определяется в диалоговом окне.
// Проверить и вывести на экран, улитка двигается вперед,
// назад или остается на месте(скорость(вектор) положительная,
// отрицательная или ноль).

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

// У вас и у вашего друга в кармане столько денег,
// сколько было указано в окнах prompt.
// В зависимости от общей суммы ваших сбережений вы можете полететь
// на Мальту изучать английский язык или выпить пива.
// С помощью условного оператора определите ваши возможности
// и отобразите на экране в alert.

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

// В переменную age запишите возраст человека.
// Если значение больше или равно 20 и меньше 30,
// в alert выводится “Выслать повестку”.

// let age = 31;
// if (age >= 20 && age < 30) {
//   alert("Упс вы выписали себе повестку в армию и переписали  квартиру!))");
// } else alert("С вами все в порядке");

// task 5

// Чтобы добраться домой,
// вас устраивают маршрутки номер 7, 225 и 255.
// Какая маршрутка приехала – определяется в prompt.
// Если ваша, то вы едете домой, в противном случае – ожидаете.

// var suitable = +prompt(`Подходящие маршрутки : 7, 225, 255
// Введите какая приехала: `);
// if (suitable == 7 || suitable == 225 || suitable == 255) {
//   alert("О! Мой номер пора ехать");
// } else {
//   alert("Прийдется опять ждать(");
// }

// task 6
// В переменную day записан текущий день недели.
// Если это не суббота и не воскресенье,
// выведите в alert сентенцию о необходимости идти на работу.
// переменные пробовал и в if присваивать тоже получалось

// let a, b;
// a = "saturday";
// b = "sunday";
// let day = b;

// if (day != a && day != b) {
//   alert("на работу!");
// } else {
//   alert("выходной");
// }

// task 7

// Получите из prompt значение для имени пользователя.
// Выведите на экран приветствие.Учтите вариант,
// что пользователь может не ввести ничего или нажать на Отмена.

// debugger;
// const name = prompt("Введите ваше имя : ");
// if (name == null) {
//   alert("Капец!");
// } else if (name != Number(name)) {
//   alert("Я Вас приветствую " + name + "!");
// } else {
//   alert("write something");
// }

// task 8

// Напишите калькулятор обмена валюты USD - UAH.
// Из первого prompt читается тип операции(регистр символов не имеет значения),
// из второго - сумма, подлежащая конвертации.Используя switch,
// рассчитайте результат конвертации.Результат выведите его в alert.

// let typeOperation = prompt(`Введите тип операции :
// 1)USD - UAH
// 2)UAH - USD`);
// let a, b;
// a = "usd-uah";
// b = "uah-usd";

// let howMany = prompt("Сколько денег хотите перевести?");

// let USD = 25;
// let UAH = 25;
// let first = USD * howMany;
// let second = howMany / UAH;

// switch (typeOperation) {
//   case a:
//     alert(first + "гривень");
//     break;
//   case b:
//     alert(second + "долларов");
//     break;
//   default:
//     alert("вы не ввели во что куда!");
// }

// task 9

// Создайте две переменные: greeting и lang.
// Переменная greeting – пустая строка.Переменная lang может принимать три значения:
// 'ru', 'en', 'de'(например, из prompt).Если она имеет значение 'ru',
// то в переменную greeting запишите приветствие на русском языке,
// если имеет значение 'en' – то на английском, если 'de' – на немецком.
// Выведите на экран приветствие в зависимости от значения переменной lang.
// Решите задачу через if-else и через switch-case.

// let greeting = "да прибудет с тобой сила! ";
// let lang = prompt(
//   greeting + " for translate enter language please : en, ru, de"
// );

// let en = "en",
//   ru = "ru",
//   de = "de";
// if (lang == en) {
//   alert(" may the force come with you!");
// } else if (lang == ru) {
//   alert(greeting);
// } else if (lang == de) {
//   alert(" Möge die Macht mit dir sein!");
// } else {
//   alert("Эта задача оказалась легче чем с именем");
// }

// switch (lang) {
//   case ru:
//     alert("да прибудет с тобой сила!");
//     break;
//   case en:
//     alert("may the force come with you!");
//     break;
//   case de:
//     alert("Möge die Macht mit dir sein!");
//     break;
//   default:
//     alert("Эта задача оказалась легче чем с именем");
// }

// task 10

// В переменной month хранится текущий месяц(new Date()).
// Определите в какую пору года попадает этот месяц
// (зима, лето, весна, осень).

// var x = new Date().getMonth();
// x++;
// if (x <= 3) {
//   alert("сейчас зима");
// } else if (x > 3 && x <= 6) {
//   alert("сейчас весна");
// } else if (x > 6 && x <= 9) {
//   alert("сейчас лето");
// } else {
//   alert("сейчас осень");
// }

// task 11

// Переменная lang может принимать два значения: 'ru' и 'en'.
// Переменная day принимает значение от 0 до 6 - ти.
// Если lang имеет значение 'ru',
// то в переменную result запишите название дня недели на русском языке
// в соответствии со значением переменной day(0 – воскресенье,
// 1 – понедельник, 2 – вторник и т.д.).
// Если же lang имеет значение 'en' – то аналогично,
// но день недели будет на английском.

// debugger;
// let lang = prompt("выберите язык : ру, en");
// let ru = "ру";
// let en = "en";
// let dayEn, day;
// let def = "введите цифру 0-6! / choose number 0-6!";

// if (lang == ru) {
//   day = +prompt("выберите день от 0 - 6. Если что воскресенье = 0 )");
// } else if (lang == en) {
//   dayEn = +prompt("select a day 0 - 6.If that Sunday = 0)");
// } else {
//   alert("вы не выбрали");
// }

// switch (day) {
//   case 0:
//     day = alert("Сегодня воскресенье");
//     break;
//   case 1:
//     day = alert("Сегодня понедельник");
//     break;
//   case 2:
//     day = alert("Сегодня вторник");
//     break;
//   case 3:
//     day = alert("Сегодня среда");
//     break;
//   case 4:
//     day = alert("Сегодня четверг");
//     break;
//   case 5:
//     day = alert("Сегодня пятница");
//     break;
//   case 6:
//     day = alert("Сегодня суббота");
//     break;
// }

// switch (dayEn) {
//   case 0:
//     day = alert("Today is sunday");
//     break;
//   case 1:
//     day = alert("Today is monday");
//     break;
//   case 2:
//     day = alert("Today is tuesday");
//     break;
//   case 3:
//     day = alert("today is wednesday");
//     break;
//   case 4:
//     day = alert("today is thursday");
//     break;
//   case 5:
//     day = alert("today is friday");
//     break;
//   case 6:
//     day = alert("today is saturday");
//     break;
// }

// if (day >= 7) {
//   alert(def);
// } else {
//   alert("Конец/the end");
// }

//task 12

// Исправить код

// debugger;
// var x = +prompt("x", 0);
// var error = null;

// switch (x) {
//   case 0:
//     error = "на ноль делить нельзя";
//     break;
//   case 1:
//     error = "На единицу делить бессмысленно";
//     break;
// }

// if ( error) {
//   alert(error);
// } else {
//   alert(100 / x);
// }
