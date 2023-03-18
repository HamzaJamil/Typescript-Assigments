/* 
Print a second set of invitation messages, one for each person who is still in your list.
*/

const guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];

console.log(guestList);

// updating Guest List
let index = guestList.indexOf('Rizwan');
const skipGuest = guestList.splice(index, 1, 'Umer');

console.log(`Updated list : ${guestList}`);
let inviteMessage = 'You are cordially invited to attend the dinner party we have planned for Sunday, 26th February at 8pm.';
for(let i =0; i < guestList.length; i++){
    console.log(`Hi ${guestList[i]}, ${inviteMessage}`)
}

export{}