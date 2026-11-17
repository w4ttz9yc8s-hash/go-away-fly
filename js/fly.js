class Fly {

  constructor() {
    console.log ( " fly constructor")
    this.gameScreen = document.querySelector(".game-screen");console.log(this.gameScreen)
    
    this.x = Math.floor(Math.random() * this.gameScreen.width);console.log( this.x)
    this.y = Math.floor(Math.random() * this.gameScreen.height );console.log(this.y)
    this.width = 50;
    this.height = 50;
this.image= "/Users/emma/Desktop/fly.webp"
    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.backgroundImage = `url("${this.image}")`;
    this.element.style.backgroundPosition = `center`;
    this.element.style.backgroundSize = `cover`;

    this.gameScreen.appendChild(this.element);
  }
}
