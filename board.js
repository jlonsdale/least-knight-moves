class Board {

  constructor() {
    const letters = ['a','b','c','d','e','f','g','h']
    const numbers = [1,2,3,4,5,6,7,8]
    this.board = []
    this.filledSquares = []
    this.filled = false
    letters.forEach((letter) => {
      numbers.forEach((number)=> {
        this.board.push(new Square(letter+number))
      })
    })
  }

  findByCoords(x,y) {
    const id = (String.fromCharCode(x+96)+y)
    return this.board.find(element => element.id == id);
  }

  findByID(id) {
    return this.board.find(element => element.id == id);
  }

  fillBoard(square) {
    this.filledSquares.push(square)
    const arr = [1,2,3,4,5,6]
    arr.forEach((i) => {
      this.filledSquares.forEach( (item)=> {
        this.nextMoves(item)
      })
    })
    this.filled = true
  }

  nextMoves(square) {
    const currentX = square.x;
    const currentY = square.y;
    const arr = [1,2, 2,1, -1,-2, -2,-1, -1,2, 2,-1, 1,-2, -2,1]
    for(var i=0; i<arr.length; i+=2) {
      var x=currentX+arr[i]
      var y=currentY+arr[i+1]
      var currentSquare = this.findByCoords(x,y)
      if(x<=8&&x>=1&&y<=8&&y>=1&&currentSquare.filled==false) {
        this.filledSquares.push(currentSquare)
        currentSquare.fillSquare(square.value+1)
        $('#'+currentSquare.id).text(currentSquare.value);
        $('#'+currentSquare.id).css("background", currentSquare.colour());
      }
    }
  }

}
