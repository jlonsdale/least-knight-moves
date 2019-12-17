class Square {

  constructor(id) {
    this.id = id
    this.x = id[0].charCodeAt(0) - 96
    this.y = Number(id[1])
    this.filled = false
  }

  fillSquare() {
    this.filled = true
  }

}
