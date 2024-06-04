const add = function(a, b){
    return parseFloat(a) + parseFloat(b);
}
const subtract = function(a, b){
    return parseFloat(a) - parseFloat(b);
}
const multiply = function(a, b){
    return parseFloat(a) * parseFloat(b);
}
const divide = function(a, b){
    if (b === '0'){
        return NaN;
    }
    return parseFloat(a)/parseFloat(b);
}

let displayValue = '0';
let firstNumber = '';
let secondNumber = '';
let operator = '';


const operate = function(){
    let result;
    switch(operator){
        case ('+'):
            result = add(firstNumber, secondNumber); 
            break;
        case ('-'):
            result = subtract(firstNumber, secondNumber);
            break;
        case ('*'):
            result = multiply(firstNumber, secondNumber);
            break;
        case ('/'):
            result = divide(firstNumber, secondNumber);
            break;
        default:
            result = 'Error';
    }
    displayValue = result.toString();
    updateDisplay();
}

const clear = function(){
    displayValue = displayValue.slice(0, -1);
    if (displayValue === ''){
        displayValue = 0;
    }
}
const reset = function(){
    displayValue = '0';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

const display = document.querySelector('.display');
const buttonContainer = document.querySelector('.container');
const buttons = buttonContainer.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',() => {
        let currentValue = button.textContent;
        if (!isNaN(currentValue)){
            if (operator === ''){
                firstNumber += currentValue;
                displayValue = firstNumber;
                console.log(firstNumber);
            }
            else{
                secondNumber += currentValue;
                displayValue = secondNumber;    
                console.log(secondNumber);
            }
        }
        else if (currentValue === '='){
            operate();
        }
        else if (currentValue === 'C'){
            clear();
        }
        else if (currentValue === 'AC'){
            reset();
        }
        else { 
            if (secondNumber != ''){
                operate();
                firstNumber = displayValue;
                secondNumber = '';
            }
            operator = currentValue;
        }
        updateDisplay();
    })
})

const updateDisplay = function(){
    display.textContent = displayValue;
}

