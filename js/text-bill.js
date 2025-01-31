// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');

//reference to the total 
var totalOne = document.querySelector('.totalOne')

//reference to the sms total 
var smsTotalOne = document.querySelector('.smsTotalOne')

//reference to the call total
var callTotalOne = document.querySelector('.callTotalOne')

//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');

//Create a variable that will keep track of the sms total
var smsTotal = 0

//Create  a variable that will kep track of the call total
var callTotal = 0;

//create a variable that will keep track of the total bill
var totalBill = 0;

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(billTypeText.value === 'call'){
        callTotal += 2.75
    }else if(billTypeText.value ==='sms'){
        smsTotal += 0.75
    }else {
        totalBill += 0
    }
    callTotalOne.innerHTML = callTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    totalBill = smsTotal + callTotal;
    totalOne.innerHTML = totalBill.toFixed(2);
    if((totalBill) > 30){
        totalOne.classList.add('warning')
    }
    if((totalBill) > 50){
        totalOne.classList.add('danger')
    }
})

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
