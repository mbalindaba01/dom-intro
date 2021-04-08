//get a reference to the billString
var billString = document.querySelector('.billString');

//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');






//create the function that will be called when the calculate button is pressed
function calculateBill() {
    //get a reference to the billTotal element
    var calcBillTotal = document.querySelector('.billTotal');
    var calcTotal = 0;
    var billArr = billString.value.split(',');
    for (let i = 0; i < billArr.length; i++) {
        var bill = billArr[i].trim();
        if (bill === 'call') {
            calcTotal += 2.75;
        } else if (bill === 'sms') {
            calcTotal += 0.75;
        }
    }
    calcBillTotal.innerHTML = calcTotal.toFixed(2);

    if(calcTotal > 20){
        calcBillTotal.classList.add('warning');
    }

    if(calcTotal > 30){
        calcBillTotal.classList.add('danger')
    }

    if(calcTotal < 30){
        calcBillTotal.classList.remove('danger')
    }

    if(calcTotal < 20) {
        calcBillTotal.classList.remove('warning')
    }
}


//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', () => {
    calculateBill();
    console.log('hello')
})