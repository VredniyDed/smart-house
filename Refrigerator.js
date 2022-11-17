"use strict";

function Refrigerator(name, maxFdTemp, minFdTemp, maxFzTemp, minFzTemp) {
  // father`s constructor
  Device.call(this, name);
  this.__currFdTemp = 3;
  this.__currFzTemp = -6;
  this.__maxFdTemp = maxFdTemp;
  this.__minFdTemp = minFdTemp;
  this.__maxFzTemp = maxFzTemp;
  this.__minFzTemp = minFzTemp;
}

// Наслідування прототипу батьківського типа
Refrigerator.prototype = Object.create(Device.prototype);
// Відновлення посилання на constructor
Refrigerator.prototype.constructor = Refrigerator;

Refrigerator.prototype.setFdTemp = function (temperature) {
  if (
    typeof temperature !== "number" ||
    temperature < this.__minFdTemp ||
    temperature > this.__maxFdTemp
  ) {
    console.log("Incorrect value for Fridge temperature");
    this.__currFdTemp = this.__minFdTemp;
  }
  this.__currFdTemp = temperature;
};

Refrigerator.prototype.setFzTemp = function (temperature) {
  if (
    typeof temperature !== "number" ||
    temperature < this.__minFzTemp ||
    temperature > this.__maxFzTemp
  ) {
    console.log("Incorrect value for Freazer temperature");
    temperature = this.__minFzTemp;
  }
  this.__currFzTemp = temperature;
};

Refrigerator.prototype.incrFdTemp = function () {
  if (this.__currFdTemp === this.__maxFdTemp) {
    console.log("You reached max Fridge temperature");
  } else {
    this.__currFdTemp = this.__currFdTemp + 1;
  }
};

Refrigerator.prototype.incrFzTemp = function () {
  if (this.__currFzTemp === this.__maxFzTemp) {
    console.log("You reached max Freazer temperature");
  } else {
    this.__currFzTemp = this.__currFzTemp + 1;
  }
};

Refrigerator.prototype.decrFdTemp = function () {
  if (this.__currFdTemp === this.__minFdTemp) {
    console.log("You reached min Fridge temperature");
  } else {
    this.__currFdTemp = this.__currFdTemp - 1;
  }
};

Refrigerator.prototype.decrFzTemp = function () {
  if (this.__currFzTemp === this.__minFzTemp) {
    console.log("You reached min Freazer temperature");
  } else {
    this.__currFzTemp = this.__currFzTemp - 1;
  }
};

Refrigerator.prototype.getFdTemp = function () {
  return this.__currFdTemp;
};

Refrigerator.prototype.getFzTemp = function () {
  return this.__currFzTemp;
};

Refrigerator.prototype.getInfo = function () {
  return (
    Device.prototype.getInfo.call(this) +
    "\ncurrent Fridge temperature: " +
    this.__currFdTemp +
    "\ncurrent Freazer temperature: " +
    this.__currFzTemp +
    "\nmax Fridge temperature: " +
    this.__maxFdTemp +
    "\nmax Freazer temperature: " +
    this.__maxFzTemp +
    "\nmin Fridge temperature: " +
    this.__minFdTemp +
    "\nmin Freazer temperature: " +
    this.__minFzTemp
  );
};
