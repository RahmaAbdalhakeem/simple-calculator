const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculation = [];
let accumulativeCalculation = '';

function calculate(button) {
    const value = button.textContent;

    if (value === "CLEAR") {
        calculation = [];
        accumulativeCalculation = '';
        screenDisplay.textContent = '0';
    } 
    else if (value === "=") {
        try {
            screenDisplay.textContent = eval(accumulativeCalculation || '0');
        } catch {
            screenDisplay.textContent = 'Error';
        }
    } 
    else {
        calculation.push(value);
        accumulativeCalculation = calculation.join('');
        screenDisplay.textContent = accumulativeCalculation;
    }
}

buttons.forEach(button => 
    button.addEventListener('click', () => calculate(button))
);
