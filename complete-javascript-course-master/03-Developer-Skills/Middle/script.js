// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1981));
*/
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*
// 1) Understanding the problem
// What is tempr amplitude? Answer: difference between heighest and lowest temp
// How to compute max and min temperatures?
// What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors
// - Find max value in temperature array
// - Find min value in temp array
// - Subtrace min from max (amplitude) and return it)

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// max = 3
// max = 7

// Problem 2
// function should now recieve 2 arrays of temps

// 1) Understand the problem
// With 2 arrays should we implement functionality twice? NO! Just merge the two arrays

// 2) Breaking up into sub-problems
// - How to merge two Arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t2.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C) FIX
    // value: prompt('Degrees celsius:'),
    value: Number(prompt('Degrees celsius')),
  };

  // B) FIND
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) identify
console.log(measureKelvin());
*/

/*
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY BUG
console.log(amplitudeBug);
*/

///////////////////////////////////////////////
// Coding Challenge Section # Number 1

/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these
temperatures/

Example: [17, 21, 23] will print "... 17ºC in 1 days .
.. 21ºC in 2 days ... 23ºC in three days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the line above to the console

Use the problem-solving framework understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// The array supplied is numbers that give the projected temperatures for the comming period
// How many days do we forecase in one go?
// If the number of days forecast is unknown then we need to code for that
// Do we still need to code for errors?

// 2) Breaking up into sub-problems
// - How to ignore errors
// - How to construct the statement per day
// - How to put all the days together independent of number of days given

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let tempsString = '';

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    tempsString = tempsString.concat(`${temps[i]}ºC in ${i + 1} days ...`);
  }

  return tempsString;
};

console.log(printForecast(testData1));
console.log(printForecast(testData2));
