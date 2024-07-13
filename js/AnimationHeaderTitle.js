// Начальные данные
const headerTitle = document.querySelector(".header-title");

// Начальная позиция
headerTitle.style.transform = "translateX(-265px)";

let actionTitle = 0;

function animationHeaderTitle(){
    actionTitle +=1;
    if(actionTitle < 89){
        headerTitle.style.left = actionTitle*3 + "px";
        requestAnimationFrame(animationHeaderTitle);
    }
}
requestAnimationFrame(animationHeaderTitle);