let displayValue = '0';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let decimalAdded = false;

const display = document.querySelector('.display');
const buttonContainer = document.querySelector('.container');
const buttons = buttonContainer.querySelectorAll('button');



const appendNumber = function(value){
    if (operator === ''){
        firstNumber += value;
        displayValue = firstNumber;
    }
    else{
        secondNumber += value;
        displayValue = secondNumber; 
    }
}


const appendDecimal = function(){
    if (!decimalAdded){
        if (operator === ''){
            firstNumber += '.';
            displayValue = firstNumber;
        }
        else {
            secondNumber += '.';
            displayValue = secondNumber;
        }
        decimalAdded = true;
    }
}


const setOperator = function(value){
    if (secondNumber != ''){
        operate();
        firstNumber = displayValue;
        secondNumber = '';
    }
    operator = value;
    decimalAdded = false;
}


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
            result = NaN;
    }
    if (Number.isInteger(result)){
        result = result.toFixed(0);
    }
    else{
        result = result.toFixed(6);
    }
    displayValue = result.toString();
    decimalAdded = false;
    updateDisplay();
}


const calculate = function(){
    if (firstNumber === '' && secondNumber === '' && operator === ''){
        displayValue = NaN;
    }
    else {
        operate();
    }
}


const backspace = function(){
    if (operator === ''){
        firstNumber = firstNumber.slice(0, -1);
        displayValue = firstNumber;
    }
    else{
        secondNumber = secondNumber.slice(0, -1);
        displayValue = secondNumber;
    }
}


const reset = function(){
    displayValue = '0';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    decimalAdded = false;
}


const updateDisplay = function(){
    display.innerText = displayValue;
}


buttons.forEach(button => {
    button.addEventListener('click',() => {
        let currentValue = button.innerText;
        if (!isNaN(currentValue)){
            appendNumber(currentValue);
        }
        else if (currentValue === '.'){
            appendDecimal();
        }
        else if (currentValue === '='){
            calculate();
        }
        else if (currentValue === 'C'){
            backspace();
        }
        else if (currentValue === 'AC'){
            reset();
        }
        else { 
            setOperator(currentValue);
        }
        updateDisplay();
    })
})



