var Thermostat = function() {
  this.temp = 20;
  this.min = 10;
  this.modeOn();
};

// Thermostat.prototype.setPowerSaving = function(value) {
//   this.mode = (value ? 'power saving' : 'normal');
//   this.max = (value ? 25 : 32);
// };

Thermostat.prototype.modeOn = function() {
  this.max = 25;
  this.isPowerSaving = true;
  if(this.temp > 25) this.temp = 25;
};

Thermostat.prototype.modeOff = function() {
  this.max = 32;
  this.isPowerSaving = false;
};


Thermostat.prototype.increase = function() {
  if(this.temp < this.max) {this.temp++}
};

Thermostat.prototype.decrease = function() {
  if(this.temp > this.min) {this.temp--}
};

Thermostat.prototype.resetTemp = function() {
  this.temp = 20;
};
