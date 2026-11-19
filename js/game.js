class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.startScreen = document.querySelector(".start-screen");
    this.timer = document.getElementById("timer");
    // this.gameOver=document.getElementsById("game-over")
    this.swatter = 0;
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
      if (this.timeLeft <= 0) {
        clearInterval(this.countdown);
        //this.gameOver.display
      }
    }, 1000);
  }

  startGame() {
    console.log("start game");
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.flySwatter = new Swatter();

    addEventListener("click", () => {
      this.splat();
    });

    this.startTimer();

    this.spawnFly();

    this.flyInterval = setInterval(() => {
      //this.flyMove();
    }, this.interval);
  }

  flyMove() {
    this.fly.forEach((element) => {
      element.move();
    });
  }

  spawnFly() {
    while (this.fly.length < 1) this.fly.push(new Fly());
  }

  splat() {
    console.log("splat called");
    for (let i = this.fly.length - 1; i >= 0; i--) {
      const currentFly = this.fly[i];

    console.log(`swatter x: ${this.swatter.x}`);
    console.log(`swatter y: ${this.swatter.y}`);
    console.log(`Fly ${i} x: ${currentFly.x}`);
    console.log(`Fly ${i} y: ${currentFly.y}`);
      if (
        this.swatter.x < currentFly.x + currentFly.width &&
        this.swatter.x + this.swatter.width > currentFly.x &&
        this.swatter.y < currentFly.y + currentFly.height &&
        this.swatter.y + this.swatter.height > currentFly.y
      ) {
        console.log("fly touch");
        currentFly.element.remove();
        this.fly.splice(i, 1);
      }
    }
  }
}
