const userNames = ["Peter", "Victor", "Alex", "Lena", "Max", "Nick", "Nastya", "Masha", "Oksana", "Katya"];
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
const objectsUsers = [];
function User(){
  this.name = userNames[randomInt(0,userNames.length - 1)];
  this.age = randomInt(10,80);
}
const addObjects = (count) => {
  for(let i = 0; i < count; i++){
   objectsUsers.push(new User());
  }
}
let countAddObjects = 10;
addObjects(countAddObjects); //Количество объектов которые хотим добавить
console.log(objectsUsers);