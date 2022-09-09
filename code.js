function createCircle(radius){
  return {
    radius,
    isVisible: true,
    draw(){ console.log('draw') }
  }
}

let circle1 = createCircle(1)
console.log(circle1)

let circle2 = createCircle(2)
console.log(circle2)