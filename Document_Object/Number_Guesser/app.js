/*
- Number Guesser will allow users to guess from a certain range of numbers (min and max)
- Users will have 3 chances to guess the correct result
- Users will get a message in red if the answer is incorrect
- Users will get a message in green if the answer is correct
- Let users to choose to play again
- Will be using skeleton in this project
*/

// Game values
let min = 1,
    max = 100,
    winNum = 2,
    guessLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      msg = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Event listener

guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // console.log(guess);
  // add validations for the input value
  if (isNaN(guess) || guess < min || guess > max) {
    setMsg(`Please input a number betwen ${min} and ${max}`, 'red');
  }
  // add message for winning
  if (guess === winNum) {
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.bordercolor = 'green';
    // set message
    setMsg(`That's a bingo! ${winNum} is correct.`, 'green');
  }
});

function setMsg(message, color) {
  msg.textContent = message;
  msg.style.color = color;
}