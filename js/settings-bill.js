

// get refences to all the settings fields
var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');

//get reference to all the totals fields
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

//get a reference to the add button
var addBill = document.querySelector('.addBill');

//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings
var smsSettings = 0;
var callSettings = 0;
var warningSettings = 0;
var criticalSettings = 0;

// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var billTotal = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', () => {
    smsSettings = smsCostSetting.value 
    callSettings = callCostSetting.value
    warningSettings = warningLevelSetting.value
    criticalSettings = criticalLevelSetting.value
})

//add an event listener for when the add button is pressed
addBill.addEventListener('click', () => {
    // get a reference to the sms or call radio buttons
    var billItemTypeWithSettings = document.querySelector('input[name="billItemTypeWithSettings"]:checked');
    if(billItemTypeWithSettings){
        var billType = billItemTypeWithSettings.value;
    }

    //add to relevant totals when button is clicked
    if(billType === 'call' && billTotal < parseFloat(criticalLevelSetting.value)) {
        callTotal += parseFloat(callCostSetting.value)
    }else if(billType = 'sms' && billTotal < parseFloat(criticalLevelSetting.value)){
        smsTotal += parseFloat(smsCostSetting.value)
    }else{
        callTotal += 0;
        smsTotal += 0;
    }

    //display totals on the webpage
    callTotalSettings.innerHTML = callTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    billTotal = callTotal + smsTotal;
    totalSettings.innerHTML = billTotal.toFixed(2);

    //change colors depending on total level

    if(billTotal >= parseFloat(warningLevelSetting.value)){
        totalSettings.classList.add('warning');
    }    
    
    if(billTotal >= parseFloat(criticalLevelSetting.value)){
        totalSettings.classList.add('danger');
    }
})


// *in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
