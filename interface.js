$(document).ready(function(){
  chessBoard = new Board()

  $('.grid-item').click(function() {
    console.log(this.id)
    $('#'+this.id).text("0");
    square = chessBoard.findByID(this.id)
    square.fillSquare(0)
    chessBoard.fillBoard(square)
  });
});
