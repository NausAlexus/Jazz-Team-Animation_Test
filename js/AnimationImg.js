// Начальные данные
const Img1 = document.querySelector(".main-img1");
const Img2 = document.querySelector(".main-img2");
const Img3 = document.querySelector(".main-img3");
const Img4 = document.querySelector(".main-img4");

function rotateElement(element, angle, duration, callback){
    let start;
    let start_0 = 0;
    let final = angle;

    function animate(timestamp){
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let currentAngle = start_0 + (final - start_0) * (progress/duration);

        element.style.transform = `rotate(${currentAngle}deg)`;

        if (progress < duration){
            requestAnimationFrame(animate);
        } else {
            if (callback) callback();
        }
    }
    requestAnimationFrame(animate);
}

function rotateReverse1 (element){
    rotateElement(element, 45, 1000, () => {
        setTimeout(() => {
            rotateElement(element, 0, 10);
        }, 1000);
    });
}

rotateReverse1(Img1);
rotateReverse1(Img3);

function rotateReverse2 (element){
    rotateElement(element, -45, 1000, () => {
        setTimeout(() => {
            rotateElement(element, 0, 10);
        }, 1000);
    });
}

rotateReverse2(Img2);
rotateReverse2(Img4);