const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}
const getArray = (rows, columns, min, max) => {
  let arr = [];
  for(let i = 0; i < rows; i++){
    arr[i] = [];
    for(let j = 0; j < columns; j++){
      let obj = new Object();
     obj = {
       id: `${i}${j}`,
       value: randomInt(min, max),
       color: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`,
     }
      arr[i][j] = obj;
    }
  }
  return arr;
}
const arr = getArray(5, 5, 0, 12);
console.table(arr);