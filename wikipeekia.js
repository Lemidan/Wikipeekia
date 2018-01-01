$(document).ready(function() {
  //Visual.
  $("#titleText").addClass("animated zoomIn");
  //Store form input.
  $("#submitBox").click(function() {
    var textInput = $("#searchForm").val();
    //Access API.
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search="+textInput+"&callback=?",
    function(data) {
      //Store return values in separate arrays for simplicity
      var searchTerm = data[0];
      var articleTitles = data[0, [1]];
      var articleText = data[0, [2]];
      var articleLinks = data[0, [3]];
      //Output into HTML elements.
      $
      
        /* $("#usuallyRefersOutPut").html("<p>"+data[0 [1 [0]]]+"</p>"); */
      //Iterate over data.length() and match same numbers into one var.
      //Create elements for vars to $. 
      //New layout with list. searchBox become frame?
      }
    );
  });
});
//Open random article in a new window.
$("#randomBox").click(function() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
});