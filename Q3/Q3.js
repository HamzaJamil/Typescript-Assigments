/*
Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var personName = 'hAmZa jaMiL';
console.log("Name : ".concat(personName));
console.log("Name in lowercase: ".concat(personName.toLowerCase()));
console.log("Name in Uppercase: ".concat(personName.toUpperCase()));
var titleCaseName = personName.split(' ');
for (var i = 0; i < titleCaseName.length; i++) {
    titleCaseName[i] = titleCaseName[i].charAt(0).toUpperCase() + titleCaseName[i].slice(1).toLowerCase();
}
console.log(titleCaseName.toString().replace(/,/g, ' '));
