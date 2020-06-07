const counterWrapper = document.querySelector('#counter');
const decrementBtn = counterWrapper.firstElementChild;
const incrementBtn = counterWrapper.lastElementChild;
const value = document.querySelector('#value');

let counterValue = Number(value.textContent);
console.log(counterValue);

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
