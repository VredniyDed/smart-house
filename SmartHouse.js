"use strict";

function SmartHouse() {
  this.__devices = [];
}

SmartHouse.prototype.turnOnAll = function () {
  for (var i = 0; i < this.__devices.length; i++) {
    this.__devices[i].setPower(true);
  }
};

SmartHouse.prototype.turnOffAll = function () {
  for (var i = 0; i < this.__devices.length; i++) {
    this.__devices[i].setPower(false);
  }
};

SmartHouse.prototype.addDevice = function (device) {
  this.__devices.push(device);
};

SmartHouse.prototype.getDeviceByName = function (deviceName) {
  var device = null;
  for (var i = 0; i < this.__devices.length; i++) {
    if (this.__devices[i].getName() === deviceName) {
      device = this.__devices[i];
      return device;
    }
  }
  if (device === null) {
    return console.log("No results for device with name " + deviceName);
  }
  //   for (var key in this.__devices) {
  //     // if (this.__devices.hasOwnProperty.call(this.__devices, key)) {
  //     console.log("key =" + __devices[key]);
  //     console.log("key.getName() = " + key.getName());
  //     if (key.getName() === deviceName) {
  //       device = this.__devices[i];
  //       return device;
  //       //   }
  //     }
  //   }
};

//NEW --------------------------------------------------
SmartHouse.prototype.getDeviceByID = function (deviceID) {
  var device = null;
  for (var i = 0; i < this.__devices.length; i++) {
    if (deviceID < 0 || typeof this.__devices[deviceID] !== "undefined") {
      device = this.__devices[deviceID];
      return device;
    }
  }
  if (device === null) {
    return console.log("No results for device with id " + deviceID);
  }
};
