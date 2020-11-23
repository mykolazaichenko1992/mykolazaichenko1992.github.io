let varA = null;
let varB = null;
let varC = null;
let varD = null;
let varX1 = null;
let varX2 = null;
let str = null;
let tempEL = document.querySelector(".input");
console.log(tempEL);
varA = prompt("Введите число А",);
varB = prompt("Введите число B",);
varC = prompt("Введите число C",);
varD = Math.pow(varB, 2) - 4 * varA * varC;
if(varD > 0){
  varX1 = (-varB + Math.sqrt(varD)) / 2 * varA;
  varX2 = (-varB - Math.sqrt(varD)) / 2 * varA;
  str = "X1 = " + varX1 + "X2 = " + varX2;
  tempEL.innerHTML = str;
}
else if(varD == 0){
  varX1 = (-varB) / 2 * varA;
  str = "X1 = " + varX1;
  tempEL.innerHTML = str;
}
else{
  str = "У уравнения нету кореней";
  tempEL.innerHTML = str;
}