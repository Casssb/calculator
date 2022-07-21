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

//add number to screen & store first operand value
function appendNumber(number) {
  if (number === '.' && currentEntryScreen.textContent.includes('.')) return;
  currentEntryScreen.textContent = currentOperand;
  currentEntryScreen.textContent += number;
  currentOperand = currentEntryScreen.textContent;
}

//store values for operator & operations, update screen then prepare calculation
function prepareOperation(operator) {
  if (currentEntryScreen.textContent === '') return;
  if (operation !== null) prepareCalculation();
  previousOperand = currentOperand;
  operation = operator;
  currentOperand = '';
  previousEntryScreen.textContent = `${previousOperand} ${operation}`;
}

//stop it
function prepareCalculation() {
  if (operation === '÷' && currentOperand === '0') {
    currentEntryScreen.textContent = `${previousOperand} ${operation} ${currentOperand} = 🖕`;
    currentOperand = '';
    return;
  }
  calculate();
}

//main calculator logic (limits result to 2 decimal places)
function calculate() {
  let result = null;
  const current = Number(currentOperand);
  const previous = Number(previousOperand);
  switch (operation) {
    case '÷':
      result = previous / current;
      break;
    case '*':
      result = previous * current;
      break;
    case '-':
      result = previous - current;
      break;
    case '+':
      result = previous + current;
      break;
    default:
      return;
  }
  result = Math.round((result + Number.EPSILON) * 100) / 100;
  currentOperand = result.toString();
  currentEntryScreen.textContent = currentOperand;
  operation = null;
}

//single button logic for sign, clear, clear element & back
function changeSign() {
  currentEntryScreen.textContent = (
    Number(currentEntryScreen.textContent) * -1
  ).toString();
  currentOperand = currentEntryScreen.textContent;
}

function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  currentEntryScreen.textContent = '';
  previousEntryScreen.textContent = '';
}

function clearElement() {
  currentEntryScreen.textContent = '';
  currentOperand = '';
}

function back() {
  currentEntryScreen.textContent = currentEntryScreen.textContent.slice(0, -1);
}

//function to handle keyboard entries
function keyboardEntry(e) {
  if ((e.key >= 0 && e.key <= 9) || e.key === '.') appendNumber(e.key);
  if (e.key === '/') prepareOperation('÷');
  if (['*', '-', '+'].includes(e.key)) prepareOperation(e.key);
  if (e.key === '=' || e.key === 'Enter') prepareCalculation();
  if (e.key === 'F9') changeSign();
  if (e.key === 'Escape') clear();
  if (e.key === 'Delete') clearElement();
  if (e.key === 'Backspace') back();
}

//event listeners
numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendNumber(button.textContent));
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => prepareOperation(button.textContent));
});

equalsButton.addEventListener('click', () => prepareCalculation());
signButton.addEventListener('click', () => changeSign());
clearButton.addEventListener('click', () => clear());
clearElementButton.addEventListener('click', () => clearElement());
backButton.addEventListener('click', () => back());
window.addEventListener('keydown', () => keyboardEntry(event));
