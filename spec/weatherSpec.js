'use strict';

describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('can return stormy weather', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('can return storm-free weather', function(){
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
}); 