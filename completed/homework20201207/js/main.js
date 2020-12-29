//Функция рандомного числа
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}
const createRandom2dArray = (rows, columns, min, max) => {
  const arr = [];
  for (let r = 0; r < rows; r++) {
    arr[r] = [];
    for (let c = 0; c < columns; c++) {
      arr[r][c] = randomInt(min, max);
    }
  }
  return arr;
}
let arr = [];
arr = createRandom2dArray(5, 5, 0, 12);
console.table(arr);  /*ЗАДАНИЕ 1
Сгенерировать двумерный массив 5х5 случайных чисел (0..12)*/
const summInArrayMainDiagonal = (arr) => {
  let total = null;
  for (let r = 0; r < arr.length; r++) {
    total += arr[r][r];
  }
  console.log(total, `Сумма по основной диагонали, 2 ЗАДАНИЕ`);
}
summInArrayMainDiagonal(arr); //2 Задание
const summInArraySecondDiagonal = (arr) => {
  let total = null;
  for (let r = 0; r < arr.length; r++) {
    total += arr[r][arr.length - 1 - r];
  }
  console.log(total, `Сумма по второстипенной диагонали, 3 ЗАДАНИЕ`);
}
summInArraySecondDiagonal(arr); //3 Задание
const swap2columns = (arr, col1, col2) => {
  let temp = null;
  for(let r = 0; r < arr.length; r++){
     temp = arr[r][col1];
     arr[r][col1] = arr[r][col2];
     arr[r][col2] = temp;
     temp = null;
   }
   return arr;
}
arr = swap2columns(arr, 1, 2);
console.table(arr); //Вывод 4 задания
