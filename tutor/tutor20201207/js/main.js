let findEl = document.querySelector(`main`);
let arr = [
  [20,  2,   7,   19,  4],
  [16,  14,  12],
  [15,  19,  2,   14,  6],
];

for(let i = 0; i < arr.length; ++i){
  for(let j = 0; j < arr[0].length; ++j){
    console.log(i, j);
    arr[i][j] *= 3;
  }
}
console.table(arr);