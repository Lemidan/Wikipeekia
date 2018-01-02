$(document).ready(function() {
  //Visual.
  $("#titleText").addClass("animated zoomIn");
  //Store form input.
  $("#submitBox").click(function() {
    var textInput = $("#searchForm").val();
    //Access API.
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=3&search="+textInput+"&callback=?",
    function (data) {
      //Store return values in separate arrays for simplicity
      var searchTerm = data[0];
      var articleTitles = data[0, [1]];
      var articleText = data[0, [2]];
      var articleLinks = data[0, [3]];
      //Output into HTML elements. May be more efficient with a function, if possible.
      $("#output1").addClass("articleBox animated zoomIn");
      $("#artTitle1").html(articleTitles[0]);
      $("#artText1").html(articleText[0]);
      $("#artLink1").html('<a style="color:white;" href='+articleLinks[0]+'><p class="articleBody">(Click to read full article)</p></a>');

      $("#output2").addClass("articleBox animated zoomIn");
      $("#artTitle2").html(articleTitles[1]);
      $("#artText2").html(articleText[1]);
      $("#artLink2").html('<a style="color:white;" href='+articleLinks[1]+'><p class="articleBody">(Click to read full article)</p></a>');

      $("#output3").addClass("articleBox animated zoomIn");
      $("#artTitle3").html(articleTitles[2]);
      $("#artText3").html(articleText[2]);
      $("#artLink3").html('<a style="color:white;" href='+articleLinks[2]+' target="_blank"><p class="articleBody">(Click to read full article)</p></a>');
      //Put <br> between outputDivs.
      $(".outputSpans").html("<br>");
      });
  });
  //Open random article in a new window.
  $("#randomBox").click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
});
