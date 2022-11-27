"use strict";

function SmartHouse() {
  this.__devices = [];
  this.__index = 0;
}

SmartHouse.prototype.turnOnAll = function () {
  for (var i = 0; i < this.__devices.length; i++) {
    this.__devices[i].setPower(true);
  }
  console.log("All devices on power");
};

SmartHouse.prototype.turnOffAll = function () {
  for (var i = 0; i < this.__devices.length; i++) {
    this.__devices[i].setPower(false);
  }
  console.log("All devices off power");
};

SmartHouse.prototype.addDevice = function (device) {
  this.__devices.push(device);
  device.setId(this.__index);
  this.__index = this.__index + 1;
};

SmartHouse.prototype.deleteDeviceById = function (deviceID) {
  if (typeof deviceID === "number" && deviceID >= 0) {
    this.__devices[deviceID] = undefined;
    console.log("Deleted");
  } else {
    console.log("Not found");
  }
};

SmartHouse.prototype.getDeviceById = function (deviceID) {
  var device = null;
  for (var i = 0; i < this.__devices.length; i++) {
    if (deviceID >= 0 && typeof this.__devices[deviceID] !== "undefined") {
      device = this.__devices[deviceID];
      return device;
    }
  }
  if (device === null) {
    console.log("No results for device with id " + deviceID);
  }
};
