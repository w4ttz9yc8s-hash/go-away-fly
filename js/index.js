const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");
const endScreen = document.querySelector(".end-screen");
const startBtn = document.querySelector(".start-btn");
const countdownTimer = document.querySelector(".countdown-Timer");
const tryAgainBtn=document.querySelector(".try-again-btn")
const goToStartBtn=document.querySelector(".go-to-start-btn")

let game;

window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
   
  });

  tryAgainBtn.addEventListener("click", () => {
    game.dispose();
    game = new Game();
    game.startGame();
  });

goToStartBtn.addEventListener("click", () => {
    game.dispose();
    game = new Game();
    game.startGame();
  });



});
