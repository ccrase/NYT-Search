 var endDate = 20190102
    var startDate = 20120102
    var searchTerm = $("#searchterm").val()
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" +
      startDate + "&end_date=" + endDate + "&api-key=vXGoED21N1KQlY0X6gO14XIUGePoT56I&"

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function (article) {
        console.log(article.response.docs[0].snippet);
        console.log(article.response.docs);
      })
  