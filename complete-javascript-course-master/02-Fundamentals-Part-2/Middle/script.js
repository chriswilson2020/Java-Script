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
*/

