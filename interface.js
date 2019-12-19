$(document).ready(function(){
  chessBoard = new Board()

  $('.grid-item').click(function() {
    if(chessBoard.filled == false) {
      $('#'+this.id).text("0");
      square = chessBoard.findByID(this.id)
      square.fillSquare(0)
      chessBoard.fillBoard(square)
    }
  })
})
