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

*/

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

