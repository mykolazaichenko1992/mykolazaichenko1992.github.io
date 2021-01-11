const findTextArea = document.querySelector(`.textarea`);
const findButton = document.querySelector(`.button`);
const findOutPut = document.querySelector(`.output`);

let str = new String();
let strArray = new String();
let longestWord = new String();

const createTextAreas = () => {
  strArray = strArray.split(` `);
  strArray = strArray.filter((element) => {
    return element != ``;
  })
  console.log(strArray);
  strArray.forEach(element => {
    str += `<input value="${element}"</input>`;
  });
  findOutPut.innerHTML = str;
}

findButton.addEventListener(`click`, () => {
  strArray = findTextArea.value;
  createTextAreas();
})