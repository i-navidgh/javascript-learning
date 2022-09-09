function createCircle(radius){
  return {
    radius,
    isVisible: true,
    draw(){ console.log('draw') }
  }
}

function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw')
  }
}
const circle = new Circle(3)
console.log(circle) 