'use strict'; // note much of this is for strict

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`; // this still remains Jonas because JS looks up in the scope chain
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // old type declaration almost never use this use let or const

      // Creating a NEW variable with the same name as outer scope's variable
      const firstName = 'Steven'; // JavaScript first looks in the scope of the block and then if it finds the variable it stops.

      // Reassigning the outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }

    // console.log(str); // newer const variable (also for let) can not be accessed outside of the block
    console.log(millenial); // older function scoper variable can be accessed outside of the block

    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);
*/

/*
// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting with functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

/*
// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1981);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

f();
*/
/*
// never use an arrow function as a method because it makes lots of bugs because it has no this function.... Use a regular function
const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    //     const self = this; // self or that
    //     const isMillenial = function () {
    //       console.log(self);
    //       console.log(self.year >= 1981 && self.year <= 1996);
    //     };
    //     isMillenial();
    //   },

    // Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },

  // greet: () => console.log(`Hey ${this.firstName}`),
};

//jonas.greet();
jonas.calcAge();

// Argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Arguments keyword only works in functions not expressions
// var addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };

// addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;

friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);
*/

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {}; is not allowed!

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
