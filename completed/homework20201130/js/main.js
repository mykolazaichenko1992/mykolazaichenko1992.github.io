//Функция наполнения пустого массива в зависимости от указаного размера и минимального максимального числа
const randomArray = (arr, arrSize, min, max) => {
  for (let i = 0; i < arrSize; i++) {
    arr.push(Math.floor(min + Math.random() * (max + 1 - min)));
  }
  return arr;
}
const funcZ1 = (arr1, arr2, n) => {
  let arr = [];
  arr = arr1;
  console.log(arr, `Третий массив до добавления`);
  arr[n] = arr2[n];
  arr[n - 1] = arr2[n - 1];
  arr[Math.round(n / 2)] = arr2[Math.round(n / 2)];
  console.log(arr, `Третий массив после добавления ПЕРВОЕ ЗАДАНИЕ`);
}
let arr1 = [];
arr1 = randomArray(arr1, 10, 0, 100);
console.log(arr1, `Первый массив`);
let arr2 = [];
arr2 = randomArray(arr2, 10, 0, 100);
console.log(arr2, `Второй массив`);
funcZ1(arr1, arr2, 5); // Вызов функции задания №1
const countNumbers = (number) => { //Функция подсчёта количества знаков
  for(var i = 0; number > 1; i++) {
    number /= 10;
  }
  return i;
}
console.log(countNumbers(9432423), `- Количество знаков ВТОРОЕ ЗАДАНИЕ`); 