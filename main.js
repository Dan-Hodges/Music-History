var songs = [];
var songList = [];
function Song(sng, person, record) {
  this.sng = sng;
  this.person = person;
  this.record = record;
}
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("On the Beach > by Neil Young on the album On the Beach");
songs.push("#41 > by Dave Matthews Band on the album Crash");

songHolder = document.getElementById("song1");
for (var i = 0; i < songs.length; i++) {
  songs[i]=songs[i].replace(/@/g, "")
  songs[i]=songs[i].replace(/\*/g, "")
  songs[i]=songs[i].replace(/>/g, "-")
  songs[i]=songs[i].replace(/!/g, "")
  songs[i]=songs[i].replace("(", "")
  // making an song name string 
  var arrow = songs[i].indexOf("-");
  var songName = songs[i].slice(0, arrow);
  console.log(songName);
  // making an album sring
  var albumWords = songs[i].indexOf("on the album");
  var album = songs[i].slice(albumWords + 12, songs[i].length);
  console.log(album);
  // making an artist name
  var artistWords = songs[i].indexOf("- by");
  var artist = songs[i].slice(artistWords + 4, albumWords);
  console.log(artist);
  // constructor 
  songList[i] = new Song(songName, artist, album);
  songHolder.innerHTML += "<section class='songinfo'>" + "<h2>" + songList[i].sng + "</h2>" + "<ul>" + "<li class=info>" + "Artist: " + songList[i].person + "</li>" + "<li class='info'>" + "Album: " + songList[i].record + "</li>" + "</ul>" + "</section>" ;
}

