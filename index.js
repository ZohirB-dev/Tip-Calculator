// Inputs

const billAmount = document.getElementById("bill");
const tipOptions = document.querySelectorAll("#tips button");
const numberOfPeople = document.getElementById("people");
const customTip = document.getElementById("custom");

// Reset Calculator

const reset = document.getElementById("reset");

let resetCalculator = false;

// Outputs

const tipAmount = document.getElementById("tip");
const totalTipAmount = document.getElementById("total");

// Tip input trigger
const handleTipInput = (e) => {
    const clickedElement = e.target; // Get the clicked element (button or custom input)
    const isCustomTip = clickedElement.id === "custom";

    e.preventDefault(); // Prevent default behavior for both events

    if (!numberOfPeople.value || numberOfPeople.value === "0") {
        numberOfPeople.parentElement.classList.add("border-2", "border-red-300");
        ; // Exit if number of people is invalid
    } else if(isCustomTip) {
        let tipPercentage = parseFloat(customTip.value);
        if (isNaN(tipPercentage) || tipPercentage === 0) {
            customTip.classList.add("border-2", "border-red-300");
    } else {
        tipPercentage = clickedElement.dataset.percentage;
        numberOfPeople.parentElement.classList.remove("border-2", "border-red-300");
        calculateTip(billAmount.value, numberOfPeople.value, tipPercentage);
        resetCalculator = true;
    }
    }
};

// Attach event listeners to both tip options and custom tip
tipOptions.forEach(button => button.addEventListener("click", handleTipInput));
customTip.addEventListener("keyup", handleTipInput);
    

// Reset button 
    reset.addEventListener("click", ()=>{
        billAmount.value = "";
        tipOptions.value = "";
        numberOfPeople.value = "";
        customTip.value = "";
        tipAmount.innerHTML = "0";
        totalTipAmount.innerHTML = "0";
        resetCalculator = false;
    });









// Tip calculator 

function calculateTip(bill, people, percentage){
        
    if(!resetCalculator){
        console.log("This is functions " + percentage) // Console ouput is 5
        const finalBill = bill * (1 + (percentage/ 100))
        
        let totalTipPerPerson = finalBill / people;
        let tipPerPerson = ((finalBill - bill)/ people)
        
        tipAmount.innerHTML = `£${tipPerPerson.toFixed(2)}`;
        totalTipAmount.innerHTML = `£${totalTipPerPerson.toFixed(2)}`;
        
        // If the Bill is £ 0.00
        if(isNaN(bill) || bill == "0"){
            finalBill = 0;
            totalTipAmount = 0;
        };

        
        
    }
        
    
}



/**
 * Changing the logic
 * If the custom element is empty listen to a button and retrieve it's percentage and use that
 * if the custom is not empty use whatever is inputed to apply to the calculation
 */