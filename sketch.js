var shooter;
var asteroids = [];
var lasers = [];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  shooter = new Shooter();
  for (var i = 0; i < 5; i++) {
  	asteroids.push(new Asteroid());
  }
angleMode(RADIANS)
}
function draw(){
    background(0)
    shooter.display()
    shooter.turn()
    shooter.edges()
    shooter.update()
    for(var i=lasers.length-1;i>=0;i--){
        lasers[i].display()
        lasers[i].update()
        for(var j=asteroids.length-1;j>=0;j--){
            console.log(lasers[i])
            if(lasers[i].hit(asteroids[j])){
                if(asteroids[j].r>10){

                    var newAsteroids=asteroids[j].breakUp()
asteroids=asteroids.concat(newAsteroids)
                    
                        
                    
                }
                asteroids.splice(j,1)
                lasers.splice(i,1)
            }
        }
    }
    for(var i=0;i<asteroids.length;i++){
asteroids[i].display()
asteroids[i].edges()
asteroids[i].update()
    }
}
function keyReleased() {
    shooter.setRotation(0);
    shooter.boost(false);
    
  }
  
  function keyPressed() {
    if (key == ' ') {
        lasers.push(new Laser(shooter.position, shooter.head));
      } else if (keyCode == RIGHT_ARROW) {
      shooter.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
    shooter.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
      shooter.boost(true);
    }
  }