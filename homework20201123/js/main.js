let str1 = "Первое задание ";
for(let i = 2; i <= 45.2; i++)
{
  if((i % 2 == 0) && (i <= 14)){
     str1 += i + " ";
  }
  else if((i >= 33) && (i % 2 == 1)){
    str1 += i + " ";
  }
}
let zadanie1 = document.querySelector(".main");
zadanie1.innerHTML = str1;
