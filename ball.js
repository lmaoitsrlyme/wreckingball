class Ball{
        constructor(){
            var options = {
                restitution: 0.3,
                density: 5,
                friction: 3
            }

        this.body = Bodies.circle(600, 300, 40, options);
        World.add(myworld, this.body);
        }


        display(){
        push();
        ellipseMode(RADIUS);
        fill(255, 255, 0);
        ellipse(this.body.position.x, this.body.position.y, 40, 40)
        pop();
        }
}