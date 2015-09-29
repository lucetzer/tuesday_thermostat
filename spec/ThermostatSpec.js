describe('Thermostat', function() {

  var thermo;
  var save;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  describe('properties', function() {
    it('starts with temp of 20', function() {
      expect(thermo.temp).toBe(20);
    });
    it('starts in power saving mode', function() {
      expect(thermo.mode).toBe('power saving');
    });
    it('has a minimum of 10', function() {
      expect(thermo.min).toBe(10);
    });
    it('starts with maximum of 25', function() {
      expect(thermo.max).toBe(25);
    });
  });

  describe('power saving mode', function(){
    it('can switch power saving off', function() {
      thermo.setPowerSaving(false);
      expect(thermo.mode).toBe('normal');
    });
    it('can switch power saving on', function() {
      thermo.setPowerSaving(true);
      expect(thermo.mode).toBe('power saving');
    });
    it('has max of 25 in power saving mode', function() {
      thermo.setPowerSaving(true);
      expect(thermo.max).toBe(25);
    });
    it('has max of 32 in normal mode', function() {
      thermo.setPowerSaving(false);
      expect(thermo.max).toBe(32);
    });
  });

  describe('increase, decrease and reset', function() {
    it('notches up temperature on demand', function() {
      thermo.increase();
      expect(thermo.temp).toBe(21);
    });
    it('notches down temperature on demand', function() {
      thermo.decrease();
      expect(thermo.temp).toBe(19);
    });
    it('stops increasing temp at maximum', function() {
      while(thermo.temp < thermo.max) {thermo.increase()}
      save = thermo.temp;
      thermo.increase();
      expect(thermo.temp).toBe(save);
    });
    it('stops decreasing temp at minimum', function() {
      while(thermo.temp > thermo.min) {thermo.decrease()}
      save = thermo.temp;
      thermo.decrease();
      expect(thermo.temp).toBe(save);
    });
    it('resets temperature to 20 on demand', function() {
      thermo.increase();
      thermo.resetTemp();
      expect(thermo.temp).toBe(20);
    });
  });

});
