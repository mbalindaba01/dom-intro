//get a reference to the billString
var billString = document.querySelector('.billString');

//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');

//get a reference to the billTotal element
var billTotal = document.querySelector('.billTotal');


//create the function that will be called when the calculate button is pressed
const calculateBill = () => {
    billCalc = 0;
    var billArr = billString.value.split(',');
    for(let i = 0; i < billArr.length; i++){
        var bill = billArr[i].trim()
        if(bill === "call") {
            billCalc += 2.75;
        }else if(bill = "sms"){
            billCalc += 0.75
        }
    }  
    if(billCalc > 20){
        billTotal.classList.add('warning');
    }
    if(billCalc > 30){
        billTotal.classList.add('danger');
    }
    billTotal.innerHTML = billCalc.toFixed(2);
}


//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calculateBill();
})