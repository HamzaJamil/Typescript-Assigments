/* 
Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.
*/
const guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];
console.log(guestList);

// print a message to each person, inviting them to dinner
let inviteMessage = 'I would like to invite you to dinner on Sunday, 26th February at 8pm.';
for(let i =0; i < guestList.length; i++){
    console.log(`Hi ${guestList[i]}, ${inviteMessage}`);
}