let findEl = document.querySelector(`main`);
const createDivs = (count) => {
  let str = ``;
  for(let i = 0; i < count; i++){
    str += `<div style="width:100px; height:100px; border: 2px solid black">ДИВ<div>`;
  }
  return str;
}
let str = createDivs(144);
findEl.innerHTML = str;
