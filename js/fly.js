class Fly {
  constructor() {
    console.log(" fly constructor");
    this.gameScreen = document.querySelector(".game-screen");
    console.log(this.gameScreen);
    this.speed = 5;
    this.x = Math.floor(Math.random() * this.gameScreen.offsetWidth);
    this.y = Math.floor(Math.random() * this.gameScreen.offsetHeight);
    this.width = 30;
    this.height = 30;
    this.angle = Math.random() * Math.PI * 2;
    this.image = "/Users/emma/Desktop/fly.webp";
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
  move() {
    this.angle += (Math.random() - 0.5) * 0.5;

    if (Math.random() < 0.05) {
      this.angle += (Math.random() - 0.5) * 3;
    }
    if (this.x <= 0 || this.x >= this.gameScreen.offsetWidth - this.width) {
      this.angle = Math.PI - this.angle;
    }
    if (this.y <= 0 || this.y >= this.gameScreen.offsetHeight - this.height) {
      this.angle = -this.angle;
    }

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
}
