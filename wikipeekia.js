$(document).ready(function() {
  //Visual.
  $("#titleText").addClass("animated zoomIn");
  //Store form input.
  $("#submitBox").click(function() {
    var textInput = $("#searchForm").val();
    //Access API.
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search="+textInput+"&callback=?",
    function (data) {
      //Store return values in separate arrays for simplicity
      var searchTerm = data[0];
      var articleTitles = data[0, [1]];
      var articleText = data[0, [2]];
      var articleLinks = data[0, [3]];
      //Output into HTML elements.
      //Starting with adding text-boxes.
      $("#output1").addClass("articleBox animated zoomIn");
      $("#output2").addClass("articleBox animated zoomIn");
      $("#output3").addClass("articleBox animated zoomIn");
      $("#output4").addClass("articleBox animated zoomIn");
      $("#output5").addClass("articleBox animated zoomIn");
      $(".outputSpans").html("<br>");


      /*function outPutFunc (output) {

      }
      */

      });
  });
});
//Open random article in a new window.
$("#randomBox").click(function() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
});
