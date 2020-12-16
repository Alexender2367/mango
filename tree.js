class Tree {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,200,300,options);
      this.width = 200;
      this.height = 300;
      this.image=loadImage("Images/tree.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ()
      translate(pos.x,pos.y)
     // rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
      pop()
    }
  };







































