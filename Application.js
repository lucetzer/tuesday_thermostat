var thermo;

function initialiseApp() {
  thermo = new Thermostat;
  updateTempDisplay();
}

function updateTempDisplay() {
  document.getElementById('temp_display').innerHTML = thermo.temp;
}

function clickReset() {
  thermo.resetTemp();
  updateTempDisplay();
}

document.body.onload = initialiseApp;
document.getElementById('reset_button').onclick = clickReset;
