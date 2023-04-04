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

const percentages = document.querySelector(".percentage");
percentages.addEventListener("click", (e) => {
  // console.log(e.target.value)
  percent(e.target.value);
  updateScreen(currentNumber);
});

const percent = (per) => {
  // currentNumber += per
  // if (currentNumber.includes(".")) {
  //   return;
  // }
  // currentNumber += per;
  currentNumber=currentNumber/100
};
const inputOperator = (operator) => {
  
  if(currentNumber == '') return
  if(prevNumber !== ''){
    calculate()
  }
 
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
  if (isNaN(prevNumber) || isNaN(currentNumber)) return
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
    // case "%":
    //   result = parseFloat(prevNumber) / 100;
    //   break;
    default:
      return;
  }
  currentNumber = result;
  // calculationOperator = "";
  calculationOperator = undefined;
  prevNumber = ''
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