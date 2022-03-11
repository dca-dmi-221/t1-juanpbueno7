function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
}

songs=[];
index=0;
songsName=["cancion1","cancion2","cancion3","cancion4"]

function preload() {
  songs[0] = loadSound("song1.mp3");
  songs[1] = loadSound("song2.mp3");
  songs[2] = loadSound("song3.mp3");
  songs[3] = loadSound("song4.mp3");
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
  }
}

