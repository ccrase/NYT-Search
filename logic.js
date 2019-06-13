

function searchParamaters(){
  $("#searchbtn").click(function(){
    // receive values from each text area
    event.preventDefault();
    var searchTerm = $("#searchterm").val();
    console.log(searchTerm);
    var numRecords = $("#numrecords").val();
    console.log(numRecords);
    // dates MUST be in this order YEAR/MONTH/DAY
    var startDate = $("#startyear").val()
    console.log(startDate);
    var endDate = $("#endyear").val()
    console.log(endDate);
    // input the values into the api
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=vXGoED21N1KQlY0X6gO14XIUGePoT56I&";

    // call ajax function 
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    // append the article to .results
    .then(function (article) {
      console.log(article.response.docs[0].headline);
      console.log(article.response.docs);
      // grabs and shows the headline from the api
      $(".results").append("<h1>" + article.response.docs[0].headline.main + "</h1>");
    })  
    // clear search parameters and all articles
    $("#clearbtn").click(function(){
      event.preventDefault();
      $("#searchterm").val("");
      $("#numrecords").val("");
      $("#startyear").val("")
      $("#endyear").val("")
      $(".results").empty();
    })



  })
}
searchParamaters();