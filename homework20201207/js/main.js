//Функция рандомного числа
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}
let arr = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];
/*ЗАДАНИЕ 1
 Сгенерировать двумерный массив 5х5 случайных чисел (0..12)*/ 
for(let i = 0; i < arr.length; ++i){
  for(let j = 0; j < arr[0].length; ++j){
    arr[i][j] = randomInt(0, 12);
  }
}
console.table(arr); //Вывод массива
/*ЗАДАНИЕ 2
посчитать сумму чисел основной диагонали*/
let total = null;
for(let i = 0; i < arr.length; ++i){
  total += arr[i][i];
}
console.log(total, `Сумма по основной диагонали`); //Вывод 2 задания
/*Задание 3
посчитать сумму чисел побочной диагонали*/
total = null;//Сброс переменной
for(let i = 0; i < arr.length; ++i){
  total += arr[i][arr.length - 1 - i];
}
console.log(total, `Сумма по обратной диагонали`); //Вывод 3 задания
/*Задание 4
 переставить местами столбцы 1 и 2*/
 let temp = null;
 for(let i = 0; i < arr.length; ++i){
    temp = arr[i][1];
    arr[i][1] = arr[i][2];
    arr[i][2] = temp;
  }
  console.table(arr); //Вывод 4 задания