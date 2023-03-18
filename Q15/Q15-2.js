"use strict";
exports.__esModule = true;
/*
Start with your program from Exercise 14.
Add a print statement at the end of your program stating the name of the guest who can’t make it.
 */
var guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];
console.log(guestList);
// updating Guest List
var index = guestList.indexOf('Rizwan');
var skipGuest = guestList.splice(index, 1);
console.log("Updated list : ".concat(guestList));
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log("".concat(skipGuest, " can't come for dinner"));
