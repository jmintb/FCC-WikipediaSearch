

$(document).ready(function() {

    var API_URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=result&formt=json&limit=3"

  $("#search-bar-input").focus();
  $("#search-bar-input").on("input", function(){
    $("#search-bar-container").css("top", "10%");
  });

  $.get(API_URL, callback, "jsonp");


  function callback(data){
    console.log("response: "+JSON.stringify(data));
  }



});
