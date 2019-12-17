$(document).ready(function(){
  chessBoard = new Board()
  $('.grid-item').click(function() {
    console.log(this.id)
    $('#'+this.id).text("0");
  });
});
