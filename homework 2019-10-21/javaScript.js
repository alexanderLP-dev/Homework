// Задача 1

//Найдите и исправьте ошибки в коде:

// var x = +parseInt(prompt("Введите x", "1 "));
// var y = +parseInt(prompt("Введите y", "1 "));

// var x = +prompt("Введите x", "1");
// var y = +prompt("Введите y", "1");

// alert("Сумма:" + (x + y));

//задача 2

//Создайте три переменные. Присвойте первой переменной числовое значение.
//  Вторая переменная равна первой переменной, увеличенной в три раза.
//  Третья переменная равна сумме двух первых. Распечатайте все три.

// var one = 5,
//   two = one * 3,
//   three = one + two;

// console.log(one, two, three);
//
//задача 3

// Создайте переменные firstName и lastName для хранение имени и фамилии,
//  запишите в них значения из модального окна prompt.Выведите на экран приветствие(“What’s up John Doe”),
// используя конкатенацию и экранирование символов.Имя и фамилию выводите
//  заглавными буквами независимо от того, как они были введены

// var firstName = prompt("введите имя"),
//   lastName = prompt("введите фамилию");

// alert(
//   "\"What's up " +
//     (firstName.toUpperCase() + " " + lastName.toUpperCase()) +
//     '"'
// );

// задача 4

// Создайте переменные x и y для хранения числа.
// Значения переменные получают из prompt.
// Рассчитайте произведение, частное, разность и сумму этих значений.
// Результат последовательно отобразите в модальном окне.

// var x = +prompt("введите число x:"),
//   y = +prompt("введите число у:");

// alert("сумма :" + (x + y));
// alert("разность :" + (x - y));
// alert("произведение :" + x * y);
// alert("деление :" + x / y);

//задача 5

// Напишите программу, которая без использования оператора
//  сравнения определяет, является ли число, введенное
//   пользователем, нечётным(true / false).
//   Результат отобразите в alert.

// var userNum = prompt("Введите число для проверки : ");
// alert(Boolean(userNum % 2));

//задача 6

// Напишите калькулятор для конвертации единиц измерения количества информации
// (байт, килобайт, мегабайт, гигабайт).Значения считаются из prompt, результаты
// отображаются в alert.
// Используйте константы там, где это логически оправдано.

// var insert = prompt("введите кол-во гигабайт : ");
// var BITE = 1024;
// var bite = BITE ** 3 * insert,
//   mebi = BITE ** 1 * insert,
//   kibi = BITE ** 2 * insert,
//   gigi = BITE ** 0 * insert;
// alert(
//   `В одном Гигабайте :
//     ${gigi} гигабайт
//     ${mebi} мебибайт
//     ${kibi} кибибайт
//     ${bite} байт`
// );

//задача 7

// У Чжуан - цзы было N яблок, Цзэн - Цзы съел несколько.
// Чжуан - Цзы обвиняет Цзэн - Цзы в том, что он съел все яблоки, но Цзэн - Цзы возражает.
// Запишите повествование в переменных и выражениях, читая значения из prompt.
// Не используя операторы сравнения, покажите, правду говорит Цзэн - Цзы или ложь.

// var n = prompt("Чжуань-Цзы имеет N яблок (введите кол-во) :"),
//   y = prompt("После того как Цзен-Цзы съел несколько (введите кол-во):");
// alert("Чжуань-Цзы обвинил Цзен-Цзы, что он съел все яблоки :");
// var z = n - y;

// alert("Цзен - Цзы отрицает что он все съел, это правда или нет? :" + !!z);

//задача 8

// На сайте есть три колонки разной высоты,
//  заданной в единицах измерения веб(значения вводятся в prompt в формате “50px”, “20px”...)
//  .Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его.
// Учтите, что Math.max не работает со строками.

// var a = parseInt(prompt("первая колонка : ")),
//   b = parseInt(prompt("вторая колонка : ")),
//   c = parseInt(prompt("третья колонка : ")),
//   d = Math.max(a, b, c);
// alert("Самое найбольшее значение из трех:" + d + "px");

//задача 9

// Космический корабль летит с Земли на Луну.
// Расстояние равно 384, 400 км.Скорость полета корабля определяется в prompt.
// Рассчитайте, за какое время ваш космический корабль доберется до Луны.

// var s = parseInt(prompt("задайте скорость : " + "км\\час")),
//   v = 3844e2,
//   t = v / s,
//   day = v / s / 24,
//   week = v / s / 24 / 7;

// alert(t + "часов");
// alert(day + "дней");
// alert(week + "недель");

//задача 10

// Запишите в переменную случайное число(Math.random()),
//  умножьте его на 100 и округлите.
//  Получите второе число из окна prompt.
//  Сравните и отобразите в модальном окне: первое число меньше второго или нет,
//  а также оба значения.
// Расчеты сделайте в одном выражении!(То есть в скобках метода alert.)

// var x = Math.ceil(Math.random() * 100),
//     z = +prompt("Введите число для сравнения :");

// alert("x < z" + "=" + (x < z) + ";" + "b=" + x + ";" + "z=" + z);
//
