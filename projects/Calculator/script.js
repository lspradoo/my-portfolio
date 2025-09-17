let display = document.getElementById('display');
let num1 = null;
let operator = '';

function clickButton(value) {
  if (!isNaN(value)) { // number
    display.value += value;
  } else if (value === 'C') {
    display.value = '';
    num1 = null;
    operator = '';
  } else if (value === '=') {
    if (num1 !== null && operator) {
      let num2 = parseFloat(display.value.split(operator)[1]); // number after operator
      let result;
      switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*':
        case '×': result = num1 * num2; break;
        case '/':
        case '÷': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
      }
      display.value = result;
      num1 = null;
      operator = '';
    }
  } else { // operator
    if (operator === '') { // add only if no operator yet
      operator = value;
      num1 = parseFloat(display.value);
      display.value += operator; // show number + operator
    }
  }
}
