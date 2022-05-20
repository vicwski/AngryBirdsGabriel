class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.02,
      lenght: 100
    }

    this.sling = Constraint.create(options)
    this.sling1 = loadImage('sprites/sling1.png')
    this.sling2 = loadImage('sprites/sling2.png')
    this.sling3 = loadImage('sprites/sling3.png')
    World.add(world, this.sling)
  }

  fly() {
    this.sling.bodyA = null
  }

  display() {
    image(this.sling1, 250, 43)
    image(this.sling2, 223, 43)
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position
      var pointB = this.sling.pointB
      stroke(48, 20, 8)
      push()
      strokeWeight(4)
      line(pointA.x, pointA.y, pointB.x, pointB.y)
      pop()
    }
  }
}
