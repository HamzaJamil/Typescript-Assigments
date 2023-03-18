"use strict";
exports.__esModule = true;
/*
Modify your list, replacing the name of the guest
who can’t make it with the name of the new person you are inviting.
*/
var guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];
console.log(guestList);
// updating Guest List
var index = guestList.indexOf('Rizwan');
var skipGuest = guestList.splice(index, 1, 'Umer');
console.log("Updated list : ".concat(guestList));
