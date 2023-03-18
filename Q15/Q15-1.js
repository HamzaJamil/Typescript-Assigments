"use strict";
exports.__esModule = true;
/*
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
var guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];
console.log(guestList);
// updating Guest List
var index = guestList.indexOf('Rizwan');
var skipGuest = guestList.splice(index, 1);
console.log("Updated list : ".concat(guestList));
var inviteMessage = 'I would like to invite you to dinner on Sunday, 26th February at 8pm.';
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", ").concat(inviteMessage));
}
