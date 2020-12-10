class Ground {
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body);
       
     this.height = h;
     this.width = w;


    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    push ();
    fill ("brown");
    rect(pos.x,pos.y,this.width,this.height);
    pop ();
}
    
}
