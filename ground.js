class Ground {
    constructor(){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(800, 870, 1450, 50, options)//lmao
        /*me very bad at math*/
        World.add(myworld, this.body);
        //bye T_T
        }

        display(){ push();
            rectMode(CENTER);
            fill(153, 51, 51);
            rect(this.body.position.x, this.body.position.y, 1450, 50)
            pop();
        }
}