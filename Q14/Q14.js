/*
Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
var guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];
console.log(guestList);
// print a message to each person, inviting them to dinner
var inviteMessage = 'You are cordially invited to attend the dinner party we have planned for Sunday, 26th February at 8pm.';
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", ").concat(inviteMessage));
}
