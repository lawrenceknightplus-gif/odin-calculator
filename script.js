// get all html relevent html elements
const calcTxt = document.getElementById("calc-txt");
const currentTotalTtxt = document.getElementById("current-total");

const buttons = document.querySelectorAll("button");

// set users value 1 in a int veriable
let value1 = "";
// set users operation in a string veriable
let op = "";
// set is op active into a bool veriable
let isopActive;

let value2 = "";

// set sum total in a int veriable
let total = 0;

// update total
const updateTotal = (value) =>
  total === 0 ? (total = value) : (total = total += value);

// calc functions
// add
// subtract
// divide
// times
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const times = (a, b) => a * b;

// check value1 has a int value before clicking =
// if not throw error msg pop up
// else continue
// end

const validateHasValue = (value) => {
  if (value === 0) return errorPopUp("nice try but you cant calculate 0");
};

// calculate sum total

const calculateSum = () => {
  switch (op) {
    case "+":
      add(value1, value2);
      break;
    case "-":
      subtract(value1, value2);

      break;
    case "/":
      divide(value1, value2);

      break;
    case "x":
      times(value1, value2);

      break;
  }
};

// display users calculation & current total

const updateCalcEl = (value) => {
  calcTxt.textContent += value;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let valueInput = e.target.textContent;
    let validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let validOps = ["+", "-", "/", "+", "x"];

    if (valueInput === "=") {
      return validateHasValue(total);
    }
    calcTxt.textContent += valueInput;
    if (validOps.includes(calcTxt.textContent)) {
      value2 += valueInput;
    } else {
      value1 += valueInput;
    }

    console.log(value1, value2);
  });
});

const updateCurrentTotalEl = (total) => {
  total === 0 ? "" : (currentTotalTtxt.textContent = total);
};
updateCurrentTotalEl(total);
// display sum total

// error pop ups
const errorPopUp = (msg) => {
  const popUp = document.createElement("div");
  const header = document.createElement("div");
  const body = document.createElement("div");

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  popUp.className = "error";
  const p = document.createElement("p");

  closeBtn.addEventListener("click", (e) => {
    closeErrorPopUp(popUp);
  });
  p.textContent = msg;
  document.body.append(popUp);
  popUp.append(header, body);
  body.append(p, closeBtn);
};

const closeErrorPopUp = (popup) => {
  document.body.removeChild(popup);
};
