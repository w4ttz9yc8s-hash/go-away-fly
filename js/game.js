class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreenWin = document.querySelector(".end-screen-win");
    this.endScreenLoose=document.querySelector(".end-screen-loose");
    this.startScreen = document.querySelector(".start-screen");
    this.timer = document.getElementById("timer");
    this.reStartBtn=
    this.fly = [];
    this.flyInterval = null;
    this.animationInterval = null;
    this.timeLeft = 20;
    this.countdownId = null;
    this.interval = 10;
  }

  startTimer() {
    clearInterval(this.countdown);
    this.timeLeft = 20;
    this.timer.textContent = this.timeLeft;

    this.countdown = setInterval(() => {
      this.timeLeft--;
      this.timer.textContent = Math.max(this.timeLeft, 0);
      if (this.timeLeft <= 0) {
        clearInterval(this.countdown);
        this.showScreenloose();
      }
    }, 1000);
    
  }
  
  startGame() {
    console.log("start game");
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.flySwatter = new Swatter();
    
    document.addEventListener("click", (e) => {
      this.flySwatter.x = e.clientX;
      this.flySwatter.y = e.clientY;
      this.splat();
    });
    
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
    while (this.fly.length < 15) this.fly.push(new Fly());
  }
  
  captureCoordinates(){
    this.flySwatter.x = e.clientX;
    this.flySwatter.y = e.clientY;
    
  }
  splat() {
    document.addEventListener("click", (e) => {
      this.captureCoordinates();
    });
    
    console.log("splat called");
    
    for (let i = this.fly.length - 1; i >= 0; i--) {
      const currentFly = this.fly[i];
      
      if (
        this.flySwatter.x < currentFly.x + currentFly.width &&
        this.flySwatter.x + this.flySwatter.width > currentFly.x &&
        this.flySwatter.y < currentFly.y + currentFly.height &&
        this.flySwatter.y + this.flySwatter.height > currentFly.y
      ) {
        console.log("fly touch");
        currentFly.element.remove();
        this.fly.splice(i, 1);
      }
    }
  }
  
  splatRemove(){    
    document.removeEventListener("click", (e) => {
      this.captureCoordinates();
    });
  }
  
  showScreenloose(){
    this.endScreenLoose.style.display= "block"
    this.gameScreen.style.display= "none"
    
    this.splatRemove();
    document.getElementById("gameOver").style.display = "block";
    this.spawnFly();
    
  }





}
