import Notiflix from 'notiflix';


const form = document.querySelector('.form');
const  createPromiseBtn = document.querySelector('button');

const formData = {};
let firstDelay = 0;
let delay = 0;
let amount = 0;
let step = 0;


form.addEventListener('input', onInputValue);
form.addEventListener('submit', onSubmit);





function createPromise(position, delay) {
  return new Promise ((resolve, reject) =>{
    
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({position, delay})
    } else {
      // Reject
      reject({position, delay})
    } 
  });
  
};


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



function onInputValue(evt) {
  formData[evt.target.name] = evt.target.value

  firstDelay =  Number(formData.delay);
  step = Number(formData.step);
  amount = Number(formData.amount);
};

function onSubmit(evt) {
  evt.preventDefault();

  for (let i = 0; i < amount; i++) {
   
    setTimeout(()=>{
      createPromise(i + 1, firstDelay + i * step)
    .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }, delay);
    
    delay  = delay + step;
  }

  form.reset();

};
// const qqq = Number(form[0].value)




