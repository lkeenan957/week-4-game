var numberList = [20, 30, 67, 34, 87, 74, 12];
console.log(numberList, numberList.length);


var randonNumberDOM = document.getElementById("randonNumber");
console.log(randonNumberDOM);


function numberSelect(array){
  var num = Math.floor(Math.random() * array.length);
  var numberR = array[num];
  return numberR;
};

$("#randomNumber").append(numberR);
