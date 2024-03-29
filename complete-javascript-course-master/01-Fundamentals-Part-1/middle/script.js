/* First Lecture Code
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = "programmer";
let job2 = 'teacher';

console.log(myFirstJob)


// Values and Variables Challenge

let country = 'The Netherlands';
let continent = 'Europe';
let population = 17.44;

let locationString = `I live in ${country} which is located in ${continent} and a population of ${population} M People`;

console.log(locationString);

// Second Lecture Code
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

let isIsland = false;
let language;

console.log(locationString + '\nIs it an island? ' + isIsland);


// Lesson 13. Let Const Var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // cant do this!! its constant

// Always start with a const unless a variable needs to change later on!

var job = 'programmer';

job = 'teacher';

// var is old never use it!!!

lastName = 'Schmedtmann'; // terrible idea as it defines on the global object not within scope
console.log(lastName);


// Assignments Lesson 13

const languageNetherlands = 'Dutch';
console.log(languageNetherlands);


// Lesson 14 Basic Operators

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operatores
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--; // oposite of ++
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let populationNow = 14990000;
let halfPopulation = populationNow / 2;
populationNow = ++populationNow;
console.log(populationNow);
let populationFinland = 6000000;
console.log(populationFinland >= populationNow);
let averagePopulation = 33000000;
console.log(populationNow <= averagePopulation);
const description = 'Portugal is in Europe, and its 11M people speak Portugese';


// Lesson 15 Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;//  x = y = 10, x = 10

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// Coding Challenge Number 1.

// Mark and John are trying to compare their BMI, which is calcluated according to
// BMI = mass / height **2 = mass / (height * height) (mass in kg and height in meter)

// Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall
// Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall

// Store Mark's and John's mass and height in variables
// Calclulate both their BMI's using the formula (you can implement both versions)
// Create a Boolean variable 'markHeigherBMI' containing information on whether Mark has a higher BMI than John.

let markWeightOne = 78;
let johnWeightOne = 92;

let markWeightTwo = 95;
let johnWeightTwo = 85;

let markHeightOne = 1.69;
let johnHeightOne = 1.95;

let markHeightTwo = 1.88;
let johnHeightTwo = 1.76;

let markBMIoneOne = (markWeightOne / markHeightOne ** 2);
let markBMIoneTwo = (markWeightOne / (markHeightOne * markHeightOne));

let johnBMIoneOne = (johnWeightOne / johnHeightOne ** 2);
let johnBMIoneTwo = (johnWeightOne / (johnHeightOne * johnHeightOne));

let markHeigherBMI = (markBMIoneOne > johnBMIoneOne);
console.log(markBMIoneOne, johnBMIoneOne, markHeigherBMI);

let markBMItwoOne = (markWeightTwo / markHeightTwo ** 2);
let markBMItwoTwo = (markWeightTwo / (markHeightTwo * markHeightTwo));

let johnBMItwoOne = (johnWeightTwo / johnHeightTwo ** 2);
let johnBMItwoTwo = (johnWeightTwo / (johnHeightTwo * johnHeightTwo));

markHeigherBMI = (markBMItwoOne > johnBMItwoOne);
console.log(markBMItwoTwo, johnBMItwoTwo, markHeigherBMI);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log('Just a regular string...')

console.log('String with \n\
multiple\n\
lines');

console.log(`String
mutiple
lines`);



// Code assignment 17
let populationPortugal = 11;

description = `Portugal is in Europe, and its ${populationPortugal} M people speak Portuguese`;
console.log(description)


const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving licence 🚗`);
} else { // else block is optional
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge 2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice poutput to the console, ssaying who has the higher BMI. The message is
//    either "Marks BMI is higher than John's!" or "Johns BMI is higher than Marks!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// BMI = mass / height **2
// Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall

let markWeight = 78;
let johnWeight = 92;

let markHeight = 1.69;
let johnHeight = 1.95

let markBMI = Number(78 / 1.69 ** 2).toFixed(2);
let johnBMI = Number(92 / 1.95 ** 2).toFixed(2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}



// Lesson 20 Type conversion and Coercion

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18) // converted version but not permanenet inputYear remains as string

// console.log(Number('Jonas')); // cant convert a string to number

console.log(String(23), 23); // convert number to string

// Type corecion
console.log('I am ' + 23 + ' years old'); // coercion of a number to a string
console.log('23' - '10' - '3'); // coercion of string to number
console.log('23' + '10' + '3'); // contatenation happens not coercion with strings and + operator
console.log('23' * '2'); // coercion happens because the only way that * and / operators can work

let n = '1' + 1 // '11'
n = n - 1;
console.log(n);

// Coding Assignment If/else

let populationPortugal = 11;
let averagePopulation = 33;

if (populationPortugal > averagePopulation) {
    console.log(`Portugal's population is ${populationPortugal - averagePopulation} M above average`);
} else {
    console.log(`Portugal's population is ${averagePopulation - populationPortugal} M below average`);
}


// Lesson 21 Truthy and Falsy values

// 5 falsy valuse: 0, '', undefined, null, NaN
// anything not a falsy value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100; // change to 0 to see how it works

if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!');
}

let height; // what happens if you make this 0 or 123 also remember 0 is a falsy value
if (height) {
    console.log('YAY! Heighe is defined');
} else {
    console.log('Height is UNDEFINED');
}


// Lessson 22 Equality Operators

// strict vs loose
//  ===   vs ==
//  !==   vs !=
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became and adult :D (loose)')

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite)

if (favourite === 23) {
    console.log('Cool! 23 is and amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');


const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders!")
}

// Lesson 23 Boolean Logic

const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive.....')
}


// Coding assignement for Lesson 24
// const myCountry = 'Netherlands';
// const myPopulation = 17.6;
// const myLanguage = 'Dutch';

const myCountry = prompt("Where do you live?");
const myPopulation = Number(prompt("What is the population of your country?"));
const myLanguage = prompt("What language do you speak?");

console.log('Sarah is looking to live in a new country.');
console.log(`Let's see if your country ${myCountry} speaking ${myLanguage} with a population of ${myPopulation}M people is a good fit`);

const sarahPopulation = 50;
const sarahLanguage = 'English';

console.log(`Sarah wants to live in a country with a population less than ${sarahPopulation}M people where they speak ${sarahLanguage}`)

if (myLanguage === sarahLanguage && myPopulation < sarahPopulation) {
    console.log("Yey it's a fit! Sarah will be on the next flight")
} else {
    console.log("Awww shucks Sarah's insanely specific neurotic desires don't fit your country, ahh well any way moving on")
}

// Coding Challenge Number 3
// const aveDolphins = Number((96 + 108 + 89) / 3).toFixed(2);
// const aveKoalas = Number((88 + 91 + 110) / 3).toFixed(2);

const aveDolphins = Number((97 + 112 + 101) / 3).toFixed(2);
const aveKoalas = Number((109 + 95 + 123) / 3).toFixed(2);

// const aveDolphins = Number((97 + 112 + 101) / 3).toFixed(2);
// const aveKoalas = Number((109 + 95 + 106) / 3).toFixed(2);

Number(78 / 1.69 ** 2).toFixed(2);

if (aveDolphins > aveKoalas && aveDolphins >= 100) {
    console.log(`Dolphins Win ${aveDolphins} : ${aveKoalas} GO DOLPHINS!`);
} else if (aveKoalas > aveDolphins && aveKoalas >= 100) {
    console.log(`Koalas Win ${aveKoalas} : ${aveDolphins} GO KOALAS`);
} else if (aveDolphins === aveKoalas && aveDolphins >= 100 && aveKoalas >= 100) {
    console.log(`It's a draw!!! Everyone's a winner`);
} else {
    console.log(`Nobody wins!`);
}

// Lesson 25 Switch Statments

const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!')
}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!')
}


// Lesson 25 assignement

const language = 'hindi'

switch (language) {
    case 'mandarin':
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D')
}


// Lession 28 Statements and Expressions

if (23 > 19) { // if else is a statement
    const str = '23 is bigger' // const definition is an expression
}

console.log(`I'm ${2037 - 1981} years old`)


const age = 23;
// age >= 18 ? console.log(`I'd like to drink wine 🍷`) :
//     console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// Lesson 28 assignment

const populationPortugal = 130;

console.log(`Portugal's population is ${populationPortugal > 33 ? 'above' : 'below'} average`);


// Coding challenge 4

// build a very simple tuip calculator. it's usual to tip 15% when the bill value is between 50 and 300
// for bills less than 50 and more than 300 tip 20%

const billValue = 430;
const tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.20;

console.log(`The bill was ${billValue}, the tip was ${tip} and the total value ${billValue + tip}`);

*/