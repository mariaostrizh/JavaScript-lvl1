// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты?
// Потому что здесь иипользуются инкременты.
// В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование.
// В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.
// Следовательно в последних алертах значения a и b равны, т.к.изначально им были заданы одни и те же значения
// и все формулы, применяющиеся к c и d были одинаковыми.

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// Ответ: 5. Т.к. по сути, a *= 2 в математическом описании представляет собой формулу a = a * 2. 

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать 
// скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
var a = -12;
var b = 5;
if (a >= 0 && b >= 0) {
    alert(a - b);
}
else if (a < 0 && b < 0) {
    alert(a * b);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    alert(a + b)
}
// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод
// чисел от a до 15.
a = +prompt('Введите число от 0 до 15')
switch (a) {
    case 0:
        alert('Ваше число 0');
        break;
    case 1:
        alert('Ваше число 1');
        break;
    case 2:
        alert('Ваше число 2');
        break;
    case 3:
        alert('Ваше число 3');
        break;
    case 4:
        alert('Ваше число 4');
        break;
    case 5:
        alert('Ваше число 5');
        break;
    case 6:
        alert('Ваше число 6');
        break;
    case 7:
        alert('Ваше число 7');
        break;
    case 8:
        alert('Ваше число 8');
        break;
    case 9:
        alert('Ваше число 9');
        break;
    case 10:
        alert('Ваше число 10');
        break;
    case 11:
        alert('Ваше число 11');
        break;
    case 12:
        alert('Ваше число 12');
        break;
    case 13:
        alert('Ваше число 13');
        break;
    case 14:
        alert('Ваше число 14');
        break;
    case 15:
        alert('Ваше число 15');
        break;
}
// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.
var a = 8;
var b = 5;

function summation(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где 
// arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного 
// значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть 
// полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}
