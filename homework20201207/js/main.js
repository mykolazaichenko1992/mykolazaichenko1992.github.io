const carColor = [
  `yellow`,
  `green`,
  `red`,
  `blue`,
  `orange`,
];
const carTransmition = [
  `auto`,
  `mechanic`,
];
const carCondition = [
  `enable`,
  `not enable`,
];
const carSalon = [
  `leather`,
  `cloth`,
  `combined`,
];
let carCount = 0;
let carCatalog = new Object();
let carArray = new Array();
carCatalog = {carArray};
carCodeLength = 8;

function car(carColor, carTransmition, carCondition, carSalon){
  this.carColor = color;
  this.carTransmition = transmition;
  this.carCondition = condition;
  this.carSalon = salon;
}

carColor.forEach(cCol =>{
  carTransmition.forEach(cT =>{
    carCondition.forEach(cCon =>{
      carSalon.forEach(cS =>{
        carCount++;
        let car = new Object();
        car.color = cCol;
        car.transmition = cT;
        car.condition = cCon;
        car.salon = cS;
        car.code = `${carCount}${cCol[0]}${cT[0]}${cCon[0]}${cS[0]}`;
        car.code = car.code.padStart(carCodeLength, "0").toUpperCase();
        carCatalog.carArray.push(car);
      })
    })
  })
})
console.log(carCatalog);
