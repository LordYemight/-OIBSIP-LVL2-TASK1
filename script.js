// Get the display element
const display = document.querySelector('.display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Click event handler
function handleClick(event) {
  const button = event.target;
  const buttonValue = button.dataset.value;

  // Handle different button types
  if (button.classList.contains('operator')) {
    handleOperator(buttonValue);
  } else {
    handleNumber(buttonValue);
  }
}

// Handle number button clicks
function handleNumber(value) {
  display.value += value;
}

// Handle operator button clicks
function handleOperator(value) {
  switch (value) {
    case 'AC':
      // Clear the display
      display.value = '';
      break;
    case 'DEL':
      // Remove the last character from the display
      display.value = display.value.slice(0, -1);
      break;
    case '=':
      // Evaluate the expression and display the result
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
      break;
    default:
      // Append the operator to the display
      display.value += value;
      break;
  }
}
