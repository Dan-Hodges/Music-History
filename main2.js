var songData = "";
$(document).ready(function() {
  $.ajax({
    url: "ajaxtext.json"
  }).done(function(data) {
      console.log(data);
      for (var i = 0; i < data.songs.length; i++) {
        songData += "<div class='songs'>" + "<h2 id='songTitle'>" + data.songs[i].title + "</h2>";
        songData += "<ul id='songlist'>";
        songData += "<li id='artist'>" + data.songs[i].artist + "</li>";
        songData += "<li id='album'>" + data.songs[i].album + "</li>";
        songData += "</ul>";
        songData += "</div>";
      }
      $('.songinfo').html(songData);
      console.log(songData);
  })
});

