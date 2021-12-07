//const words = require('./wordData');

import * as words from './wordData.js';

let startBtn = document.querySelector('.startBtn');
let inputField = document.getElementById('inputText');
let dispText = document.querySelector('.dispText');
let scoreAmt = document.querySelector('.scoreAmt');
let timeLeft = document.querySelector('.timeLeft');

let gameTimer;

let score = 0;
let wordCounter = 0;

startBtn.addEventListener('click', () => {
  inputField.classList.toggle('hidden');
  inputField.focus();
  startBtn.classList.toggle('hidden');

  reset();

  startTimer();
  console.log(words.default);
  dispWord();
  mainGame();
});

function reset() {
  inputField.value = '';
  score = 0;

  wordCounter = 0;

  scoreAmt.innerHTML = 0;

  timeLeft.innerHTML = 60;
}

function startTimer() {
  var sec = 10;

  gameTimer = setInterval(function () {
    sec--;
    timeLeft.innerHTML = sec;
    if (sec === 0) {
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  clearTimeout(gameTimer);

  startBtn.classList.toggle('hidden');
  inputField.classList.toggle('hidden');

  inputField.value = '';

  startBtn.innerHTML = 'Restart';
  startBtn.style.backgroundColor = '#b10056';

  dispText.innerHTML = 'Game Over!';
}

function dispWord() {
  dispText.innerHTML = '';
  var item = words.default[wordCounter];
  wordCounter++;
  console.log(item);
  var word = item[Math.floor(Math.random() * item.length)];
  dispText.innerHTML = word;
}

function mainGame() {
  score = 0;
  inputField.addEventListener('input', () => {
    inputField.value = inputField.value.toUpperCase();
    if (inputField.value == dispText.innerHTML) {
      score += 10;
      scoreAmt.innerHTML = score;

      inputField.value = '';
      dispWord();
    }
  });
}
