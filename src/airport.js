'use strict';

class Airport {
  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this.hangar = [] 
  };

  planes() {
    return this.hangar;
  };

  clearForLanding(plane) {
    if(this._weather.isStormy()) {
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

  //isStormy() {
   // return false;
  //};
};