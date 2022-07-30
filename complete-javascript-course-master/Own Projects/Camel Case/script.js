'use strict';

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
    value = value.toLowerCase();
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
