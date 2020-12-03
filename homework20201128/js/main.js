//Задание 1
console.log(`Начало 1 задания`);
const funcZ1 = (arr, index) => {
  //Задание 1
  if (arr[index] != arr[index-1] + arr[index+1]) arr[index] = arr[index-1] + arr[index+1];
}
const arr1 = [5, 6, 3, 2, 6, 74, 21, 412, 53];
console.log(arr1, `Перед запуском функции 1 задания`);
funcZ1(arr1, 2);
funcZ1(arr1, 5);
funcZ1(arr1, 7);
console.log(arr1, `После запуска  функции 1 задания`);
console.log(`Конец 1 задания, Начало 2`);
//Задание 2
const randomArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.random() * (100 - 0) + 0; // 10000 - max 0 - min
  }
}
const funcZ2 = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  arr[0] -= min;
  arr[arr.length - 1] -= min;
  console.log(min, `Минимальное число`);
}
randomArray(arr1);
console.log(arr1, `Перед запуском основной 2 функции 2 задания`);
funcZ2(arr1);
console.log(arr1, `После запуска основной 2 функции 2 задания`);
console.log(`Конец 2 задания, Начало 3 `);
//Задание 3
randomArray(arr1);
console.log(arr1, `Рандомний массив`);
const funcZ3 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 3 - 5;
  }
  let arr2 = arr;
  console.log(arr, `Первый массив это "рандомный" массив который умножили на 3 и отняли 5`);
  console.log(arr2, `Второй массив это запись первого в пустой`);
}
funcZ3(arr1);
console.log(`Конец 3 задания`);