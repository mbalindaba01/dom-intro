//reference to the button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')

//reference to the smsTotal
var smsTotalTwo = document.querySelector('.smsTotalTwo')

//reference to call total
var callTotalTwo = document.querySelector('.callTotalTwo')

//reference to final total
var totalTwo = document.querySelector('.totalTwo')

//variable to track call total
var radioCallTotal = 0;

//variable to track sms total
var radioSmsTotal = 0;

//variable to track final total;
var radioBillTotal = 0;


radioBillAddBtn.addEventListener('click', () => {
    //reference the checked button
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    }

    //add appropriate ammounts to appropriate totals
    if(billItemType === 'call'){
        radioCallTotal += 2.75
    }else if(billItemType = 'sms'){
        radioSmsTotal += 0.75
    }else {
        radioCallTotal += 0;
        radioSmsTotal+= 0;
    }

    //calculate totalBill
    radioBillTotal = radioCallTotal + radioSmsTotal;

    //display totals on webpage
    callTotalTwo.innerHTML = radioCallTotal.toFixed(2);
    smsTotalTwo.innerHTML = radioSmsTotal.toFixed(2);
    radioBillTotal = radioSmsTotal + radioCallTotal;
    totalTwo.innerHTML = radioBillTotal.toFixed(2);

    //change colors according to total value
    if((radioBillTotal) > 30){
        totalTwo.classList.add('warning')
    }
    if((radioBillTotal) > 50){
        totalTwo.classList.add('danger')
    }
})
