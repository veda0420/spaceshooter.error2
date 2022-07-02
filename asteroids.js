class Asteroid{
    constructor(){
        this.position=createVector(random(width),random(height))
        this.r=random(15,50)
        this.velocity=p5.Vector.random2D()
        
    }
    display(){
        push()
        stroke(255)
        noFill()
        translate(this.position.x,this.position.y)
        ellipse(0,0,this.r,this.r)
        pop()

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
    update(){
        this.position.add(this.velocity)
    }
    breakUp(){
        var newA=[]
            newA[0]=new Asteroid(this.position,this.r)
            newA[1]=new Asteroid(this.position,this.r)
        return newA
    }
}