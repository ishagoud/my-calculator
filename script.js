let displayValue = ''; // To store the input and results

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (!isNaN(displayValue.slice(-1))) {
    displayValue += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue); // Perform calculation
    updateDisplay();
  } catch {
    displayValue = 'Error';
    updateDisplay();
  }
}

function square() {
  if (!isNaN(displayValue)) {
    displayValue = Math.pow(displayValue, 2);
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue || '0';
}