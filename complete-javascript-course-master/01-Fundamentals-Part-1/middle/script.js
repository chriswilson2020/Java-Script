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
*/

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
