// Начальные данные
let headerText = document.querySelector(".header-text");

// Начальная позиция
headerText.style.transform = "translateY(-115px)";
headerText.style.scale = "1";

let actionText = 0;

function animationHeaderText(){
    actionText +=1;
    if(actionText < 39.1){
        headerText.style.top = actionText*3 + "px";
        requestAnimationFrame(animationHeaderText);
    }
}
requestAnimationFrame(animationHeaderText);