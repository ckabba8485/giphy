// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var search_term = $("#search-term").val();
  
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" +search_term+ "&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            var random = Math.floor(Math.random()*10);
            $(".text-center").empty()
           $(".text-center").append("<img src=" + response.data[random].images.original.url + ">");
             
            
        },
    });
  
});

