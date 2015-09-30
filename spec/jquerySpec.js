describe('Thermostat', function() {
  beforeEach(function() {
    loadFixtures('Thermostat.html');
  });

  it('displays default temperature', function() {
    expect('#temp_display').toContainText('20');
  });

  it("increases temperature by 1 degree", function() {
    var $temp = $('#temp');
    var $increase = $('#increase');

    $button.click();
    expect($temp_display.text()).toContainText("21");
  });

});
