class Board {

  constructor() {
    this.moves = 0;
    const letters = ['a','b','c','d','e','f','g']
    const numbers = [1,2,3,4,5,6,7,8]
    this.board = []
    letters.forEach((letter) => {
      numbers.forEach((number)=> {
        this.board.push(new Square(letter+number))
      })
    })
  }

  findByCoords(x,y) {
    const id = (String.fromCharCode(x+96)+y)
    console.log(id)
    return this.board.find(element => element.id == id);
  }

  findByID(id) {
    return this.board.find(element => element.id == id);
  }

  nextMoves(square) {
    square.fillSquare(this.moves)
    const currentX = square.x;
    const currentY = square.y;
    const arr = [1,2, 2,1, -1,-2, -2,-1, -1,2, 2,-1, 1,-2, -2,1]
    this.moves+=1
    for(var i=0; i<arr.length; i+=2) {
      var currentSquare = this.findByCoords(currentX+arr[i],currentY+arr[i+1])
      currentSquare.fillSquare(this.moves)
      $(document).ready(function(){
        $('#'+currentSquare.id).text(currentSquare.value);
      })
    }

  }



}
