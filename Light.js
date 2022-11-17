"use strict";

function Light(name, options, levels) {
  Device.call(this, name);
  this.__options = options;
  this.__currOption = options[0];
  this.__levels = levels;
  this.__currLevel = levels[0];
}

Light.prototype = Object.create(Device.prototype);
Light.prototype.constructor = Light;

// Array.prototype.nextLevel = function () {
//   return this[++this.__currLevel];
// };
// Array.prototype.prevLevel = function () {
//   return this[--this.current];
// };

// Array.prototype.nextOption = function () {
//   return this[++this.__currOption];
// };

// Array.prototype.prevOption = function () {
//   return this[--this.__currOption];
// };

Light.prototype.seOption = function (option) {
  if (
    typeof option !== "number" ||
    option < 0 ||
    option > this.__options.length - 1
  ) {
    console.log("Incorrect value for Light option");
    this.__currOption = this.__options[0];
  }
  this.__currOption = this.__options[option];
};

Light.prototype.setLevel = function (level) {
  if (
    typeof level !== "number" ||
    level < 0 ||
    level > this.__levels.length - 1
  ) {
    console.log("Incorrect value for Light level");
    this.__currLevel = this.__levels[0];
  }
  this.__currLevel = this.__levels[level];
};

Light.prototype.incrOption = function () {
  if (this.__currOption === this.__options.length - 1) {
    this.__currOption = this.__options[0];
  } else {
    this.__currOption =
      this.__options[this.__options.indexOf(this.__currOption) + 1]; // how to increase
  }
};

Light.prototype.decrOption = function () {
  if (this.__currOption === 0) {
    this.__currOption = this.__options[this.__options.length - 1];
  } else {
    this.__currOption =
      this.__options[this.__options.indexOf(this.__currOption) - 1]; // how to decrease
  }
};

Light.prototype.incrLevel = function () {
  if (this.__currLevel === this.__levels.length - 1) {
    this.__currLevel = this.__levels[0];
  } else {
    this.__currLevel =
      this.__levels[this.__levels.indexOf(this.__currLevel) + 1]; // how to increase
  }
};

Light.prototype.decrLevel = function () {
  if (this.__currLevel === 0) {
    this.__currLevel = this.__levels[this.__levels.length - 1];
  } else {
    this.__currLevel =
      this.__levels[this.__levels.indexOf(this.__currLevel) - 1]; // how to decrease
  }
};

Light.prototype.getInfo = function () {
  return (
    Device.prototype.getInfo.call(this) +
    "\ncurrent Light option : " +
    this.__currOption +
    "\ncurrent Light level: " +
    this.__currLevel +
    "\nlist of Light options: " +
    this.__options +
    "\nlist of Light levels: " +
    this.__levels
  );
};
