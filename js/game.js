class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.startScreen = document.querySelector(".start-screen");
    this.timerContainer = document.querySelector(".timer");
    this.swatter = null;
    this.fly = [];
    this.flyInterval = null;
    this.animationInterval = null;
    this.countdownTimer = null;
    this.interval = 10;
  }

  startGame() {
    console.log("start game");
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";

    //this.swatter = new swatter ()
    //this.fly.push(new Fly());
this.spawnFly()

    this.flyInterval = setInterval(() => {
      this.flyMove();
    }, this.interval);
    //this.animationInterval= setInterval(()=>{
    // this.animate()
    //},10)
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
