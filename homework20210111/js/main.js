const places = 33;

// GENERATE ARRAY

const arrPlaces = [];

function Place(id, occupied, time) {
  this.id = id;
  this.occupied = occupied;
  this.time = time;
}

const generatePlaces = () => {
  for (let i = 0; i < places; i++) {
    arrPlaces.push({
      id: i + 1,
      occupied: false,
      time: `--:--`,
    });
  }
};

// FUNCTION GET FREE SPACES

const occuPlaces = () => {
  return arrPlaces.reduce((sum, val) => {
    if (val.occupied) return sum += 1;
    return sum;
  }, 0)
};

// TIMER

const currentTimeEl = document.querySelector(`.current-time`);
let id;
const runTime = () => {
  id = setInterval(() => {
    let time = moment();
    let currTime = time.format('DD-MM-YYYY HH:mm:ss');
    currentTimeEl.innerHTML = `${currTime}`
  }, 1000);
}


const freeSpacesEl = document.querySelector(`.free-spaces`);
const occupiedSpacesEl = document.querySelector(`.occupied-spaces`);

const refreshInfoBoard = () => {
  let temp = occuPlaces();
  occupiedSpacesEl.innerHTML = `occupied: ${temp}`;
  freeSpacesEl.innerHTML = `free: ${arrPlaces.length - temp}`;
}


const mainEl = document.querySelector(`.main`);

const renderParkPlaces = () => {
  mainEl.innerHTML = arrPlaces.reduce((str, element) => {
    return `${str}
    <div id="${element.id}" class="parking-space">
      ${element.id}<br>
      ${element.occupied ? `occupied` : `free`} <br>
      ${element.time}
    </div>
    `;
  }, ``);
}

generatePlaces();
runTime();
refreshInfoBoard();
renderParkPlaces();