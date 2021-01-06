const findInput = document.querySelector(`.input`);
const findButton = document.querySelector(`.button`);
const findOutPut = document.querySelector(`.output`);

let array = new Array();
let strArray;
//Функция добавления Инпутов
const printInputs = () => {
  let str = new String();
  strArray.forEach(element => {
    str += `<input value="${element}"><br>`;
  });
  findOutPut.innerHTML = str;
}

//Функция поиска максимального длинного числа;
const findMaxWord = () => {
  strArray = array.toString();
  strArray = strArray.split(` `);
  console.log(`Количество слов`, strArray.length, strArray);
  let longest = strArray.sort((a, b) => {
    return b.length - a.length;
  })
  longest = longest[0];
  console.log(`Самое длинное слово`,longest);
}

findButton.addEventListener(`click`, () => {
  array = findInput.value;
  findInput.value = '';
  console.log(`Количество введённых символов с пробелами`, array.length);
  findMaxWord();
  printInputs();
})
