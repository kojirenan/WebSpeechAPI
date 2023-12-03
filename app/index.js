import verifyNumber from './verify.js';

const randomNumber = () => Math.floor(Math.random() * 100);
const number = randomNumber();
let tryNumber = 0;

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', e => {
  e.preventDefault();
  tryNumber++;
  const inputNumber = parseInt(input.value);

  verifyNumber(number, inputNumber, tryNumber);
  input.value = '';
});
