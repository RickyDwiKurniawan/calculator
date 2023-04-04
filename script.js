const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

let prevNumber = "";
let operation = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const inputOperator = (operator) => {
  // calculationOperator = operator

  // if(calculationOperator === '-' || calculationOperator === '+' || calculationOperator === '*' || calculationOperator === '/'){
  //     let Operat = '-'
  //     let Operat2 = '+'
  //     let Operat3 = '*'
  //     let Operat4 = '/'
  //     if (Operat === prevNumber || Operat2 === prevNumber || Operat3 === prevNumber || Operat4 === prevNumber ){
  //         prevNumber = currentNumber
  //         calculationOperator = operator
  //         currentNumber = '0'
  //     }
  //     else{
  //         prevNumber = currentNumber
  //         calculationOperator = operator

  //         currentNumber = ''
  //     }
  // }
  // else{
  //     prevNumber = currentNumber
  //     calculationOperator = operator
  //     currentNumber = ''
  // }
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(prevNumber) / 100;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  // console.log('AC button is pressed')
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  operation = "";
  currentNumber = "0";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (e) => {
  // console.log(e.target.value)
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  // currentNumber += dot
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
