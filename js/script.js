" use strict ";

var display = document.getElementById("display");


function oneToTen(){
var printOneToTen = "";
for(var i = 1; i <=10; i++){
  printOneToTen += i + "<br>";
}
  display.innerHTML = printOneToTen;
}

function oddNumbers(){
  var printOdd = "";
  for(var i = 1; i <20; i+=2){
    printOdd += i + "<br>";
  }
  display.innerHTML = printOdd;
}

function squareNumbers(){
  var squares = "";
  for(var i = 1; i <=10; i++){
    squares += (i*i) + "<br>";
  }
  display.innerHTML = squares;
}

function randomNumbers(){
  var random = "";
  for(var i = 0; i < 4; i++){
    random += Math.floor((Math.random() * 100) + 1) + "<br>";
  }
  display.innerHTML = random;
}

function printPositiveEvenNumbers(){
  var n = prompt("Enter a number: ");
  var posEven = "";
  for(var i = 2; i < n; i+=2){
    posEven += i + "<br>";
  }
  display.innerHTML = posEven;
}

function powersOfTwo(){
  var n = prompt("Enter a number: ")
  var powers = "";
  for(var i = 1; i <= n; i++){
    powers += Math.pow(2, i) + "<br>";
  }
  display.innerHTML = powers;
}

function areWeThereYet(){
var weAreThere = false;
  while(!weAreThere){
    var answer = prompt("Are we there yet?");
    if(answer.toLowerCase() == "yes"){
      alert("Good!");
      weAreThere = true;
    }
  }
}

function triangle(){
  var stars = "";
  for(var i = 1; i < 6; i++){
    stars += ("*").repeat(i) + "<br>";
  }
    display.innerHTML = stars;
}

function tableSquare(){
  var table = "";
  for(var i = 1; i < 5; i++){
    for(var j = 1; j < 5; j++){
      table += i*j + " ";
    }
    table += "<br>";
  }
  display.innerHTML = table;
}

function nByNTable(){
  var table2 = "";
  var n = prompt("Enter a number: ");
  for(var i = 1; i <= n; i++){
      for(var j = 1; j <= n; j++){
        table2 += i*j + " ";
    }
    table2 += "<br>";
  }
  display.innerHTML = table2;
}
