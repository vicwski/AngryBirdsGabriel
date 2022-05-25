class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50)
    this.image = loadImage('sprites/enemy.png')
    this.visibility = 255 //alfa
  }

  display() {
    // console.log(this.body.speed)

    if (this.body.speed < 3) {
      super.display()
    } else {
      push()
      World.remove(world, this.body)
      this.visibility -= 5
      tint(255, this.visibility)
      pop()
    }
  }
}
