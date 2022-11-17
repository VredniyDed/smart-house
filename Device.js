"use strict";

function Device(name) {
  this.__name = name;
  this.__time = 0;
  this.__power = false;
}
Device.prototype.getPower = function () {
  return this.__power;
};

Device.prototype.setPower = function (power) {
  if (typeof power !== "boolean") {
    power = false;
    console.log("Incorrect value for power = " + power);
  }
  this.__power = power;

  if (this.__power === true) {
    this.__time = Date.now();
    console.log("Timer started...");
  } else {
    this.__time = 0;
  }
};

Device.prototype.getName = function () {
  return this.__name;
};

Device.prototype.getTime = function () {
  if (this.getPower() === false) {
    return 0;
  } else {
    // console.log("start = " + this.__time);
    // console.log("now  = " + Date.now());
    // console.log("res  = " + (Date.now() - this.__time));
    // console.log("res()  = " + (Date.now() - this.__time) / 1000);
    return Math.floor((Date.now() - this.__time) / 1000);
  }
};

Device.prototype.getInfo = function () {
  return (
    "name: " +
    this.getName() +
    "\ntime of work: " +
    this.getTime() +
    "\npower: " +
    this.getPower()
  );
};
