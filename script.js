// Selecting the dom elements

const buttons = document.querySelectorAll(".tip-amount");
const reset = document.getElementById("reset");
const calculate = document.getElementById("calculate");
const bill = document.getElementById("money");
const customTip = document.getElementById("custom-amount");
const numberPeople = document.getElementById("number-people");
const totalAmount = document.getElementById("total-amount");
const tipAmount = document.getElementById("tip-amount-person");
const errorP = document.getElementById("error");
const dollarSign = document.querySelector(".fa-dollar-sign");
const userSign = document.querySelector(".fa-users");

// const _5 = document.getElementById("_5");
// const _10 = document.getElementById("_10");
// const _15 = document.getElementById("_15");
// const _20 = document.getElementById("_20");
// const _25 = document.getElementById("_25");

let valueAmount = 0;

// _5.addEventListener("click", function () {
//   let cash = parseFloat(bill.value);
//   let valueNum = parseInt(this.value);
//   let tipValue = (cash * (valueNum / 100)) / parseInt(numberPeople.value);
//   console.log(tipValue);
//   tipAmount.textContent = `$${tipValue.toFixed(2)}`;
//   let total = tipValue + cash / parseInt(numberPeople.value);
//   totalAmount.textContent = `$${total.toFixed(2)}`;
// });
// _10.addEventListener("click", function () {
//   let cash = parseFloat(bill.value);
//   let valueNum = parseInt(this.value);
//   let tipValue = (cash * (valueNum / 100)) / parseInt(numberPeople.value);
//   console.log(tipValue);
//   tipAmount.textContent = `$${tipValue.toFixed(2)}`;
//   let total = tipValue + cash / parseInt(numberPeople.value);
//   totalAmount.textContent = `$${total.toFixed(2)}`;
// });
// _15.addEventListener("click", function () {
//   let cash = parseFloat(bill.value);
//   let valueNum = parseInt(this.value);
//   let tipValue = (cash * (valueNum / 100)) / parseInt(numberPeople.value);
//   console.log(tipValue);
//   tipAmount.textContent = `$${tipValue.toFixed(2)}`;
//   let total = tipValue + cash / parseInt(numberPeople.value);
//   totalAmount.textContent = `$${total.toFixed(2)}`;
// });
let hasError = false;
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    //If there are no people there can't be a tip - adding the class to the paragraph that says that there can not be 0 people
    if (numberPeople.value == 0 || numberPeople.value == "") {
      errorP.style.display = "block";
      numberPeople.style.borderTop = "0.19rem solid #d24b2d";
      numberPeople.style.borderRight = "0.19rem solid #d24b2d";
      numberPeople.style.borderBottom = "0.19rem solid #d24b2d";
      totalAmount.textContent = `$0.00`;
      tipAmount.textContent = `$0.00`;
      // userSign.style.borderTop = "0.19rem solid #d24b2d";
      // userSign.style.borderLeft = "0.19rem solid #d24b2d";
      // userSign.style.borderBottom = "0.19rem solid #d24b2d";
      userSign.classList.add("user-sign-border");
      hasError = true;
    } else {
      if (hasError) {
        hasError = false;
        numberPeople.style.border = "initial";
        userSign.classList.remove("user-sign-border");
        errorP.style.display = "none";
      }
      let cash = parseFloat(bill.value);
      let valueNum = parseInt(this.value);
      let tipValue = (cash * (valueNum / 100)) / parseInt(numberPeople.value);
      console.log(tipValue);
      tipAmount.textContent = `$${tipValue.toFixed(2)}`;
      let total = tipValue + cash / parseInt(numberPeople.value);
      totalAmount.textContent = `$${total.toFixed(2)}`;
    }
  });
});
customTip.addEventListener("input", function () {
  if (numberPeople.value == 0 || numberPeople.value == "") {
    console.log("error");
    errorP.style.display = "block";
    numberPeople.style.borderTop = "0.19rem solid #d24b2d";
    numberPeople.style.borderRight = "0.19rem solid #d24b2d";
    numberPeople.style.borderBottom = "0.19rem solid #d24b2d";
    totalAmount.textContent = `$0.00`;
    tipAmount.textContent = `$0.00`;
    // userSign.style.borderTop = "0.19rem solid #d24b2d";
    // userSign.style.borderLeft = "0.19rem solid #d24b2d";
    // userSign.style.borderBottom = "0.19rem solid #d24b2d";
    userSign.classList.add("user-sign-border");
    hasError = true;
  } else {
    if (hasError) {
      hasError = false;
      numberPeople.style.border = "initial";
      userSign.classList.remove("user-sign-border");
      errorP.style.display = "none";
    }
    let cash = parseFloat(bill.value);
    let valueNum = parseInt(this.value);
    let tipValue = (cash * (valueNum / 100)) / parseInt(numberPeople.value);
    console.log(tipValue);
    tipAmount.textContent = `$${tipValue.toFixed(2)}`;
    let total = tipValue + cash / parseInt(numberPeople.value);
    totalAmount.textContent = `$${total.toFixed(2)}`;
  }
  if (this.value == 0) {
    let cash = parseFloat(bill.value);

    let total = cash / parseInt(numberPeople.value);
    totalAmount.textContent = `${total}`;
    tipAmount.textContent = `$0.00`;
  }
});

reset.addEventListener("click", function () {
  valueAmount = 0;
  bill.value = 0;
  numberPeople.value = 0;
  totalAmount.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  errorP.style.display = "none";
  userSign.style.border = "none";
  numberPeople.style.border = "none";
  customTip.value = 0;
});

//EVENT LISTENERS FOR BORDERS OF THE INPUTS SVGS
bill.addEventListener("focus", function () {
  dollarSign.classList.add("border");
});
bill.addEventListener("focusout", function () {
  dollarSign.classList.remove("border");
});
numberPeople.addEventListener("focus", function () {
  userSign.classList.add("border");
});
numberPeople.addEventListener("focusout", function () {
  userSign.classList.remove("border");
});
// calculate.addEventListener("click", function () {
//   if (tipPercent == undefined) {
//     alert("Please select tip percentage!");
//     totalAmount.textContent = `$0.00`;
//     tipAmount.textContent = `$0.00`;
//   }
//   if (bill.value === "") {
//     totalAmount.textContent = `$0.00`;
//     tipAmount.textContent = `$0.00`;
//   }
//   //Checking the number of people
//   if (numberPeople.value !== "") {
//     if (customTip.value === "") {
//       let tipValue = tipPercent / 100;
//       console.log(tipValue);

//       valueAmount = (cash * tipValue) / numberPeople.value;
//       console.log(valueAmount);
//       tipAmount.textContent = `$${valueAmount.toFixed(2)}`;
//       let total = cash / numberPeople.value + valueAmount;
//       totalAmount.textContent = `$${total.toFixed(2)}`;
//     } else {
//       let percentValue = customTip.value;
//       valueAmount = ((percentValue / 100) * cash) / numberPeople.value;
//       tipAmount.textContent = `$${valueAmount.toFixed(2)}`;
//       let total =
//         (valueAmount * numberPeople.value + cash) / numberPeople.value;
//       totalAmount.textContent = `$${total.toFixed(2)}`;
//     }
//   }
// });
