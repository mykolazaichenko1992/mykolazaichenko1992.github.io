let findMainEl = document.querySelector(`.main`);
let temp = ``;
console.log(findMainEl);
let str = new String();
str = findMainEl.innerText;
str = str.replace(/ /g, `_`);
array = str.split(`*`);

console.log(array);

array.forEach((element) => {
  temp += `=image("https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl="&"${element.slice(1)}")<br>`;
})
findMainEl.innerHTML = temp;
