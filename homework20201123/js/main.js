let str1 = "Первое задание ";

for(let i = 2; i <= 45.2; i += 2)
{
  if((i % 2 == 0) && (i <= 14)){
     str1 += i + " ";
     continue;
  }
  else if((i >= 33) && (i % 2 == 1)){
    str1 += i + " ";
  }
  console.log(i);
}

let zadanie1 = document.querySelector(".main");
zadanie1.innerHTML = str1;
