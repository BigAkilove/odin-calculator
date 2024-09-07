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
            console.log(firstNumber,secondNumber)
            if(secondNumber === 0) return "I don't advise dividing by zero"
            return divide(firstNumber,secondNumber);
    }
}

let display = document.querySelector('.result');
let displayText = display.innerText;
let calculated = false;

document.addEventListener('click', (event) => {
    let clickEvent = event.target
    switch(clickEvent.className) {
        case 'case number':
            if (!calculated) {

            display.innerText += clickEvent.innerText
            displayText += clickEvent.innerText
        } else {

            display.innerText = clickEvent.innerText
            displayText = clickEvent.innerText
            operator = ''
            calculated = false
        }
    }
    switch(clickEvent.id) {
        case 'plus':
        case 'minus':
        case 'times':
        case 'divide':
            if (operator) {
                secondNumber = Number(displayText)
                display.innerText = operate(firstNumber, operator, secondNumber);
                calculated = true;

                firstNumber = Number(display.innerText)
                //operator = clickEvent.innerText
                secondNumber = ''
                //this is called when we want to use the operator button to enter a third number, we first need to calculate the first two numbers
            } else {

                operator = clickEvent.innerText;
                firstNumber = Number(display.innerText);
                display.innerText += ` ${clickEvent.innerText} `;
                displayText = '';
            }
        break;
        case 'equal':
            secondNumber = Number(displayText);
            display.innerText = operate(firstNumber, operator, secondNumber);
            calculated = true;

        break;
        case 'clear':
            display.innerText = '';
            displayText = '';
            operator = '';
     }
     console.log('dt: ' +displayText, 'ope: ' +operator,'FN: ' +firstNumber,'SN: ' + secondNumber)
})

/*document.addEventListener('mousemove', (event) => {
    let clickEvent = event.target
    switch(clickEvent.className) {
        case 'case':
            clickEvent.classList.add('hovered-case')
    }
})*/
console.log(operate(4,'/',5))
console.log(operate(12,'/',5))
