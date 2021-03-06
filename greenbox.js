class greenBox {
    constructor(x, y, width, height) {
      var options = {
        'isStatic' : false,
          'restitution':0.8,
          'friction':0.1,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if (this.body.speed < 2) {
        push()
           rectMode(CENTER);
           translate(pos.x, pos.y);
           rotate(angle);
           fill("green");
           stroke("black");
           strokeWeight(4);
           rect(0, 0, this.width, this.height);
           pop();
       } else {
           
           World.remove(world, this.body);
           push();
           this.visibility = this.visibility - 5;
           tint(255, this.visibility);
           pop();
       }
    }
  };
  