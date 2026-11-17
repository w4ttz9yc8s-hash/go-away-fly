const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");
const endScreen = document.querySelector(".end-screen");
const startBtn = document.querySelector(".start-btn");
const countdownTimer = document.querySelector(".countdown-Timer");
let game;

window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
    countdownTimer();
  });
});
