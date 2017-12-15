

function init(){
   
    getMoviesListAndDrawList();
    
}


function getMovieAndDrawDetail(){
    
     var request = $.ajax({
          url: "https://api.themoviedb.org/3/movie/550?api_key=9ac5c72fe7e83a2b01b2e3e80931416e",
          method: "GET"
        });

       request.done(function( result ) {
                  //return result;

                //alert(result.original_title);
              });

              request.fail(function( jqXHR, textStatus ) {
                alert( "Request failed: " + textStatus );
          });
      }



      function getMoviesListAndDrawList(){
          var theList = $("#mylist");
           theList.empty(); //EMPTY THE LIST

           var request = $.ajax({
                url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ac5c72fe7e83a2b01b2e3e80931416e",
                method: "GET"
              });

              request.done(function( moviesList ) {



                  for (i=0;i<moviesList.results.length;i++){
                        theList.append( "<li> <a onClick='javascript:details("+i+")'>"+ moviesList.results[i].original_title + "<img src=\"https://image.tmdb.org/t/p/w92" + moviesList.results[i].poster_path + "\"><br><p>" + moviesList.results[i].overview +"</p></a></li>");
                      }

                  theList.listview("refresh");

                  });

              request.fail(function( jqXHR, textStatus ) {
                alert( "Request failed: " + textStatus );
          });
      }

      function details(id){

           var theList = $("#mylist");

           theList.empty(); //EMPTY THE LIST

           var request = $.ajax({
                     url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=80865681c4ccae7b47ffebc8b71952d8",
                     method: "GET"
                   });

                   request.done(function( moviesList ) {

                   theList.append( "<article><h2>"+ moviesList.results[id].original_title+ "</h2> <br> <img src=\"https://image.tmdb.org/t/p/w154" + moviesList.results[id].poster_path+"\"><br><p>"+moviesList.results[id].overview+"</p> </li>");


                       theList.listview("refresh");

                       });

                   request.fail(function( jqXHR, textStatus ) {
                     alert( "Request failed: " + textStatus );
               });


      }