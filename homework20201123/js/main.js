let str1 = "Первое задание ";
for (let i = 2; i <= 14; i++){
  if(i % 2 === 0){ 
    str1 += i;
    str1 += " ";
  }
}
for(i = 33; i <= 45.2; i++){
  if(i % 2 == 1){
    str1 += i;
    str1 += " ";
  }
}
let zadanie1 = document.querySelector(".main");
zadanie1.innerHTML = str1;
