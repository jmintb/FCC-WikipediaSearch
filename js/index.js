$(document).ready(function() {

    function getAPI_URL(query){
      return "https://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"&formt=json&limit=50"
    }
    var searchResults = [];



    $("#search-bar-input").focus();
    $("#search-bar-input").on("input", function() {
        $("#search-bar-container").css("top", "10%");
        var query = $("#search-bar-input").val();
        console.log(!!query);
        if(!!query){
          $.get(getAPI_URL(query), resultHandler, "jsonp");
        }else{
          $("#result-list").empty();

      }

    });




    function resultHandler(data) {
        for (var i = 0; i < data[1].length; i++) {
            var title = data[1][i];
            var description = data[2][i];
            var link = data[3][i];
            searchResults.push(createSearchResult(title, description, link));
        }

        $("#result-list").empty();
        $("#result-list").append(searchResults);
        searchResults.length = 0;
    }

    function createSearchResult(title, description, link) {
        var innerHtml = '  <div class="panel-heading">'+title + '</div> <div class="panel-body">' + description + '</div>';
        var li = document.createElement("li");
        $(li).addClass("search-result-div panel panel-primary");
        $(li).html(innerHtml);
        return li;
    }





});
