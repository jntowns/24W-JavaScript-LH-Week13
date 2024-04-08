/* Variables
-------------------------------------------------- */
// STEP 1a: Grab the first <dd> element for displaying the battery charging status
const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
// STEP 1b: Grab the <output> element inside the second <dd> element for displaying the battery charge level
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
// STEP 1c: Grab the <progress> element inside the second <dd> element for a more graphical representation of the battery's state of charge (SOC)
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');

const batteryContainer = document.querySelector('#battery')

const hashImg = document.createElement("img");
batteryContainer.appendChild(hashImg);

/* Functions
-------------------------------------------------- */
// STEP 3a: Create the updateBatteryStatus() function

// STEP 3b: Update the charging status

// STEP 3c: Update the charge level

function updateBatteryStatus(battery) {
    if (battery.chargeStatus) {
        chargeStatus.textContent = "Charging";
    } else {
        chargeStatus.textContent = "Discharging";
    }

    chargeLevel.textContent = (battery.level * 100) + "%";
    chargeMeter.value = battery.level * 100;

    hashImg.src = 'https://robohash.org/' + (battery.level * 100) + '.png';
    hashImg.alt = (battery.level * 100) + " percent"
}

// STEP 2a: Using the getBattery() method of the navigator object, 
//create a promise to retrieve the battery information

// STEP 2b: See what the battery object contains

navigator.getBattery().then(function(battery) {
    updateBatteryStatus(battery);

    battery.onchargingchance = function() {
        updateBatteryStatus(battery);
    };

    battery.onlevelchange = function() {
        updateBatteryStatus(battery);
    };
});

// STEP 3d: Update the battery information when the promise resolves

// STEP 4a: Event listener for changes to the charging status

// STEP 4b: Event listener for changes to the charge level


/* This script adapted from the excellent code examples found at https://www.w3.org/TR/battery-status/#examples and https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API */