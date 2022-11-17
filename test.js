"use strict";

var stH1 = new SmartHouse();
stH1.addDevice(new TV("SETUP 32HTF20 LG", 52));
console.log(stH1.getDeviceByName("SETUP 32HTF20 LG").getInfo());
stH1.getDeviceByName("SETUP 32HTF20 LG").setPower(true);
stH1.getDeviceByName("SETUP 32HTF20 LG").nextChannel();
// console.log(stH1.getDeviceByName("SETUP 32HTF20 LG").getInfo());

// interval
/*
var i = 0;
var id = setInterval(function () {
  if (i === 4) {
    clearInterval(id);
  }
  console.log(stH1.getDeviceByName("SETUP 32HTF20 LG").getTime());
  i++;
}, 2000);

//timeout
setTimeout(function () {
  console.log(stH1.getDeviceByName("SETUP 32HTF20 LG").getInfo());
}, 5000);

setTimeout(function () {
  //   stH1.getDeviceByName("SETUP 32HTF20 LG").setPower(false);
  console.log(stH1.getDeviceByName("SETUP 32HTF20 LG").getInfo());
}, 5000);
*/
// console.log(stH1.getDeviceByName("SETUP 32HTF20 LG").getPower());
// stH1.turnOnAll();
/*
stH1.addDevice(new Refrigerator("F444 LG", 10, 0, -1, -18));
stH1.getDeviceByName("F444 LG").setPower(true);
stH1.getDeviceByName("F444 LG").incrFdTemp();
stH1.getDeviceByName("F444 LG").decrFzTemp();
// console.log(stH1.getDeviceByName("F444 LG").getInfo());
setTimeout(function () {
  console.log(stH1.getDeviceByName("F444 LG").getInfo());
}, 5000);
stH1.getDeviceByName("F444 LG").setPower(false);
// console.log(stH1.getDeviceByName("F444 LG").getInfo());
*/

var arrOpn1 = ["red", "green"];
var arrLvl1 = ["weak", "normal"];
stH1.addDevice(new Light("LightMaster LM", arrOpn1, arrLvl1));

var arrOpn = ["cold white", "warm white", "yellow"];
var arrLvl = ["weak", "normal", "strong"];
stH1.addDevice(new Light("LightMaster LM", arrOpn, arrLvl));
//if set name — NOT okay
console.log(stH1.getDeviceByName("LightMaster LM").getInfo());
stH1.getDeviceByName("LightMaster LM").setPower(true);
stH1.getDeviceByName("LightMaster LM").incrOption();
stH1.getDeviceByName("LightMaster LM").incrLevel();
console.log(stH1.getDeviceByName("LightMaster LM").getInfo());
//if set id — okay
console.log(stH1.getDeviceByID(2).getInfo());
