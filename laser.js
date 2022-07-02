class Laser{
    constructor(pos,angle){
        this.position=createVector(pos.x,pos.y)
        this.velocity=p5.Vector.fromAngle(angle)
        this.velocity.mult(10)
    }
    display(){
        push()
        stroke(255)
        strokeWeight(4)
        point(this.position.x,this.position.y)
        pop()

    }
    update(){
        this.position.add(this.velocity)
    }
    hit(asteroid){
var d=dist(this.position.x,this.position.y,asteroid.position.x,asteroid.position.y)
if(d<asteroid.r){
    return true

}else {return false}
    }

    
}