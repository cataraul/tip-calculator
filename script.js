// Selecting the dom elements

const buttons = document.querySelectorAll(".tip-amount");
const reset = document.getElementById("reset");
const bill = document.getElementById("money");
const customTip = document.getElementById("custom-amount");
const numberPeople = document.getElementById("number-people");
const totalAmount = document.getElementById("total-amount");
const tipAmount = document.getElementById("tip-amount-person");
const errorP = document.getElementById("error");
const dollarSign = document.querySelector(".fa-dollar-sign");
const userSign = document.querySelector(".fa-users");

let valueAmount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let cash = parseFloat(bill.value);
    //Chechink the number of people
    if (bill.value === "") {
      totalAmount.textContent = `$0.00`;
      tipAmount.textContent = `$0.00`;
    }
    if (numberPeople.value !== "") {
      if (customTip.value === "") {
        let percentValue = this.value;
        valueAmount = ((percentValue / 100) * cash) / numberPeople.value;
        tipAmount.textContent = `$${valueAmount.toFixed(2)}`;
        let total =
          (valueAmount * numberPeople.value + cash) / numberPeople.value;
        totalAmount.textContent = `$${total.toFixed(2)}`;
      } else {
        let percentValue = customTip.value;
        valueAmount = ((percentValue / 100) * cash) / numberPeople.value;
        tipAmount.textContent = `$${valueAmount.toFixed(2)}`;
        let total =
          (valueAmount * numberPeople.value + cash) / numberPeople.value;
        totalAmount.textContent = `$${total.toFixed(2)}`;
      }
      //If there are no people there can't be a tip - adding the class to the paragraph that says that there can not be 0 people
    } else {
      errorP.style.display = "block";
      numberPeople.style.borderTop = "0.19rem solid #d24b2d";
      numberPeople.style.borderRight = "0.19rem solid #d24b2d";
      numberPeople.style.borderBottom = "0.19rem solid #d24b2d";
      totalAmount.textContent = `$0.00`;
      tipAmount.textContent = `$0.00`;
      userSign.style.borderTop = "0.19rem solid #d24b2d";
      userSign.style.borderLeft = "0.19rem solid #d24b2d";
      userSign.style.borderBottom = "0.19rem solid #d24b2d";
    }
  });
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
