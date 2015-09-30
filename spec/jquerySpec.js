describe('Thermostat', function() {
  beforeEach(function() {
    loadFixtures('src/Thermostat.js');
    loadFixtures('Thermostat.html');
    loadFixtures('Application.js');
  });

  it('displays default temperature', function() {
    expect('#temp_display').toContainText('20');
  });

  it("increases temperature by 1 degree", function() {
    $('.up').click()
    expect($('#temp_display').text()).toContainText("21");
  });

});
