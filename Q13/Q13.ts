/* 
Your Own Array: 
Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. 
Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”
*/
const transports = ['Honda motorcycle', 'BMW 7 series', 'bugatti Chiron', 'R7 yamaha','Changan Oshan'];
for (let i = 0; i < transports.length; i++){
    console.log(` I would like to own a ${transports[i]}.`);
}