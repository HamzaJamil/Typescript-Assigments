"use strict";
/*
Print a second set of invitation messages, one for each person who is still in your list.
*/
exports.__esModule = true;
var guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];
console.log(guestList);
// updating Guest List
var index = guestList.indexOf('Rizwan');
var skipGuest = guestList.splice(index, 1, 'Umer');
console.log("Updated list : ".concat(guestList));
var inviteMessage = 'You are cordially invited to attend the dinner party we have planned for Sunday, 26th February at 8pm.';
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", ").concat(inviteMessage));
}
