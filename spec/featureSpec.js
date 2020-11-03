'use strict';

describe('Feature Test:', function(){
  var plane;
  var plane2;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    plane2 = new Plane();
    airport = new Airport();
  });

  it('planes can land at airports', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  })

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
  })

  it('blocks take off when weather is stormy', function(){
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeOff();}).toThrowError('DANGER - STORMY WEATHER');
    expect(airport.planes()).toContain(plane);
  });
})