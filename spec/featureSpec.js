'use strict';

describe('Feature Test:', function(){
  var plane;
  var plane2;
  var airport;
  var smallAirport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    plane2 = new Plane();
    airport = new Airport();
    weather = new Weather();
    smallAirport = new Airport(weather, 1);
  });
  
  describe('under good weather conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('planes can land at airports', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('plans can take off from airports', function(){
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    });

    it('only planes that take-off leave the airport', function(){
      plane.land(airport);
      plane2.land(airport);
      plane.takeOff();
      expect(airport.planes()).toContain(plane2);
    });

    it('blocks landing when airport is full', function(){
      plane.land(smallAirport);
      expect(function(){ plane2.land(smallAirport); }).toThrowError('AIRPORT AT FULL CAPACITY');
      expect(smallAirport.planes()).not.toContain(plane2);
    });
  });

  describe('under stormy weather conditions', function(){

    it('blocks take off when weather is stormy', function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ plane.takeOff();}).toThrowError('DANGER - STORMY WEATHER');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when weather is stormy', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('DANGER - STORMY WEATHER');
      expect(airport.planes()).toEqual([]);
    });
  });
});