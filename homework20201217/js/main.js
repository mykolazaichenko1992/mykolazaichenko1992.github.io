const array = [5, 23, -110, 3, 18, 0, 14];
console.log(array, `Начальний массив`);

array.forEach((element => {
  if(element % 2 !== 0) console.log(element, `a.Вывести в консоль только нечетные числа`)
}))

const arrayMap = array.map(element => element + 20)
console.log(arrayMap, `b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20`);

const arrayFilter = array.filter((element) => element > 0 && element % 2 !== 0);
console.log(arrayFilter, `c. Вывести в консоль массив, состоящий только из положительных нечетных чисел`);

const arrayReduce = array.reduce((summ, element) => summ + Math.round(element /3), 0);
console.log(arrayReduce, `d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки`);

console.log(array.includes(5, 0), ` e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5`);

const arraySliceShift = array.slice();
arraySliceShift.shift();
console.log(arraySliceShift, `f.Получить массив без первого элемента, вывести в консоль`);

console.log(array.sort((a, b) => a - b), `g.Отсортировать массив по возрастанию, вывести в консоль`);

console.log(array.some((element => element % 5 === 0)), `h.Определить, есть ли в массиве числа, кратные 5`);
