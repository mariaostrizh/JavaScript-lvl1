// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var arr = [];
var end = 1;
while (end < 100) {
    end++;
    arr.push(end);
}
var a = 2;
var b = 2;
while (a <= 100) {
    a += b;
    arr.splice(arr.indexOf(a), 1);
}
a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}
a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log('Первая задача. Ответ:  ' + arr);



// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basketItems = ['Крем', 'Мыло', 'Шампунь', 'Маска'];
const itemCost = [['Крем', 250], ['Мыло', 50], ['Шампунь', 150], ['Маска', 175]];
const getItemPrice = (item, array) => {
    const items = [];
    const costs = [];
    for (let i = 0; i < array.length; i++) {
        items.push(array[i][0]);
        costs.push(array[i][1]);
    }
    return costs[items.indexOf(item)];
};
const countBasketPrice = (basketArr, costArr) => {
    let totalCost = 0;
    for (let i = 0; i < basketArr.length; i++) {
        totalCost += getItemPrice(basketArr[i], costArr);
    }
    return totalCost;
};
console.log('Вторая задача. Ответ:  ');
console.log('Наполнение корзины: ' + basketItems);
console.log('Цена товаров: ' + itemCost);
console.log('Сумма в корзине: ' + countBasketPrice(basketItems, itemCost));

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: for(…){// здесь пусто}

console.log('Третья задача. Ответ:  ');
for (let i = 0; i <= 9; console.log(+ i++)) { }

// 4.*Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов, а не 5:

console.log("Четвертая задача. Ответ:  ");

var arr = [];
var end = 0;
while (end < 20) {
    end++;
    arr.push('x');
    console.log(arr);
}