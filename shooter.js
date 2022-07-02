class Shooter{
    constructor(){
        this.position=createVector(width/2,height/2)
        this.r=20
    this.head=0
    this.rotation=0
    this.velocity=createVector(0,0)
this.isBoosting=false
    }
    display(){
        push()
        translate(this.position.x,this.position.y)
        rotate(this.head+PI/2)
        fill(0)
        stroke(255)
        triangle(-this.r,this.r,this.r,this.r,0,-this.r)
        pop()
        

    }
    setRotation(x){
        this.rotation=x
    }
    turn(){
        this.head+=this.rotation
    }
    boost(x){
this.isBoosting=x
    }
    update(){
        if(this.isBoosting){
            var force=p5.Vector.fromAngle(this.head)
            force.mult(0.1)
            this.velocity.add(force)
        }
        this.position.add(this.velocity)
        this.velocity.mult(0.99)
    }
    edges(){
        if(this.position.x>width+this.r){
this.position.x=-this.r
        
        }
else if(this.position.x<-this.r){
    this.position.x=width+this.r
}
else if(this.position.y>height+this.r){
    this.position.y=-this.r
            
            }
    else if(this.position.y<-this.r){
        this.position.y=height+this.r
    }
    }
    
}