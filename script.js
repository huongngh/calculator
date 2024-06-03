const add = function(a, b){
    return a + b;
}
const subtract = function(a, b){
    return a - b;
}
const multiply = function(a, b){
    return a * b;
}
const divide = function(a, b){
    if (b === 0){
        return NaN;
    }
    return a/b;
}

let firstNumber = '';
let secondNumber = '';
let operator = '';

const operate = function(operator, firstNumber, secondNumber){
    if (operator === '+'){
        return add(firstNumber, secondNumber);
    }
    else if (operator === '-'){
        return subtract(firstNumber, secondNumber);
    }
    else if (operator === '*'){
        return multiply(firstNumber, secondNumber);
    }
    else if (operator === '/'){
        return divide(firstNumber, secondNumber);
    }
}