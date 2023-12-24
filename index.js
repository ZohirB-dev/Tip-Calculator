// Inputs

const billAmount = document.getElementById("bill")

const tipOptions = document.getElementById("tips")

tipOptions.addEventListener("click", (e)=>{
     e.preventDefault();

    if(e.target.tagName === "BUTTON"){
        const clickedOption = e.target;
        const tipPercentage = clickedOption.dataset.percentage;
        console.log(tipPercentage);

    }
})
