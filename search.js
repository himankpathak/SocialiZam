console.log("hello");
$("button").click(function(){
    $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyD2SnFIZacVxElx6MTKguJWgkkkhuaeqvc&channelId=UCPagjVLAnMI3DCC-pIOHclw&part=snippet,id&order=date&maxResults=5",
    function(data, status){
        var ytmain =data;
        var i=0;
        while (i<5){
          console.log(ytmain.items[i].snippet.title);
          i+=1;
        }
    });
});
