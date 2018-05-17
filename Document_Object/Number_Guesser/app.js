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
  // add message for winning and losing
  if (guess === winNum) {
    gameOver(true, `That's a bingo! ${winNum} is correct.`);
  } else {
      guessLeft -= 1;
      if (guessLeft === 0) {
      // game over if guess left is 0
      gameOver(false, `Game over! You lost. ${winNum} is the answer.`);
     } else {
        // game continues
        // set border color to red
        guessInput.style.borderColor = 'red';
        // set message to notify guesses left
        setMsg(`Guess is not correct. ${guessLeft} guesses left`, 'red');
        // clear input
        guessInput.value = '';
      }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMsg(msg, color);
}
function setMsg(message, color) {
  msg.textContent = message;
  msg.style.color = color;
}