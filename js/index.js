

$(document).ready(function() {

  $("#search-bar-input").focus();
  $("#search-bar-input").on("input", function(){
    $("#search-bar-container").css("top", "10%");
  })


});
