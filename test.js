"use strict";

var smartH1 = new SmartHouse();
smartH1.addDevice(new TV("SETUP 32HTF20 LG", 52));
smartH1.addDevice(new Refrigerator("Philips A521BN", 10, 0, -1, -18));
smartH1.addDevice(
  new Light("LightMaster LM", ["red", "green"], ["weak", "normal", "strong"])
);
smartH1.turnOnAll();
console.log(smartH1.getDeviceById(0).getInfo());
console.log("current channel = " + smartH1.getDeviceById(0).getChannel());
console.log("channel++");
smartH1.getDeviceById(0).nextChannel();
console.log(smartH1.getDeviceById(0).getInfo());
console.log(smartH1.getDeviceById(2).getInfo());
smartH1.getDeviceById(2).setLevel(2);
console.log("set level to strong");
console.log(smartH1.getDeviceById(2).getInfo());
console.log(smartH1.getDeviceById(1).getInfo());
smartH1.getDeviceById(1).incrFdTemp();
console.log("increase Temperature of Freadge");
console.log(smartH1.getDeviceById(1).getInfo());
smartH1.deleteDeviceById(1);
smartH1.getDeviceById(1);
