//Question 1

console.log("For loop example:")
let characters = ['Harry', 'Herminoe', 'Ron', 'Draco','Luna'];

for (let i = 1; i < characters.length; i++){
    console.log("Character:", characters[i]);
}

//Question 2
let firstName ='Harry';
let house = 'Gryffindor';
let greeting =`Welcome,${firstName} of ${house}!`;
console.log(greeting);

//Question 3
let characterName = 'Hermione';

console.log(characterName.toUpperCase());
console.log(characterName.toLowerCase());

//Question 4
let spell ='Expelliarmus';
let trimmedSpell = spell.trim();
console.log(spell.trim());

//Question 5
let quote = 'I solemnly swear that I am up to no good';
let extract =quote.slice(11,16);
console.log(extract);

//Question 6
let firstname = 'Ron';
let lastName = 'Weasley';
let fullName = firstname.concat (' ', lastName);
console.log(fullName);

//Question 7
let sentence = 'Draco is a good wizard';
let newsentence = sentence.replace('good' , 'bad');
console.log(newsentence);

//Question 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

//Question 9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

//Question 10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hargrid'];
let selectedProfessors = professors.slice(1,3);
console.log(selectedProfessors);

//Question 11
let students = ['Neville','Seamus','Dean','Parvati'];
students.splice(1,2);
console.log(students);

//Question 12
let phrase = 'Mischief Managed';
let result = phrase.trim().toLowerCase().concat('- harry');
console.log(result);

//Question 13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

//Question 14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let Result = message.slice(10, 22).concat('Castle');
console.log(Result);