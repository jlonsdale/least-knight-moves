$(document).ready(function(){

  $('.grid-item').click(function() {
    console.log(this.id)
    $('#'+this.id).text("0");
  });
});
