class Mango{
    constructor(x,y){
        var options={
            'resitiution':0,
            'friction':1,
            'density':1.2,
            'isStatic':true
        }
        this.radius=30;
        this.image = loadImage("mango.png");
        this.body= Bodies.circle(x,y, this.radius, options);
        World.add(world,this.body);
    }

    display(){
        push();
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}