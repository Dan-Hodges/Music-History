$(document).ready(function() {
var songData = "";
  $.ajax({
    url: "ajaxtext.json"
  }).done(function(data) {
      console.log(data);
      for (var i = 0; i < data.songs.length; i++) {
        songData += "<div class='songs' id='songs'>" + "<h2 id='songTitle'>" + data.songs[i].title +"</h2>" + "<button id='delete' type='button'>" + "Delete" + "</button>";
        songData += "<ul id='songlist'>";
        songData += "<li id='artist'>" + data.songs[i].artist + "</li>";
        songData += "<li id='album'>" + data.songs[i].album + "</li>";
        songData += "</ul>";
        songData += "</div>";
      }
      $('.songinfo').html(songData);
      console.log(songData);
  });
$('button').click(function() {
      $.ajax({
      url: "list2.json"
    }).done(function(data) {
        console.log(data);
        for (var i = 0; i < data.songs2.length; i++) {
          songData += "<div class='songs' id='songs'>" + "<h2 id='songTitle'>" + data.songs2[i].title +"</h2>" + "<button id='delete' type='button'>" + "Delete" + "</button>";
          songData += "<ul id='songlist'>";
          songData += "<ul id='songlist'>";
          songData += "<li id='artist'>" + data.songs2[i].artist + "</li>";
          songData += "<li id='album'>" + data.songs2[i].album + "</li>";
          songData += "</ul>";
          songData += "</div>";
        }
        $('.songinfo').html(songData);
        console.log(songData);  
  });
  });
$(document).on("click", "#delete", function() {
    console.log("you click5ed the delete button");
  });
});

