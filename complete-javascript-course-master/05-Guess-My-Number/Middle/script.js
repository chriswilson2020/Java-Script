'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// const x = function () {
//   console.log(23);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
    }
  }

  //  // When guess is too high
  // else if (guess > secretNumber) {
  // if (score > 1) {
  //   document.querySelector('.message').textContent = '📈 Too High!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = '💥 You lost the game!';
  //   document.querySelector('.score').textContent = 0;
  // }

  // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

////////////////////////////////////
// Coding Challenge # 1
/*
Implement a game reset functionality, so that the 
player can make a new guess! Here is how:

1. Select the element with the 'again ' class and attach a click even handler

2. In the handler function, restore initial values of the score and number variables.

3. Restor the iniitial conditions of the message, number, score and guess input field.

4. Also restore the original background color (#222)
and number width (15rem)

*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
