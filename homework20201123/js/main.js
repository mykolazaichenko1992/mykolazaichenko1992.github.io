let str1 = "Первое задание ";

for(let i = 2; i <= 14; i += 2){
  str1 += i + " ";
}
for(let i = 33; i <= 45.2; i += 2){
  str1 += i + " ";
}

let zadanie1 = document.querySelector(".main");
zadanie1.innerHTML = str1;
