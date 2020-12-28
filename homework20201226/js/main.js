const size = 8;

const create2dArray = (size) => {
  const array = new Array(size);
  for(let i = 0; i < size; i++){
    array[i] = new Array(size);
  }
  return array;
}

let array = create2dArray(size);

const array2dToZeros = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      array[i][j] = 0;
    }
  }
  return array;
}

array = array2dToZeros(array);

const arrayCountsNotZeros = (array) => {
  let counter = 0;
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[i][j] !== 0) counter++;
    }
  }
  console.log(counter, `Количество не нулей в массиве`);
}

arrayCountsNotZeros(array);