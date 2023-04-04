const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number")


numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let operation = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }  
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>{
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value)
    })
})

const inputOperator = (operator) =>{
    prevNumber = currentNumber
    operation = operator
    currentNumber = ''
}
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch (operation) {
        case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break;
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break;
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break;
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break;
        default:
            return;
    }
    currentNumber = result
    calculationOperation = ''
}
const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", () => {
    // console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = '';
    operation = '';
    currentNumber = '0';
}