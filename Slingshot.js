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

  attach(body) {
    this.sling.bodyA = body
  }

  display() {
    image(this.sling1, 250, 43)
    image(this.sling2, 223, 43)

    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position
      var pointB = this.sling.pointB

      push()

      stroke(48, 22, 8)
      if (pointA.x < 220) {
        strokeWeight(7)
        line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y)
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3)
        image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30)
      } else {
        strokeWeight(3)
        line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y)
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3)
        image(this.sling3, pointA.x + 25, pointA.y - 10, 15, 30)
      }

      pop()
    }
  }
}
