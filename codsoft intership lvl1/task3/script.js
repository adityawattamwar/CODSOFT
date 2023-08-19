let currentExpression = '';

function appendCharacter(character) {
  currentExpression += character;
  document.getElementById('result').value = currentExpression;
}

function clearResult() {
  currentExpression = '';
  document.getElementById('result').value = '';
}

function calculateResult() {
  try {
    const result = eval(currentExpression);
    document.getElementById('result').value = result;
    currentExpression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
