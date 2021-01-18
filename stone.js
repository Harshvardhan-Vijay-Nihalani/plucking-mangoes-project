class Stone{
    constructor(x,y){
        var options={
            'resitiution':0,
            'friction':1,
            'density':1.2
        }
        this.width=15;
        this.height=20;
        this.image = loadImage("stone.png");
        this.body= Bodies.rectangle(x,y, this.width,this.height, options);
        World.add(world,this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}