function add (...items) {
    return items.reduce((sum, item) => sum += item,0) 
}

function subtract (...items) {
    return items.reduce((sum, item) => sum -= item,0) 
}

function multiply (...items) {
    return items.reduce((sum, item) => sum *= item,1) 
}

/*function divide (...items) {
    console.log(items)
    return items.reduce((sum, item) => {
        console.log(sum,item)
        sum /= item,1
    }) 
}*/

function divide (dividedNumber, dividingNumber) {
    return dividedNumber / dividingNumber
}

let firstNumber 
let operator
let secondNumber

function operate (firstNumber,operator,secondNumber) {
    switch(operator) {
        case '+':
            return add(firstNumber,secondNumber);
        case '-':
            return subtract(firstNumber,secondNumber);
        case 'x':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);
    }
}

console.log(operate(4,'/',5))
console.log(operate(12,'/',5))
