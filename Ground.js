class Ground{

constructor(x,y,width,height) {

  this.ground1 = Bodies.rectangle(x,y,width,height);
  this.ground2 = Bodies.rectangle(x,y,width,height);
  this.ground3 = Bodies.rectangle(x,y,width,height);
  this.width = width;
  this.height = height;
  

}
  display() {
  fill ("red");
  rectMode(CENTER);
  rect(this.ground1.position.x,this.ground1.position.y,this.width,this.height);
  rect(this.ground2.position.x,this.ground2.position.y,this.width,this.height);
  rect(this.ground3.position.x,this.ground3.position.y,this.width,this.height);
  }
}