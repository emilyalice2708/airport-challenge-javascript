'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
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
})