"use strict";

function TV(name, numChannels) {
  Device.call(this, name);
  this.__numChannels = numChannels;
  this.__currChannel = 1;
  this.__maxVolume = 10;
  this.__minVolume = 0;
  this.__currVolume = 5;
}

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

TV.prototype.setChannel = function (channel) {
  if (
    typeof channel !== "number" ||
    channel < 1 ||
    channel > this.__numChannels
  ) {
    console.log("Incorrect value for channel");
    channel = 1;
  }
  this.__currChannel = channel;
};

TV.prototype.nextChannel = function () {
  if (this.__currChannel === this.__numChannels) {
    console.log("You reached max channel");
  } else {
    this.__currChannel = this.__currChannel + 1;
  }
};

TV.prototype.prevChannel = function () {
  if (this.__currChannel === 1) {
    console.log("You reached min channel");
  } else {
    this.__currChannel = this.__currChannel - 1;
  }
};

TV.prototype.getChannel = function () {
  return this.__currChannel;
};

TV.prototype.setVolume = function (volume) {
  if (
    typeof volume !== "number" ||
    volume < this.__minVolume ||
    volume > this.__maxVolume
  ) {
    console.log("Incorrect value for volume");
    volume = this.__minVolume;
  }
  this.__currVolume = volume;
};

TV.prototype.incrVolume = function () {
  if (this.__currVolume === this.__maxVolume) {
    console.log("You reached max volume");
  } else {
    this.__currVolume = this.__currVolume + 1;
  }
};

TV.prototype.decrVolume = function () {
  if (this.__currVolume === this.__minVolume) {
    console.log("You reached min volume");
  } else {
    this.__currVolume = this.__currVolume - 1;
  }
};

TV.prototype.getVolume = function () {
  return this.__currVolume;
};

TV.prototype.getInfo = function () {
  return (
    Device.prototype.getInfo.call(this) +
    "\ncurrent channel: " +
    this.__currChannel +
    "\nnum of channels: " +
    this.__numChannels
  );
};
