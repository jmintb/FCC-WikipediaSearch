$(document).ready(function() {

    function getAPI_URL(query) {
        return "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&formt=json&limit=50";
    }

    var API_RANDOM_PAGE = "https://en.wikipedia.org/wiki/Special:Random";
    var searchResults = [];
    var latestQuery;
    var queryChanged = false;

    $("#search-bar-input").prop("value", "");

    $("#search-bar-input").focus();
    $("#search-bar-input").on("input", function() {
        var query = $("#search-bar-input").val();
        latestQuery = query;
        if (!!query) {
          $("#load-icon").addClass("spinner");
          $("#load-icon").removeClass("hide");
            $.get(getAPI_URL(query), resultHandler, "jsonp");
        } else {
            $("#result-list").empty();
            searchResults.length = 0;
        }

    });

    $("#random-btn").focus(function() {
        $("#random-btn").blur();
    });


    function resultHandlerRndArticle(data){
        console.log(JSON.stringify(data));
    }

    function resultHandler(data) {
        for (var i = 0; i < data[1].length; i++) {
            var title = data[1][i];
            var description = data[2][i];
            var link = data[3][i];
            searchResults.push(createSearchResult(title, description, link));
        }
        if (data[0] != latestQuery) {
            searchResults.length = 0;
        } else if (!!latestQuery && data[0] == latestQuery) {
            $("#result-list").empty();
            $("#result-list").append(searchResults);
            searchResults.length = 0;
        } else {
            $("#result-list").empty();
            searchResults.length = 0;

        }
        $("#load-icon").removeClass("spinner");
        $("#load-icon").addClass("hide");

    }

    function createSearchResult(title, description, link) {
        console.log("link: "+link);
        var innerHtml = '<a class="search-result-li" href="'+link+'">  <div class="panel-heading">' + title + '</div> <div class="panel-body">' + description + '</div> </a>';
        var li = document.createElement("li");
        $(li).addClass("search-result-li panel panel-primary");
        $(li).html(innerHtml);
        return li;
    }





});
