let findFirstDiv = document.querySelector(`.first`);
console.log(findFirstDiv);
let findSecondDiv = document.querySelector(`.second`);
console.log(findSecondDiv);
const randomCub = () => {
  let min = 1;
  let max = 6;
  let temp = Math.floor(min + Math.random() * (max + 1 - min));
  return temp;
}
let brosok = (arr1, arr2) => {
  arr1.push(arr1[arr1.length -1] - randomCub());
  arr2.push(arr2[arr2.length -1] - randomCub());
}
let game = (arr1, arr2) => {
  while((arr1[arr1.length - 1] > 0) || arr2[arr2.length - 1] > 0){
    brosok(arr1, arr2);
    if((arr1[arr1.length - 1] <= 0) || (arr2[arr2.length - 1] <= 0)){
      break;
    }
  }
}
let player1 = [];
player1[0] = 100;
let player2 = [];
player2[0] = 100;
game(player1, player2);
findFirstDiv.innerHTML = player1;
findSecondDiv.innerHTML = player2;

