/* 
Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it.
 */
const guestList = ['Bilal', 'Farhan', 'Rizwan', 'Ahsan'];

console.log(guestList);

// updating Guest List
let index = guestList.indexOf('Rizwan');
const skipGuest = guestList.splice(index, 1);

console.log(`Updated list : ${guestList}`);

//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${skipGuest} can't come for dinner`);

export{}