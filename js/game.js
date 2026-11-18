class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.startScreen = document.querySelector(".start-screen");
    this.timer = document.getElementById("timer");
    this.flySwatter = null;
    this.fly = [];
    this.flyInterval = null;
    this.animationInterval = null;
    this.timeLeft = 30;
    this.countdownId = null;
    this.interval = 10;
  }

  startTimer() {
    clearInterval(this.countdown);
    this.timeLeft = 30;
    this.timer.textContent = this.timeLeft;

    this.countdown = setInterval(() => {
      this.timeLeft--;
      this.timer.textContent = Math.max(this.timeLeft, 0);
    },1000);

    if (this.timeLeft <= 0) {
      clearInterval(this.countdown);
      console.log("GAME OVER, SOOOOOO CLOSE! TRY AGAIN !");
    }
  }

  startGame() {
    console.log("start game");
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.flySwatter = new Swatter();

    this.startTimer();

    this.spawnFly();

    this.flyInterval = setInterval(() => {
      this.flyMove();
    }, this.interval);
  }

  flyMove() {
    this.fly.forEach((element) => {
      element.move();
    });
  }

  spawnFly() {
    while (this.fly.length < 6) this.fly.push(new Fly());
  }

}
