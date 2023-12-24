// Inputs

const billAmount = document.getElementById("bill");
const tipOptions = document.querySelectorAll("#tips button");
const numberOfPeople = document.getElementById("people");
const customTip = document.getElementById("custom");

// Reset Calculator

const reset = document.getElementById("reset");

let resetCalculator = false;
let percentage;

// Outputs

const tipAmount = document.getElementById("tip");
const totalTipAmount = document.getElementById("total");

// Event listener for tipOptions buttons

        tipOptions.forEach(button => {
            button.addEventListener("click", (e) => {
                if (e.type !== "click") {
                    return; // Ignore keyup events that were causing me issues
                }
        
                e.preventDefault();
        
                if (!numberOfPeople.value || numberOfPeople.value === "0") {
                    numberOfPeople.parentElement.classList.add("border-2", "border-red-300");
                } else {
                    const tipPercentage = e.target.dataset.percentage;
                    console.log("Button clicked, percentage: " + tipPercentage);
                    numberOfPeople.parentElement.classList.remove("border-2", "border-red-300");
                    percentage = tipPercentage;
                    calculateTip();
                    resetCalculator = true;
                }
            });
        });



// Event listener for customTip input using enter key

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.target === customTip) {
        const customTipPercentage = parseFloat(customTip.value);

        if (!numberOfPeople.value || numberOfPeople.value === "0") {
            numberOfPeople.parentElement.classList.add("border-2", "border-red-300");
        } else if (isNaN(customTipPercentage) || customTipPercentage === 0) {
            customTip.classList.add("border-2", "border-red-300");
            numberOfPeople.parentElement.classList.remove("border-2", "border-red-300");
        } else {
            console.log("This is the custom percentage: " + customTipPercentage);
            percentage = customTipPercentage;
            calculateTip();
            resetCalculator = true;
        }
    }
});


// Reset button 
reset.addEventListener("click", () => {
  billAmount.value = "";
  tipOptions.value = "";
  numberOfPeople.value = "";
  customTip.value = "";
  tipAmount.innerHTML = "0";
  totalTipAmount.innerHTML = "0";
  resetCalculator = false;
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



/**
 * Changing the logic
 * If the custom element is empty listen to a button and retrieve it's percentage and use that
 * if the custom is not empty use whatever is inputed to apply to the calculation
 */