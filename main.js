//DOM nodes
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const signButton = document.querySelector('.sign');
const clearButton = document.querySelector('.clear');
const clearElementButton = document.querySelector('.clear-element');
const backButton = document.querySelector('.back');
const currentEntryScreen = document.querySelector('.current-entry');
const previousEntryScreen = document.querySelector('.previous-entry');

//Global variables
let currentOperand = '';
let previousOperand = '';
let operation = null;

//add number to screen
function appendNumber(number) {
  if (number === '.' && currentEntryScreen.textContent.includes('.')) return;
  currentEntryScreen.textContent += number;
  currentOperand += number;
};

function prepareOperation(operator) {

};

function calculate() {

};

function changeSign() {
  currentEntryScreen.textContent = (
    Number(currentEntryScreen.textContent) * -1
  ).toString();
};

function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    currentEntryScreen.textContent = '';
    previousEntryScreen.textContent = '';
};

function clearElement() {
    currentEntryScreen.textContent = '';
    currentOperand = ''
};

function back() {
   currentEntryScreen.textContent = currentEntryScreen.textContent.slice(0, -1);
};


//event listeners
numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendNumber(button.textContent));
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => prepareOperation(button.textContent));
});

equalsButton.addEventListener('click', () => calculate());
signButton.addEventListener('click', () => changeSign());
clearButton.addEventListener('click', () => clear());
clearElementButton.addEventListener('click', () => clearElement());
backButton.addEventListener('click', () => back());
