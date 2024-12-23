/*
скрипт: Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

Теория:
1. https://learn.javascript.ru/operators
2. https://learn.javascript.ru/comparison
3. https://learn.javascript.ru/ifelse
4. https://learn.javascript.ru/while-for#tsikl-for
5. https://doka.guide/js/if-else/
6. https://doka.guide/js/for/







3. Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
Необходимо вывести в консоль каждое четное число, кроме третьего и пятого.
Сделать две реализации с if и с continue.

4. Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
Необходимо вывести в консоль все числа до пятой ячейки.
Сделать две реализации с if, с break.

5. Создать функцию, которая на вход принимает массив чисел.
Необходимо вернуть сумму чисел массива

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Создать функцию, которая на вход принимает массив чисел.
// Необходимо вывести в консоль каждое четное число
// const consoleEveryEvenNumber = (arr: number[]): void => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i])
//         }
//     }
// }
// consoleEveryEvenNumber(testArr)
// Создать функцию, которая на вход принимает массив чисел.
// Необходимо вернуть самое большое число
// const getMaxNumberFromArray = (arr: number[]): number =>{
//     let max = arr[0]
//     for(let i = 1; i <arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(getMaxNumberFromArray(testArr))
// Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
// Необходимо вывести в консоль каждое четное число, кроме третьего и пятого.
// Сделать две реализации с if и с continue.
// const consoleEveryEvenNumber = (arr: number[]): void => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 2) {
//             continue
//         } else if (i === 4) {
//             continue
//         }
//             if (arr[i] % 2 === 0) {
//                 console.log(arr[i])
//             }
//     }
// }
// consoleEveryEvenNumber(testArr)
// Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
// Необходимо вывести в консоль все числа до пятой ячейки.
// Сделать две реализации с if, с break.
// const consoleEveryNumberWithoutMoreThanFiveIndex = (arr: number[]): void => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i >= 5) {
//             break
//         }
//         console.log(arr[i])
//     }
// }
// consoleEveryNumberWithoutMoreThanFiveIndex(testArr)
// 5. Создать функцию, которая на вход принимает массив чисел.
// Необходимо вернуть сумму чисел массива
// const sumArray = (arr: number[]): number => {
// 	let sum = arr[0];
// 	for (let i = 1; i < arr.length; i++) {
// 		sum = sum + arr[i];
// 	}
// 	return sum;
// };
// console.log(sumArray(testArr));
// Практика:
// 1.  Создать функцию, которая на вход принимает массив чисел.
// Необходимо вывести в консоль каждое четное число
var numberS = [11, 22, 33, 44, 55, 66, 77];
var toGetEveryEvenNumber = function (anyArr) {
    for (var i = 0; i < anyArr.length; i++) {
        if (anyArr[i] % 2 === 0) {
            console.log(anyArr[i]);
        }
    }
};
toGetEveryEvenNumber(numberS);
console.log("=======================");
//================ 2. Создать функцию, которая на вход принимает массив чисел.  Необходимо вернуть самое большое число
var ourArray = [111, 222, 333, 444, 555, 666, 777, 89];
var getMaxNumberFromarray = function (anyArr) {
    var max = anyArr[0];
    for (var i = 1; i < anyArr.length; i++) {
        if (max < anyArr[i]) {
            max = anyArr[i];
        }
    }
    return max;
};
console.log(getMaxNumberFromarray(ourArray));
console.log("=======================");
/*
==================== 3. Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
Необходимо вывести в консоль каждое четное число, кроме третьего и пятого.
Сделать две реализации с if и с continue.
*/
var array = [12, 14, 16, 18, 20, 22, 24, 26, 32];
var evenNumberFromArray = function (someArray) {
    for (var i = 0; i < someArray.length; i++) {
        if (i === 2) {
            continue;
        }
        else if (i === 4) {
            continue;
        }
        else if (someArray[i] % 2 === 0) {
            console.log(someArray[i]);
        }
    }
};
evenNumberFromArray(array);
console.log("======");
// ======= 4 =================
// Создать функцию, которая на вход принимает массив чисел длинной минимум 8 элементов.
// Необходимо вывести в консоль все числа до пятой ячейки.
// Сделать две реализации с if, с break.
var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var consoleEveryNumberWithoutMoreThanFiveIndex = function (someArray1) {
    for (var i = 0; i < someArray1.length; i++) {
        if (i < 5) {
            console.log(someArray1[i]);
        }
    }
};
consoleEveryNumberWithoutMoreThanFiveIndex(array1);
console.log("===no break===");
var array2Break = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var consoleEveryNumberWithoutMoreThanFiveIndexBREAK = function (someArray) {
    for (var i = 0; i < someArray.length; i++) {
        if (i >= 5) {
            break;
        }
    }
};
consoleEveryNumberWithoutMoreThanFiveIndex(array2Break);
console.log("== with break ====");
// ========== 5 ==============
// 5. Создать функцию, которая на вход принимает массив чисел.
// Необходимо вернуть сумму чисел массива
var array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var summOfAllNumbersInArray = function (someArray) {
    var sum = someArray[0];
    for (var i = 1; i < someArray.length; i++)
        sum = sum + someArray[i];
    return sum;
};
console.log(summOfAllNumbersInArray(array3));
console.log("summ of all numbers in Array");
