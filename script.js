// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;
let scores = [];

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const highscoreDisplay = document.querySelector("#highscore");
seconds.innerHTML = currentLevel;
var words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "champion",
  "ghost",
  "fierce",
];

//event listener
wordInput.addEventListener("keyup", typeWord);

//functions
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    isPlaying = true;
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    clearInterval(counter);
    scores.push(score);
    highscoreDisplay.innerHTML = Math.max(...scores);
    message.innerHTML = "Game Over !!!";
  }
  // Show time
  timeDisplay.innerHTML = time;
  console.log(time);
}
function startCounter() {
  counter = setInterval(countdown, 1000);
}
startCounter();

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
currentWord.innerHTML = shuffleArray(words)[0];
//

function typeWord(e) {
  message.innerHTML = "";
  if (e.keyCode == 13 && wordInput.value !== "") {
    if (wordInput.value !== currentWord.innerText) {
      clearInterval(counter);
      scores.push(score);
      highscoreDisplay.innerHTML = Math.max(...scores);
      message.innerHTML = "Game Over !!!";
    } else if (wordInput.value === currentWord.innerText) {
      score++;
      scoreDisplay.innerHTML = score;
      currentWord.innerHTML = shuffleArray(words)[0];
      message.innerHTML = "Correct !!!";
      time = currentLevel;
      clearInterval(counter);
      startCounter();
    }

    wordInput.value = "";
  }
}
