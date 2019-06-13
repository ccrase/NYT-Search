function searchParamaters(){
  $("#searchbtn").click(function(){
    // receive values from each text area
    event.preventDefault();
    var searchTerm = $("#searchterm").val();
    console.log(searchTerm);
    var numRecords = $("#numrecords").val();
    console.log(numRecords);
    // dates MUST be in this order YEAR/MONTH/DAY
    var startDate = "&begin_date=" + $("#startyear").val().replace("/", "").replace("/", "")
    console.log(startDate);
    var endDate = "&end_date=" + $("#endyear").val().replace("/", "").replace("/", "")
    console.log(endDate);
    // input the values into the api
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + startDate + endDate + "&api-key=vXGoED21N1KQlY0X6gO14XIUGePoT56I&";

    // call ajax function 
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    // append the article to .results
    .then(function (article) {
      // store the number of records to retrieve **10 requests max**
      var limit = $("#numrecords").val();
      // use for loop to retrieve the amount of records the user requested
      for (var i = 0; i < limit; i++){
        var articleArray = article.response.docs
        $(".results").append("<h1>" + articleArray[i].headline.main + "</h1>").append("<p>" + articleArray[i].lead_paragraph + "</p>" + "<br>");
      }

    })  
  })
}

// clear search parameters and all articles
$("#clearbtn").click(function(){
  event.preventDefault();
  clearAllParameters();
})
searchParamaters();

function clearAllParameters(){
  $("#searchterm").val("");
  $("#numrecords").val("");
  $("#startyear").val("")
  $("#endyear").val("")
  $(".results").empty();
}

