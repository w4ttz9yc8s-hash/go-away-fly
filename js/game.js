class Game {
  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    this.endScreen = document.querySelector(".end-screen");
    this.startScreen = document.querySelector(".start-screen");
this.flySwatter= null
    this.timer = document.getElementById ( "Timer");
    this.fly = [];
    this.flyInterval = null;
    this.animationInterval = null;
    this.timeLfet=30;
    this.interval = 10;
  }

  startGame() {
    console.log("start game");
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.flySwatter = new Swatter()


    this.timer=setInterval( countdown, 1000);
   function countdown () { 
if ( timeleft == 0) {
    clearTimeout( this.timer);
    console.log ( "GAME OVER, SOOOOOO CLOSE! TRY AGAIN !") ;
}
else { elem.innerHTML= timeleft + "seconds remainig ";
    timeLeft --;

}


    }
   



    
this.spawnFly()

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
