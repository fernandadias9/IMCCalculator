import { Modal } from './modal.js';
import { alertError } from './alert-error.js';
import {notANumber, calculateIMC} from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// object literals
form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightNaN = notANumber(weight) || notANumber(height);

  if(weightOrHeightNaN) {
    alertError.open();
    return;
  }

  const result = calculateIMC(weight, height);
  resultMessage(result);
}

function resultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  
  Modal.message.innerText = message;
  Modal.open();
}

  inputHeight.oninput = () => alertError.close();
  inputWeight.oninput = () => alertError.close();


