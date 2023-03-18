/*
Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
*/

//Start with your program from Exercise 16. 
const guestList = ['Hammad','Bilal','Farhan','Umer','Abdullah','Ahsan','Tayyab','Arsal','Asad','Rehaan','Salman'];
console.log(guestList);

//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`I'm sorry to inform you that my new dinner table won't arrive in time and I can invite only two guests.`);

/*
Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/
let reserveSeat = 2;
let bookedSeat = guestList.length;
while(reserveSeat < bookedSeat){
    const skipGuest = guestList.pop();
    console.log(`${skipGuest}! I'm really sorry that due to space issue I can't invite you for dinner.`);
    bookedSeat--;
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for(let i = 0; i < guestList.length; i++){
    console.log(`Hi ${guestList[i]}, I am happy to inform you that you are still invited.`);
}
/*
Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.
*/
for (let j = 0; j < guestList.length; j++){
    let am = guestList.pop();
}
console.log(guestList);
export{} 