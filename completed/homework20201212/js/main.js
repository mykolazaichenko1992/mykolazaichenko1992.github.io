let findMain = document.querySelector(`main`);
let sheeps = new Object();
sheeps = {
    sheep1:{
        hp: 100,
        damage: 4,
    },
    sheep2:{
        hp:40,
        damage:15,
    },
};
const shoot = (sheeps) => {
   let count = 0;
   let str = ``;
   do{
    ++count;
    sheeps.sheep1.hp -= sheeps.sheep2.damage;
    sheeps.sheep2.hp -= sheeps.sheep1.damage;
    str += `${count} - итерация ${sheeps.sheep1.hp} ХП первого корабля ${sheeps.sheep2.hp} ХП второго корабля <br>`
   }
   while((sheeps.sheep1.hp > 0) && (sheeps.sheep2.hp > 0));
   findMain.innerHTML = str;
}
shoot(sheeps);
