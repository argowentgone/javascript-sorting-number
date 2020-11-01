function swapHandler(data, counter){
  var tmpSorted = data;
  for(i=0; i<data.length-1; i++){
    if(data[i] > data[i+1]){
      counter++;
      var swaped = [data[i+1], data[i]];
      var tmp = null; 
      tmp = data[i];
      data[i] = data[i+1];
      data[i+1] = tmp;
      console.log(counter+'.', swaped, '->', data.join(' '))
    }
  }
  return {data, counter};
}

function isSame(array1, array2){
  return (array1.length == array2.length) && array1.every(function (element, index) {
    return element === array2[index];
  });
}

function calcSwap(data){
  var counter = 0;
  var sorted = data.slice().sort();
  var is_same = isSame(data, sorted);

  while (!is_same){
      var {data, counter} = swapHandler(data, counter);
      is_same = isSame(data, sorted);
  }
  return counter;
}

var data = [4,9,7,5,8,9,3];
console.log("Jumlah swap: ", calcSwap(data));
