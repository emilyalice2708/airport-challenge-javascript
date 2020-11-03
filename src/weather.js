'use strict';

class Weather {
  constructor() {
    this._CHANCE_OF_STORMS = 0.5;
  };

  isStormy() {
    return (Math.random() > this._CHANCE_OF_STORMS);
  };
}