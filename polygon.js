class Polygon {
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1.0,
            density:0.1
        }
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body)
    }

    display(){
        var pos= this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        //image(this.image,pos.x,pos.y,50,50);
    }
    
}