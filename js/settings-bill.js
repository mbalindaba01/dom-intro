

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
var settingsCallTotal = 0;
var settingsSmsTotal = 0;
var settingsBillTotal = 0;

//add an event listener for when the add button is pressed
addBill.addEventListener('click', () => {
    // get a reference to the sms or call radio buttons
    var billItemTypeWithSettings = document.querySelector('input[name="billItemTypeWithSettings"]:checked');
    if(billItemTypeWithSettings){
        var billType = billItemTypeWithSettings.value;
    }

    //add to relevant totals when button is clicked
    if(billType === 'call' && settingsBillTotal < parseFloat(criticalLevelSetting.value)) {
        settingsCallTotal += parseFloat(callCostSetting.value)
    }else if(billType = 'sms' && settingsBillTotal < parseFloat(criticalLevelSetting.value)){
        settingsSmsTotal += parseFloat(smsCostSetting.value)
    }else{
        settingsCallTotal += 0;
        settingsSmsTotal += 0;
    }


    //display totals on the webpage
    callTotalSettings.innerHTML = settingsCallTotal.toFixed(2);
    smsTotalSettings.innerHTML = settingsSmsTotal.toFixed(2);
    settingsBillTotal = settingsCallTotal + settingsSmsTotal;
    totalSettings.innerHTML = settingsBillTotal.toFixed(2);

    //change colors depending on total level

    if(settingsBillTotal >= parseFloat(warningLevelSetting.value)){
        totalSettings.classList.add('warning');
    }    
    
    if(settingsBillTotal >= parseFloat(criticalLevelSetting.value)){
        totalSettings.classList.add('danger');
    }
})

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', () => {
    smsSettings = smsCostSetting.value 
    callSettings = callCostSetting.value
    warningSettings = warningLevelSetting.value
    criticalSettings = criticalLevelSetting.value

    if(parseFloat(warningLevelSetting.value) > settingsBillTotal){
        totalSettings.classList.remove('warning');
    }    
    
    if(parseFloat(criticalLevelSetting.value) > settingsBillTotal){
        totalSettings.classList.remove('danger');
    }
    })

// *in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
