class Ground{
    //create object
    constructor(x,y,width,height){
        var options = {isStatic: true}

        this.ground = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.ground);
        
    }
    //show object
    display(){
        var pos = this.ground.position;//namespace
        push();
        rectMode(CENTER);
        fill("brown");
       rect(pos.x,pos.y,this.width, this.height);
       pop();
    }
}