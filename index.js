// Inputs

const billAmount = document.getElementById("bill");
const tipOptions = document.querySelectorAll("#tips button");
const numberOfPeople = document.getElementById("people");
const customTip = document.getElementById("custom");

// Reset Calculator

const reset = document.getElementById("reset");

// Variables

let resetCalculator = false;
let percentage;

// Outputs

const errorM = document.getElementById("error-message");
const tipAmount = document.getElementById("tip");
const totalTipAmount = document.getElementById("total");

// Event listener for tipOptions buttons

tipOptions.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        if (!numberOfPeople.value || numberOfPeople.value === "0") {
            numberOfPeople.parentElement.classList.add("border-2", "border-red");
            errorM.classList.remove("invisible");
        } else {
            // Remove 'active' class from all buttons
            tipOptions.forEach(btn => btn.classList.remove("bg-StrongCyan", "text-DarkCyan"));
            
            // Add 'active' class to the clicked button
            e.target.classList.add("bg-StrongCyan", "text-DarkCyan");

            const tipPercentage = e.target.dataset.percentage;
            console.log("Button clicked, percentage: " + tipPercentage);
            numberOfPeople.parentElement.classList.remove("border-2", "border-red");
            errorM.classList.add("invisible");
            percentage = tipPercentage;
            calculateTip();
            resetCalculator = true;
            updateResetButtonOpacity();

        }
    });
});

// Event listener for customTip input using enter key

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const customTipPercentage = parseFloat(customTip.value);

        if (!numberOfPeople.value || numberOfPeople.value === "0") {
            numberOfPeople.parentElement.classList.add("border-2", "border-red");
            errorM.classList.remove("invisible");

        } else if (isNaN(customTipPercentage) || customTipPercentage === 0) {
            customTip.classList.add("border-2", "border-red");
            errorM.classList.add("invisible");

            numberOfPeople.parentElement.classList.remove("border-2", "border-red");

        } else {
            console.log("This is the custom percentage: " + customTipPercentage);
            percentage = customTipPercentage;
            calculateTip();
            resetCalculator = true;
            updateResetButtonOpacity();
        }
    }
});


// Reset button 
 
function updateResetButtonOpacity() {
    if (!resetCalculator) {
      reset.classList.add("bg-opacity-40");
    } else {
      reset.classList.remove("bg-opacity-40");
    }
  }

reset.addEventListener("click", () => {
  billAmount.value = "";
  tipOptions.value = "";
  numberOfPeople.value = "";
  customTip.value = "";
  tipAmount.innerHTML = "$0.00";
  totalTipAmount.innerHTML = "$0.00";
  resetCalculator = false;
  customTip.classList.remove("border-2", "border-red");

  updateResetButtonOpacity();
  tipOptions.forEach(btn => btn.classList.remove("bg-StrongCyan", "text-DarkCyan"));

});

// Tip calculator 

function calculateTip() {
  const bill = billAmount.value;
  const people = numberOfPeople.value;

  if (!resetCalculator) {
    console.log("This is functions " + percentage) // Console ouput is 5
    const finalBill = bill * (1 + (percentage / 100))
    let totalTipPerPerson = finalBill / people;
    let tipPerPerson = ((finalBill - bill) / people)

    // If the Bill is £ 0.00
    if (isNaN(bill) || bill == "0") {
      totalTipPerPerson = 0;
      tipPerPerson = 0;
    };

    tipAmount.innerHTML = `£${tipPerPerson.toFixed(2)}`;
    totalTipAmount.innerHTML = `£${totalTipPerPerson.toFixed(2)}`;
  }
}