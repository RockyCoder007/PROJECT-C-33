class Particle  {
  constructor(x,y,r){
    //super(x,y,10,10);
    var options ={
      restitution:0.4
    }
    this.r=r;

    this.body = Bodies.circle(x, y, this.r,options);       
    this.color=color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        pop();


     // var position = [this.body.position.x, this.body.position.y];
    
   

    
  }
}
