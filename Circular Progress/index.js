let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector('.value');

let progressValue = 0;
let progressEnd = 75; //any value which is to be displayed in the side 
let speed = 10;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = progressValue + '%';
    progressBar.style.background = `conic-gradient(
        #211a1a ${progressValue}%,
        #8D7272 ${progressValue}%)`;
    if(progressValue == progressEnd){
        clearInterval(progress);
    }
}, speed);