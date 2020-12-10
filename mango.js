/*class Mango {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true,
        restitution :0,
        friction :1,
        //density : 1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("mango.png");
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
   
    rect(pos.x, pos.y, this.width, this.height);
  pop();
  }
};
*/
class Mango  {
  constructor(x,y,r){
    var options = {
      isStatic: true,
      restitution :0,
      friction :1,
      density : 1.2,
    
      
  }
  this.body = Bodies.circle(x, y, r, options);
       this.radius = r;
      //  this.height = h;
      
        World.add(world, this.body);
     
        this.image = loadImage("mango.png");
    //if(mango)
   // Matter.Body.setMass(this.body,this.body.mass*6);
    //this.body.frictionAir = 0.001;
   
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
     imageMode(CENTER);
    image(this.image, 0, 0, this.radius*2, this.radius*2);
    
    pop();
  }
  
 
}