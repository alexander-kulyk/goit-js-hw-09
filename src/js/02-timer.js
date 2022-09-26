import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const inputTimer = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.setAttribute('disabled',true)
startBtn.addEventListener('click', onStartBtnClick);

let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = options.defaultDate
        const deltaTime = selectedDates[0] - currentTime;
        
        if (deltaTime < 0) {
            return alert("Please choose a date in the future")
            
        }  else {
            startBtn.removeAttribute('disabled');
            options.selectedDates = selectedDates[0].getTime();

        };

    //   console.log(selectedDates[0]);
    },
};


inputTimer.addEventListener('input', flatpickr('input[type="text"]', options));

function onStartBtnClick() {
   
//    const selectedDates = options.selectedDates
        const selectedDates = options.selectedDates

    intervalId = setInterval(()=>{

        const currentTime = Date.now();
        const countdownTimer =  selectedDates  - currentTime;
        const time = convertMs(countdownTimer)
        console.log('time',time);
       


    }, 1000);

    
};




function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
const date = Date.now()
console.log(date);

 