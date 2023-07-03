const randomNumber = Math.floor(Math.random() * 21);
let score = 0;
let hasInvalidInput = false; 

document.querySelector(".secretNo").textContent = "Secret Number: ?";


const speechSynthesis = window.speechSynthesis;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}


function check() {
  const inputNumber = parseInt(document.querySelector(".input").value);

  if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 20) {
    if (!hasInvalidInput) {
      speak("Please enter a number between 0 and 20");
      hasInvalidInput = true;
    }
    return;
  }

  hasInvalidInput = false; 

  if (inputNumber === randomNumber) {
    score++;
    document.querySelector(".hint").textContent = "You Guessed the Number!";
    speak("You Guessed the Number!");
  } else if (inputNumber < randomNumber) {
    score--;
    document.querySelector(".hint").textContent = "The secret number is greater.";
    speak("The secret number is greater.");
  } else {
    score--;
    document.querySelector(".hint").textContent = "The secret number is less.";
    speak("The secret number is less.");
  }

  document.querySelector(".score").textContent = "Score: " + score;
  document.querySelector(".input").value = "";
}


document.querySelector(".btn").addEventListener("click", check);
