const display = document.getElementById('display');
let expression = '';

function updateDisplay() {
  display.value = expression;
}

function appendValue(value) {
  expression += value;
  updateDisplay();
}

function clearExpression() {
  expression = '';
  updateDisplay();
}

function evaluateExpression() {
  try {
    const result = eval(expression);
    if (!isFinite(result)) {
      expression = 'Error';
    } else {
      expression = result.toString();
    }
  } catch (e) {
    expression = 'Error';
  }
  updateDisplay();
}

document.querySelectorAll('.btn-number, .btn-operation').forEach(btn => {
  btn.addEventListener('click', () => appendValue(btn.dataset.value));
});

document.querySelector('.btn-clear').addEventListener('click', clearExpression);

document.querySelector('.btn-equals').addEventListener('click', evaluateExpression);
