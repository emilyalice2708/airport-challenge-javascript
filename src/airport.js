'use strict';

class Airport {
  constructor() {
    this.hangar = [] 
  };

  planes() {
    return this.hangar;
  };

  clearForLanding(plane) {
    this.hangar.push(plane);
  };

  clearForTakeOff(plane) {
    if(this.isStormy()) {
      throw new Error('DANGER - STORMY WEATHER');
    }
    var index = this.hangar.indexOf(plane);
    this.hangar.splice(index, 1);
  };

  isStormy() {
    return false;
  };
};