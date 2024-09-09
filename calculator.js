function add (...items) {
    return items.reduce((sum, item) => sum += item,0) 
}

function subtract (firstNumber,secondNumber) {
    return firstNumber - secondNumber
}

function multiply (...items) {
    return items.reduce((sum, item) => sum *= item,1) 
}

function divide (dividedNumber, dividingNumber) {
    return dividedNumber / dividingNumber
}

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

function clear () {
    display.innerText = 0;
    displayText = '';
    operator = '';
    numberInProcess = '';
    firstNumber = 0
    secondNumber = 0
}

function OperateAndSetSecondNumberAndCalculated() {
    secondNumber = Number(displayText);
    display.innerText = `${operate(firstNumber, operator, secondNumber)}`;
    calculated = true;
}

function setOperatorAndFirstNumber () {
    operator = clickEvent.innerText;
    firstNumber = Number(display.innerText);
}

function addNumbersAndDot () {
    if (!calculated) {

        display.innerText += clickEvent.innerText;
        displayText += clickEvent.innerText;
    break;
    } else {

        display.innerText = clickEvent.innerText;
        displayText = clickEvent.innerText;
        calculated = false;
    }
}

let firstNumber 
let operator
let secondNumber

let display = document.querySelector('#final-number');
display.innerText = 0;
let displayText = display.innerText;

let calculated = false;

document.addEventListener('click', (event) => {
    let clickEvent = event.target;

    switch(clickEvent.className) {
        case 'case number':
            if (!calculated) {

            display.innerText += clickEvent.innerText;
            displayText += clickEvent.innerText;
        break;
        } else {

            display.innerText = clickEvent.innerText;
            displayText = clickEvent.innerText;
            calculated = false;
        }
        case 'case number dot':
            if (displayText.includes('.')) {

            } else {
            if (!calculated) {

                display.innerText += clickEvent.innerText;
                displayText += clickEvent.innerText;
        break;
            } else {
    
                display.innerText = clickEvent.innerText;
                displayText = clickEvent.innerText;
                calculated = false;
            }
        }
    }
    

    switch(clickEvent.id) {
        case 'plus':
        case 'minus':
        case 'times':
        case 'divide':
            if (operator) {

                OperateAndSetSecondNumberAndCalculated();
                operator = clickEvent.innerText;
                firstNumber = Number(display.innerText);
                
                secondNumber = '';
                displayText = 0;
                //called when we use the operator button to enter a third number, we first need to calculate the first two numbers
            } else {

                operator = clickEvent.innerText;
                firstNumber = Number(display.innerText);
                display.innerText += ` ${clickEvent.innerText} `;
                displayText = '';
            }
        break;
        case 'equal':
            if (!operator) {

            } else {
                OperateAndSetSecondNumberAndCalculated();
                operator = '';
            }

        break;
        case 'clear':
            clear ();
    }

    console.log('dt:' +displayText, 'ope:' +operator,'FN:' +firstNumber,'SN:' + secondNumber, 'calc:' + calculated)
})

/*document.addEventListener('mousemove', (event) => {
    let clickEvent = event.target
    switch(clickEvent.className) {
        case 'case':
            clickEvent.classList.add('hovered-case')
    }
})*/