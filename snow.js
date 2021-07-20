class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false,
        
        }
        this.image = loadImage("snow4.webp")
        this.width = 20;
        this.height = 20
        this.body = Bodies.rectangle(x, y, this.width,this.height, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        image(this.image, 0, 0, this.width,this.height);
        pop();
    }

};