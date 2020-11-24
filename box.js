class Box {
    constructor(x){
        var options = {
           restitution: 0.1,
           density: 5,
           friction: 1
        }
        this.body = Bodies.rectangle(x, 100, 70, 70, options);
        World.add(myworld, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        var angle = this.body.angle;
        rotate(angle);
        strokeWeight(5);
        stroke(0, 0, 102);
        rectMode(CENTER);
        fill(153, 255, 153);
        rect(0, 0, 70, 70)
        pop();
    }
}