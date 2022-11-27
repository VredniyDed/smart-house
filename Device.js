"use strict";

function Device(name) {
  this.__name = name;
  this.__id = 0;
  this.__power = false;
}

Device.prototype.setPower = function (power) {
  if (typeof power !== "boolean") {
    power = false;
    console.log("Incorrect value for power = " + power);
  }
  this.__power = power;
};

Device.prototype.getPower = function () {
  return this.__power;
};

Device.prototype.getName = function () {
  return this.__name;
};

Device.prototype.getId = function () {
  return this.__id;
};

Device.prototype.__setId = function (id) {
  if (typeof id !== "number") {
    this.__id = Math.floor(Math.random() * 1000);
  }
  this.__id = id;
};

Device.prototype.getInfo = function () {
  return (
    "name: " +
    this.getName() +
    "\nid: " +
    this.getId() +
    "\npower: " +
    this.getPower()
  );
};
