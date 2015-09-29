describe('Thermostat', function() {

  var thermo;

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

});
