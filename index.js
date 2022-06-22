// detecting button press.
var drumButton = document.querySelectorAll(".drum");

for (var i = 0; i < drumButton.length; i++) {
    drumButton[i].addEventListener("click", function(){
        // this.style.color= "white";
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);

        buttonAnimation(buttonClicked);
    });
}
// detecting keypress.
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){

    switch(key){
        case "w":
            let drum1 = new Audio("sounds/tom-1.mp3");
            drum1.play();
                break;
            case "a":
                let drum2 = new Audio("sounds/tom-2.mp3");
                drum2.play();
                break;
            case "s":
                let drum3 = new Audio("sounds/tom-3.mp3");
                drum3.play();
                break;
            case "d":
                let drum4 = new Audio("sounds/tom-4.mp3");
                drum4.play();
                break;
            case "j":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "k":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "l":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            default:
                console.log(key);
        }
    };

function buttonAnimation(buttonPressed){
    let activeButton = document.querySelector("." + buttonPressed);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}




// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();