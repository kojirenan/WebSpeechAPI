import verifyNumber from "./verify.js";

const randomNumber = () => Math.floor(Math.random() * 1000);
const number = randomNumber();

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const inputNumber = parseInt(input.value);

    verifyNumber(number, inputNumber)
    input.value = '';
})