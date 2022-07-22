'use strict';
/*
// Strict mode stops us from making mistakes

let hasDriversLicence = false;

const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive :D');



function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// const orangJuice = fruitProcessor(0, 5)
// console.log(orangJuice);

// Assignment Lesson 33 Fundamentals part 2

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const Finland = describeCountry('Finland', 6, 'Helsinki');
const Portugal = describeCountry('Portugal', 10.3, 'Lisbon');
const Netherlands = describeCountry('The Kingdom of the Netheralands', 17.4, 'Amsterdam');



// function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
// console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// you can call a function declaration before you declare it but cant do that with a function expression



// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1981, 'Bob'));

// Arrow functions do not get an is keyword so we use mainly normal functions except for arrow functions

// Coding assignments function declaration and expressions
function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

const chinaPercent = percentageOfWorld1(1441);
const finlandPercent = percentageOfWorld1(6);
const portugalPercent = percentageOfWorld1(10.3);

console.log(chinaPercent, finlandPercent, portugalPercent);

// Function expression
const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100);
}

const chinaPercent2 = percentageOfWorld2(1441);
const finlandPercent2 = percentageOfWorld2(6);
const portugalPercent2 = percentageOfWorld2(10.3);

console.log(chinaPercent2, finlandPercent2, portugalPercent2);

// coding assignment arrow functions

const percentageOfWorld3 = population => ((population / 7900) * 100);

const chinaPercent3 = percentageOfWorld3(1441);
const finlandPercent3 = percentageOfWorld3(6);
const portugalPercent3 = percentageOfWorld3(10.3);

console.log(chinaPercent3, finlandPercent3, portugalPercent3);



// Lesson 36 Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



// Coding assignment Functions Calling Other Functions

const percentageOfWorld3 = population => ((population / 7900) * 100);

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${Number(percentageOfWorld3(population)).toFixed(2)}% of the world`

const chinaDescription = describePopulation('China', 1441);
const portugalDescription = describePopulation('Portugal', 6);
const netherlandsDescription = describePopulation('Netherlands', 10.3);

console.log(chinaDescription);
console.log(portugalDescription);
console.log(netherlandsDescription);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`;
}

yearsUntilRetirement(1991, 'Jonas');
yearsUntilRetirement(1970, 'Mike');


// Coding Challenge JS Fundamentals Part 2 Coding Challenge #1


const averageScores = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const dolphinsAverage = averageScores(44, 23, 71);
const koalasAverage = averageScores(65, 54, 49);

const dolphinsAverage2 = averageScores(85, 54, 41);
const koalasAverage2 = averageScores(23, 34, 27);

const checkWinner = function (aveDolphins, aveKoalas) {
    if (aveDolphins >= 2 * aveKoalas) {
        console.log(`Dolphins win ${aveDolphins} : ${aveKoalas}`);
    } else if (aveKoalas >= 2 * aveDolphins) {
        console.log(`Koalas win ${aveKoalas} : ${aveDolphins}`);
    } else {
        console.log(`Dolphins score ${aveDolphins} and Koalas score ${aveKoalas} but no one wins`)
    }

}

checkWinner(dolphinsAverage, koalasAverage);
checkWinner(dolphinsAverage2, koalasAverage2);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// You can change an element in an array even though it is defined as a constant but you can't change the entire array like below
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

// Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}



// Coding Challenge JS Fundamentals Part 2 Coding Challenge #3

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }

}

// A simpler calc tip
const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// An even shorter calc tip Arrow function
const calcTip3 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
console.log(totals);

*/
