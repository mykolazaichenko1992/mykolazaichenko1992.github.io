let red = document.querySelector(`.red`);
let yellow = document.querySelector(`.yellow`);
let green = document.querySelector(`.green`);
let first = document.querySelector(`.first`);
let second = document.querySelector(`.second`);
let third = document.querySelector(`.third`);

red.addEventListener(`click`, () => {
  first.classList.add(`red`);
  second.classList.remove(`yellow`);
  third.classList.remove(`green`);
})
yellow.addEventListener(`click`, ev => {
  document.querySelector(`.second`).style.backgroundColor = `yellow`;
})
green.addEventListener(`click`, ev => {
    document.querySelector(`.third`).style.backgroundColor = `green`;
})
