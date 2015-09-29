var Thermostat = function() {
  this.temp = 20;
  this.mode = 'power saving';
  this.min = 10;
  this.max = 25;
};

Thermostat.prototype.setPowerSaving = function(value) {
  this.mode = (value ? 'power saving' : 'normal');
  this.max = (value ? 25 : 32);
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
