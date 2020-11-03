'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under good weather conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for take-off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });


  });

  describe('under stormy weather conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

    it('prevents landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('DANGER - STORMY WEATHER')
    });

    it('prevents take-off', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('DANGER - STORMY WEATHER')
    });
  });
});