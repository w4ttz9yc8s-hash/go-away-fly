class Game {

    constructor (){
    
    

    this.gameScreen = document.querySelector(".game-screen")
    this.endScreen = document.querySelector(".end-screen")
    this.startScreen = document.querySelector(".start-screen")
    this.MainContainer = document.querySelector(".main-container")
    this.swatter = null
    this.fly = []
    this.flyAppear= null
    this.animationInterval = null
    this.countdownTimer= null
}
    
startGame (){
    this.startScreen.style.display= "none"
    this.gameScreen.style.display= "flex"
    //this.swatter = new swatter ()
    this.fly.append (new Fly())

    spawnFly (){
        
    }
    


}





}