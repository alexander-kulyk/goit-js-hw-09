
const startBtn = document.querySelector('button[data-start]');
const stopBtn  = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onBtnStartClick);
stopBtn.addEventListener('click', onBtnStopClick);

const COLOR_INTERVAL = 1000;
let intervalId = null
// let isActive = false;


function onBtnStartClick() {
    // if (isActive) {
    //     return;
    // };
    // isActive = true;
    intervalId = setInterval(()=>{

        body.style.backgroundColor = getRandomHexColor();      
    }, COLOR_INTERVAL);

    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled')
    
};

function onBtnStopClick() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true)
    // isActive = false;
    
};




function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
