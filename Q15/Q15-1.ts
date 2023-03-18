/* 
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
const guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];

console.log(guestList);

// updating Guest List
let index = guestList.indexOf('Rizwan');
const skipGuest = guestList.splice(index, 1);

console.log(`Updated list : ${guestList}`);
let inviteMessage = 'I would like to invite you to dinner on Sunday, 26th February at 8pm.';
for(let i =0; i < guestList.length; i++){
    console.log(`Hi ${guestList[i]}, ${inviteMessage}`);
}

export{}
