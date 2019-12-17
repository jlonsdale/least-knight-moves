class Board {

  constructor() {

    const letters = ['a','b','c','d','e','f','g']
    const numbers = [1,2,3,4,5,6,7,8]

    this.board = []

    letters.forEach((letter) => {
      numbers.forEach((number)=> {
        this.board.push(new Square(letter+number))
      })
    })

    console.log(this.board)
  }



}
