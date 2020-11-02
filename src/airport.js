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
    var index = this.hangar.indexOf(plane);
    this.hangar.splice(index, 1);
  };
};