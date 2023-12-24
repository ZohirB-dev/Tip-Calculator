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


// Tip percentage

let percentage;












// Event listener for customTip input
customTip.addEventListener("keyup",  (e) =>{
    e.preventDefault();

    const customPercentage = parseFloat(e.target.value);

    if(key === "enter"){
        if (!isNaN(customPercentage) && customPercentage !== 0) {
            // Handle valid input (non-zero numeric value)
            console.log("Custom tip value entered: " + customTipValue);
            percentage = customTipValue;
            calculateTip();
        } else {
            // Handle invalid input (non-numeric or zero value)
            numberOfPeople.parentElement.classList.add("border-2", "border-red-300");
            selectedPercentage = null; // Reset the selectedPercentage variable
        }
    }
});

// Event listener for tipOptions buttons

tipOptions.forEach(button => {
    button.addEventListener("click", (e)=>{
        e.preventDefault();
            const buttonPercentage = parseFloat(e.target.dataset.percentage); // Get button percentage
            console.log("Button clicked, percentage: " + buttonPercentage);
            percentage = buttonPercentage;
            calculateTip();
            resetCalculator = true;
        });
        
    });




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





numberOfPeople.parentElement.classList.remove("border-2", "border-red-300");




// Tip calculator 

function calculateTip(bill, people, percentage){
        
    if(!resetCalculator){
        if(percentage !== null){

        }
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
 * The custom input works but only when you use it very quickly
 * If you don't it defaults to 5
 */