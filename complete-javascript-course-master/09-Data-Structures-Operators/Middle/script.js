'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    40
  );
  console.log(output);
}
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  // Old function definition
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // new ES6 way for function definition
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pastsa with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////
// Codingerted Challenge #4

/*
Write a program that recieves a list of variable names written in underscore_case and convert them to camelCase. 

The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

TEST DATA (Pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
Remember which character defines a new line in the textarea
The solution only needs to work for a veriable made out of 2 words, like a_b
Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue. 
*/

/*
let variables2;

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').style.width = '200px';
document.querySelector('button').textContent = 'Button';
document.querySelector('button').addEventListener('click', function () {
  //variables = document.querySelector('textarea').value;
  if (document.querySelector('textarea').value.length === 0) {
    console.log('Please input some data');
  } else {
    variables2 = document.querySelector('textarea').value.split('\n');
    let fixedVariables2 = fixVariables(variables2);
    let test2 = outputVariables(fixedVariables2);
    for (const [key, value] of Object.entries(test2)) {
      console.log(`${value}`);
    }
  }
});

const fixVariables = function (vars) {
  let combined = {};
  for (var [key, value] of Object.entries(vars)) {
    value = value.toLowerCase().trim();
    let firstValue = value.slice(0, value.indexOf('_'));
    let secondValue =
      value[value.indexOf('_') + 1].toUpperCase() +
      value.slice([value.indexOf('_') + 2]);
    // console.log(value.slice(0, value.indexOf('_'))) +
    //   value[value.indexOf('_') + 1].toUpperCase() +
    //   value.slice([value.indexOf('_') + 2]);
    combined[key] = firstValue + secondValue;
  }
  return combined;
};

const outputVariables = function (vars) {
  let combined = {};
  let intermediate;
  for (let [key, value] of Object.entries(vars)) {
    let keys = Number(key);
    intermediate = '✅'.repeat(keys + 1);
    combined[key] = `${value.padEnd(18, ' ')} ${intermediate}`;
  }
  return combined;
};

// const variables = {
//   1: 'underscore_case',
//   2: 'first_name',
//   3: 'Some_Variable',
//   4: 'calculate_AGE',
//   5: 'delayed_departure',
// };

// console.log(variables2);

//let fixedVariables = fixVariables(variables);
//console.log(fixedVariables);

// let test = outputVariables(fixedVariables);
// for (const [key, value] of Object.entries(test)) {
//   console.log(`${value}`);
// }

/*
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // different approach using replace
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed... ';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩 '.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalisation in name

const passenger = 'jOnAS'; // Jonas

const correctName = function (name) {
  const passengerLower = name.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};
console.log(correctName(passenger));
console.log(correctName('cHrIsToPhER'));

// Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io  \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// Condensed into a single line
const checkEmails = function (email, login) {
  const normalizedEmail = login.toLowerCase().trim();
  return email === normalizedEmail;
};

console.log(checkEmails(email, loginEmail));

// replacing
const priceEU = '288,97€';
const priceUS = priceEU.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// Soon replaceAll will come
//console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// first word
console.log(airline.slice(0, airline.indexOf(' ')));
// last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😁');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(4));

/////////////////////////////////////
// Coding Challenge #3

/*Lets continue with our football betting app! This time, we have a map called 'gameEvents' with a log of the events that happened during the game.  The values are the events and the keys are the minutes in which each event happened (football games have 90 minutes plus some extra time)

TASKS
1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, it was found that the yelllow card from minute 64 was unfair. So remove this event from the game events log.

3. Compute and lof the following string to the console: "An event happened, on average, every 9 minutes" Keep in mind that a gaem has 90 minutes

4. Loop over 'gameEvents' and log each element to the console, marking whether it's  in the first half or second half of the game like this:
[FIRST HALF] 17: GOAL
*/
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const gameEventSet = new Set([...gameEvents.values()]);
gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

const firstHalf = 'FIRST HALF';
const secondHalf = 'SECOND HALF';
for (let [key, value] of gameEvents) {
  console.log(`[${key < 45 ? firstHalf : secondHalf}] ${key}: ${value}`);
}

/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert map to
console.log(...question);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('ChristopherJamesWilson').size);

/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

/*

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

/*
/////////////////////////////////
// The for-of Loop
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours, mon.open);

// WITH optional chaning
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
 
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20;
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment variable
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignmen operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*
console.log('---- OR ----');
// Use ANY data typre, return ANY data type, short-circuiting

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
// rest can be used where we would have variables separated by commas
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

/*
////////////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Christopher';
const letters = [...str, ' ', 'W.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// // allows you to spread and make the whole array of inputs without writing separately
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // you can skip the element in the middle with , , for example

// Switching variables
//const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// Nested destructuring
// Destructuring with a nested array
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

///////////////////////////////////////
// Coding Challenge #1
/* 
 We're building a football betterin app!
 Suppose we get data from a web service about a certain game ('game' variable in the following section). In this challende we're gonna work with that data.
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = [...game.players];
console.log(players1, players2);
const [gk, ...fieldPlayers] = [...players1];
console.log(gk, fieldPlayers);
const allPLayers = [...players1, ...players2];
console.log(allPLayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
console.log(team1, draw, team2);

const printGoals = function (...Scorers) {
  let goalsScored = 0;
  for (let i = 0; i < Scorers.length; i++) {
    console.log(`${Scorers[i]} scored a goal!`);
    goalsScored++;
  }
  console.log(`The total goals scored were ${goalsScored}`);
};

printGoals(...game.scored);
//printGoals('Davis', 'Muller');

team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////////////////
// Coding Challenge #2

//Lets continue with our football betting app! Keep using the 'game' variable from before.

/* Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: " Goal 1: Lewandowski")
2. Use the loop to calculate the average odd and log it to the console (We already studied how to calculate averages)
3. Print the 3 odds to the console but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw")
Hint: Note how the odds and the game objects have the same property names
4. Bonus: Create an object called 'scorers' which contains the name of the players who scored as properties, and the number of goals as the value. in this game, it will look like this:
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}
*/
/*
// Entire object
const scorers = Object.entries(game.scored);
console.log(scorers);

const odds = Object.values(game.odds);

for (const [key, value] of scorers) {
  console.log(`Goal ${Number(key) + 1}: Scored by: ${value}`);
}

console.log(odds);
let oddsCounter = 0;

for (const odd of [...odds]) {
  oddsCounter += odd;
}
console.log(oddsCounter / odds.length);

// console.log(`Odd of victory Bayern Munich: ${game.odds.team1}
// Odd of draw: ${game.odds.x}
// Odd of victory Borrussia Dortmund: ${game.odds.team2}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Solution to Bonus Challeng
/*  
1. Create an object that will hold the scoringPlayers
2. Make a for of loop that usees player to itterate over game.scored 
3. Truncated if statement:
if player exists in scoringPlyaers then add one to the key player value
if it doesnt exist then set the value of player key to 1
*/
/*
const scoreingPlayers = {};
for (const player of game.scored) {
  scoreingPlayers[player]
    ? scoreingPlayers[player]++
    : (scoreingPlayers[player] = 1);
}

console.log(scoreingPlayers);
*/
