class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    attach(body) {
        Matter.Body.setPosition(body,{x:100,y:300});
        this.sling.bodyA = body;
    }

    fly() {
        this.sling.bodyA = null;

    }


    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("green");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}
