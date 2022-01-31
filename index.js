//Detecting image click
var btns = document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function () {

        var curBtn = this.innerHTML;
        makeSound(curBtn);
        buttonAnimation(curBtn);
        // new Audio('sounds/tom-1.mp3').play();
    });

}
// Detecting key press
document.addEventListener("keypress",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeBtn=document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}
function makeSound(key){
    switch (key) {
        case 'w':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'a':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 's':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'k':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case 'l':
            new Audio("sounds/snare.mp3").play();
            break;
    }
}