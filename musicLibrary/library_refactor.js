var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    },
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function () {
  for (var playlistId in this.playlists) {
    var playlist = this.playlists[playlistId];
    console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
  }
},


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {

  for (var idKey in this.tracks) {
    var track = this.tracks[idKey];
    console.log(track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
  }
},



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function (playlistId) {


  var playlist = this.playlists[playlistId];
  console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");

  for (key in playlist.tracks) {
    var trackKey = playlist.tracks[key];
    var trackDetails = this.tracks[trackKey];
    console.log(trackKey + ": " + trackDetails.name + " by " + trackDetails.artist + " (" + trackDetails.album + ")");
  }
},



// adds an existing track to an existing playlist

addTrackToPlaylist: function (trackId, playlistId) {
  var trackList = this.playlists[playlistId].tracks;
  trackList.push(trackId);
  console.log(trackList);
},




// generates a unique id
// (use this for addTrack and addPlaylist)



// console.log(uid());
// adds a track to the this

addTrack: function (name, artist, album) {
  this.tracks[uid()] = {name: name, artist: artist, album: album}
  console.log(this.tracks);
},


// adds a playlist to the this

addPlaylist: function (name) {
  var uID = uid();
  this.playlists[uID] = {id: uID, name: name, tracks: 'none'}
  console.log(this.playlists);
},
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }

library.printPlaylists();


library.printTracks();


library.printPlaylist('p01');


library.addTrackToPlaylist('t03', 'p01');


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


library.addPlaylist('Joe Schmo');

