let findButtonLamp = document.querySelector(`.buttonLamp`);
let findLamp = document.querySelector(`.lamp-off`)
let findImage = document.querySelector(`.image`);

findButtonLamp.addEventListener(`click`, () => {
  if (findLamp.className === `lamp-off`) findLamp.className = `lamp-on`;
  else findLamp.className = `lamp-off`;
})
