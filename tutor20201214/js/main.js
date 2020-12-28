const raschet = () => {
  let str = null;
  str = Number(document.querySelector(`.first-input`).value) + Number(document.querySelector(`.second-input`).value);
  document.querySelector(`.green-div`).innerHTML = str;
  console.log(str);
}
document.querySelector(`.btn-right`).addEventListener(`click`, raschet);
const changeBackground = () => {
  
}
document.querySelector(`.btn`).addEventListener(`click`, changeBackground);