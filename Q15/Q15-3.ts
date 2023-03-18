/*  
Modify your list, replacing the name of the guest 
who can’t make it with the name of the new person you are inviting.
*/
const guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];

console.log(guestList);

// updating Guest List
let index = guestList.indexOf('Rizwan');
const skipGuest = guestList.splice(index, 1, 'Umer');

console.log(`Updated list : ${guestList}`);

export{}