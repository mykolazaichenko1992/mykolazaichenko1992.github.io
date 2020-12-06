//Элемент для вывода
let findEl = document.querySelector(`main`);
//Функция рандомного числа
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}
const magicNumber = 501; //Число которое надо угадать
let min = -2147483647;
let max = 2147483647;
let currentValue = null;
let counter = null;
let str = null;
//Функция поиска числа
const searchMagicNumber = () => {
  while (currentValue !== magicNumber) {
    counter++;
    currentValue = randomInt(min, max);
    if (currentValue === magicNumber) {
      str = `${str} ${counter} -итерация на которой угадали число ${currentValue}<br>`;
    }
    else if (currentValue < magicNumber) {
      min = currentValue + 1;
      str = `${str} currentValue = ${currentValue} < MagicNumber ${counter} итерация<br>`

    }
    else {
      max = currentValue - 1;
      str = `${str} currentValue = ${currentValue} > MagicNumber ${counter} итерация<br>`;
    }
  } 
}
searchMagicNumber();
findEl.innerHTML = str;

