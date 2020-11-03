'use strict';

class Airport {
  constructor(weather, capacity) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._capacity = capacity !== 'undefined' ? capacity : 20;
    this.hangar = [] 
  };

  planes() {
    console.log(this.hangar.length);
    console.log(this.capacity);
    return this.hangar;
  };

  clearForLanding(plane) {
    if(this._capacity == this.hangar.length) {
      throw new Error('AIRPORT AT FULL CAPACITY');
    }
    else if(this._weather.isStormy()) {
      throw new Error('DANGER - STORMY WEATHER');
    }
    this.hangar.push(plane);
  };

  clearForTakeOff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('DANGER - STORMY WEATHER');
    }
    var index = this.hangar.indexOf(plane);
    this.hangar.splice(index, 1);
  };
};