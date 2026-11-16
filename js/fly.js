class Fly {

  constructor() {
    this.gameScreen = document.querySelector(".game-screen");
    
    this.x = Math.floor(Math.random() * this.gameScreen.width);
    this.y = Math.floor(Math.random() * this.gameScreen.height );
    this.width = 50;
    this.height = 50;

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
