var numberList = [20, 30, 67, 34, 87, 74, 12];
console.log(numberList, numberList.length);


var randomNumberDOM = document.getElementById("randomNumber");
console.log(randomNumberDOM);
var crystalHolderDOM = $("#crystalHolder")
var totalDOM = $("#totalSoFar")
var userTotal = 0;
var win = 0;
var loss = 0;
var winsDOM = $("#wins")
var lossesDOM = $("#losses")
var compRandoNum = 74;

function numberSelect(array){
  var num = Math.floor(Math.random() * array.length);
  var numberR = array[num];
  return numberR;
};

// document.querySelector("#randomNumber")
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//we need 4 crystal
function genCrystals() {
  crystalHolderDOM.empty()
  for (var i = 0; i < 4; i++) {
    var img = $("<img>");
    img.attr("src", "./assets/img/cry-" + i + ".png"); //this is how we create attributes with jQuery
    img.attr("id", "crystal")
    img.attr("class", "img-thumbnail")
    img.attr("data-crystalValue", getRandomArbitrary(1, 12))
    crystalHolderDOM.append(img);
  }
}
//we need to be able to click on crystalHolderDOM

//document.addEventListener("click", function(){})
$("#crystalHolder").on("click", "#crystal", function () {
  console.log("hey you clicked a crystal");
  console.log($(this).attr("data-crystalValue"));
  var cValue = parseInt($(this).attr("data-crystalValue"))
  //take thier values and add it to totalSoFar
  userTotal += cValue;
  totalDOM.html(userTotal) //.innerHTML (vanilla)
  //see if they win or loose
   if(userTotal === compRandoNum){
     win = win + 1;
     winsDOM.html(win)
     console.log(win);
     console.log("You win");
     initializeGame()
   }
   else if (userTotal > compRandoNum ){
     loss = loss + 1;
     lossesDOM.html(loss)
     console.log(loss);
     console.log("You lost");
     initializeGame()
   }else {
     console.log("keep clicking crystals!!!!!!");
   }
})


function initializeGame(){
  compRandoNum = numberSelect(numberList)
  $("#randomNumber").html(compRandoNum);
  userTotal = 0;
  totalDOM.html(userTotal)
  genCrystals();
}
initializeGame();
