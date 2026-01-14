let calcTxt = document.getElementById("calc-txt");

let value1 = "";
let value2 = "";
let op = "";
let hasOp = false;
let sumTotal = 0;

const equalBtn = document.querySelector(".equal-btn");
const opBtns = document.querySelectorAll(".op-btn");
const numberBtns = document.querySelectorAll(".number-btn");

//functions
function calculate(sumTotal, value) {
  return (sumTotal += value);
}

//events
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (e) => {
    if (hasOp) {
      value2 += e.target.textContent;
      updateCalcTxt(e.target.textContent);
      setTimeout(() => calcTxt.textContent = sumTotal,500)
    } else {
      value1 += e.target.textContent;
      updateCalcTxt(e.target.textContent);
    }
  });
});
opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", (e) => {
    if (op !== "") {
      switch (op) {
        case "+":
          sumTotal = +value1 + +value2;
          break;
        case "-":
          sumTotal + value1 - +value2;
          break;
        case "/":
          sumTotal = +value1 / +value2;
          break;
        case "x":
          sumTotal = +value1 * +value2;
          break;
      }

      console.log(sumTotal);
      calcTxt.textContent = "" + sumTotal;
      value1 = `${sumTotal}`;
      value2 = "";
      op = "";
      return;
    }
    op = e.target.textContent;
    updateCalcTxt(e.target.textContent);
    hasOp = true;
  });
});
equalBtn.addEventListener("click", (e) => {
      if (op !== "") {
      switch (op) {
        case "+":
          sumTotal = +value1 + +value2;
          break;
        case "-":
          sumTotal + value1 - +value2;
          break;
        case "/":
          sumTotal = +value1 / +value2;
          break;
        case "x":
          sumTotal = +value1 * +value2;
          break;
      }
  console.log(sumTotal);
  calcTxt.textContent = "" + sumTotal;
  value1 = `${sumTotal}`;
  value2 = "";
  op = "";
    }
});

// helper functions
const updateCalcTxt = (txt) => {
  calcTxt.textContent += txt;
};

//error handlers
