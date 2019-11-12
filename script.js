var count = (function () {
var counter = 5;
  return function () {return counter--;}

  if(counter === 0){
    alert("game over");
  }

})();  

function displaycount(){
  document.getElementById("counter").innerHTML = count();
}




