//reference to the button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')

//reference to the smsTotal
var smsTotalTwo = document.querySelector('.smsTotalTwo')

//reference to call total
var callTotalTwo = document.querySelector('.callTotalTwo')

//reference to final total
var totalTwo = document.querySelector('.totalTwo')

//variable to track call total
var callTotal = 0;

//variable to track sms total
var smsTotal = 0;

//variable to track final total;
var billTotal = 0;


radioBillAddBtn.addEventListener('click', () => {
    //reference the checked button
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    }

    //add appropriate ammounts to appropriate totals
    if(billItemType === 'call'){
        callTotal += 2.75
    }else if(billItemType = 'sms'){
        smsTotal += 0.65
    }else {
        callTotal += 0;
        smsTotal+= 0;
    }

    //calculate totalBill
    totalBill = callTotal + smsTotal;

    //display totals on webpage
    callTotalTwo.innerHTML = callTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    totalBill = smsTotal + callTotal;
    totalTwo.innerHTML = totalBill.toFixed(2);

    //change colors according to total value
    if((totalBill) > 30){
        totalTwo.classList.add('warning')
    }
    if((totalBill) > 50){
        totalTwo.classList.add('danger')
    }
})
