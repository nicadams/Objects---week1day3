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
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var playlistId in library.playlists) {
    var playlist = library.playlists[playlistId];
    console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
  }
}
printPlaylists();
console.log("THE SPACE BETWEEN...")
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  for (var idKey in library.tracks) {
    var track = library.tracks[idKey];
    console.log(track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
  }
}
printTracks();
console.log("THE SPACE BETWEEN...")

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {


  var playlist = library.playlists[playlistId];
  console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");

  for (key in playlist.tracks) {
    var trackKey = playlist.tracks[key];
    var trackDetails = library.tracks[trackKey];
    console.log(trackKey + ": " + trackDetails.name + " by " + trackDetails.artist + " (" + trackDetails.album + ")");
  }
}

printPlaylist('p01');
console.log("THE SPACE BETWEEN...")

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var trackList = library.playlists[playlistId].tracks;
  trackList.push(trackId);
  console.log(trackList);
}


addTrackToPlaylist('t03', 'p01');
console.log("THE SPACE BETWEEN...")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// console.log(uid());
// adds a track to the library

var addTrack = function (name, artist, album) {
  library.tracks[uid()] = {name: name, artist: artist, album: album}
  console.log(library.tracks);
}

addTrack('Kitten Puncher', 'Nic', 'Long Live the Queen')
console.log("THE SPACE BETWEEN...")

// adds a playlist to the library

var addPlaylist = function (name) {
  var uID = uid();
  library.playlists[uID] = {id: uID, name: name, tracks: 'none'}
  console.log(library.playlists);
}

addPlaylist('Joe Schmo')

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}