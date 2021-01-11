const findTextArea = document.querySelector(`.textarea`);
const findButton = document.querySelector(`.button`);
const findOutPut = document.querySelector(`.output`);
let str = new String();
let strArray = new String();
const createTextAreas = () => {
  strArray = strArray.split(` `);
  console.log(strArray);
  strArray.forEach(element => {
    str += `<textarea cols="30" rows="1">${element}</textarea>`;
  });
  findOutPut.innerHTML = str;
}
findButton.addEventListener(`click`, () =>{
  strArray = findTextArea.value;
  createTextAreas();
})