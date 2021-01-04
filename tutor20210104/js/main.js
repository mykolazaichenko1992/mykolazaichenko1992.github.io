let red = document.querySelector(`.red`);
let yellow = document.querySelector(`.yellow`);
let green = document.querySelector(`.green`);

red.addEventListener(`click`, ev => {
  document.querySelector(`.first`).style.backgroundColor = `red`;
})
yellow.addEventListener(`click`, ev => {
  document.querySelector(`.second`).style.backgroundColor = `yellow`;
})
green.addEventListener(`click`, ev => {
  document.querySelector(`.third`).style.backgroundColor = `green`;
})
