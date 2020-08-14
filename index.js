//i have a doubt about the conscept of the loop in here??????????
// to dected the button that is pressed
var drumno = document.querySelectorAll(".drum").length; //object
for (var i = 0; i < drumno; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var choice = this.innerHTML;
    makeSound(choice);
    addAnimation(choice);
  });
}
// to detect the keypress
document.addEventListener("keypress", function(event)//the event stores all the information when the event happned { //note1: here event is a variable.note2: here the function inside the other funtion is a class back function which call back the function when the eent is called.here
{  //here the object calls the function back
  makeSound(event.key); //anonymous function
  addAnimation(event.key);
} );
// track system
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); //the variables like tom2 and all should always be diffrent name
      tom2.play();
      break;
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "J":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "K":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "L":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(choice); //here the function is not connected with object it is then called function but when the object is associate with the object then it is called as method
  }
}
function addAnimation(element)
{
  var activeButton=document.querySelector("."+element);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },300);

}
