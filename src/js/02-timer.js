import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const inputTimer = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const resetBtn = document.querySelector('button[data-stop]')
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]')



startBtn.setAttribute('disabled',true)
startBtn.addEventListener('click', onStartBtnClick);
resetBtn.addEventListener('click', onResetBtnClick)

let intervalId = null;
let isActive = false;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = options.defaultDate
        const deltaTime = selectedDates[0] - currentTime;
        

        if (isActive) {
            return;
            
        };
        
        if (deltaTime < 0) {
            return Notiflix.Notify.info('Please choose a date in the future');
            
        }  else {
            startBtn.removeAttribute('disabled');
            startBtn.classList.add('start-is-active');
            options.selectedDates = selectedDates[0].getTime();
            isActive = true;

        };

    //   console.log(selectedDates[0]);
    },
};


inputTimer.addEventListener('input', flatpickr('input[type="text"]', options));


function onStartBtnClick() {

    startBtn.setAttribute('disabled',true)
    startBtn.classList.remove('start-is-active');
    Notiflix.Notify.success('Timer started');

    const selectedDates = options.selectedDates
    

    intervalId = setInterval(()=>{

        const currentTime = Date.now();
        const countdownTimer =  selectedDates  - currentTime;
        const time = convertMs(countdownTimer);
        
        stopTimer(countdownTimer);
        updateTimerFace(time);

    }, 1000);

    
};

function pad(value) {
    return String(value).padStart(2,'0');
    
};


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
};

function updateTimerFace({ days, hours, minutes, seconds }) {
    
    daysTimer.textContent = days;
    hoursTimer.textContent = hours;
    minutesTimer.textContent = minutes;
    secondsTimer.textContent = seconds;
};


function stopTimer(countdownTimer) {
    console.log(countdownTimer);
    if (countdownTimer < 1000 ) {
        clearInterval(intervalId);
        Notiflix.Report.success('Finished', 'Your timer finished', 'OK');
        startBtn.classList.remove('start-is-active');
        isActive = false;
       
    }; 

};

function onResetBtnClick() {
    clearInterval(intervalId);
    isActive = false;
    startBtn.classList.remove('start-is-active');
    updatePage();
};

function updatePage() {
    document.location.reload()
    
}
  

 