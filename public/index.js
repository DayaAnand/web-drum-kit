var numberOfDrumButtons = document.querySelectorAll(".drum").length; //gets the length of the drum buttons with the css selector ".drum" which is 7 here.

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //click is an event - mouse click

    var buttonInnerHTML = this.innerHTML; //this gets the values like=" 'w','s','a','d','j','k','l' ";

    makeSound(buttonInnerHTML); //make sound when mouse is clicked

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) { //keypress is an event - keyboard press

  makeSound(event.key); //make sound when respective keyboard keys are pressed

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) { //animate a button  //currentKey -gets the keyboard keys like - w,a,s,d,j,k,l
  var activeButton = document.querySelector("." + currentKey); // activeButton returns [object HTMLButtonElement]

  activeButton.classList.add("pressed"); //adds "pressed" with the existing css selector

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
