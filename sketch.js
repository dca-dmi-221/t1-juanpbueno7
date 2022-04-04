let timer = 0;

//Songs in Queue
let myQueue = [];
myQueue[0] = new songInQueue("My Way", "Calvin Harris", "3:46", 0);
myQueue[1] = new songInQueue ("Outside", "Calvin Harris FT. Ellie Goulding ", "3:46", 100);
myQueue[2] = new songInQueue ("Feel So Close", "Calvin Harris","3:23", 200);
myQueue[3] = new songInQueue("Blame", "Calvin Harris FT. John Newman", "2:26", 300);

let myQueueAvicci = [];
myQueueAvicci[0] = new songInQueue("The Nights", "Avicci", "2:56", 0);
myQueueAvicci[1] = new songInQueue ("Wake Me Up", "Avicci ", "4:12", 100);
myQueueAvicci[2] = new songInQueue ("Levels(Radio Edit)", "Avicci","3:20", 200);
myQueueAvicci[3] = new songInQueue("Heaven", "Avicci", "4:39", 300);


//Playlist
myPlaylists = [];
myPlaylists[0] = new playlist("This is Calvin Harris", "2016", "4 canciones", 30, 400);
myPlaylists[1] = new playlist("This is Avicci", "2019", "4 canciones", 130, 400);


//Images
let reproBackGround;
let mySongCovers = [];
let mySongCoversAvicci = [];
let myPlaylistsCovers = [];

//ReproTiming
let timeIndicator = new Slider();

//Volume
let slider;

//Botones
let playButton = new Button(195, 540, "PLAY", 0, 35);
let stopButton = new Button(270, 540, "STOP", 0, 35);
let nextSongButton = new Button(387, 540, "NEXT", 0, 35);
let previousSongButton = new Button(70, 540, "PREVIOUS", 0, 35);

//Songs Info
let mySongsInfo = [];
let mySongsInfoAvicci = [];


let mySongs = [];
let mySongsAvicci = [];

let songsIndex = 0;
let selectedIndex = 2;


function preload() {
  //Images
  reproBackGround = loadImage("./assets/repro.png")

  mySongCovers[0] = loadImage("./assets/myWay.jpg");
  mySongCovers[1] = loadImage("./assets/outside.jpg");
  mySongCovers[2] = loadImage("./assets/feelSoClose.png");
  mySongCovers[3] = loadImage("./assets/blame.jpg");

  mySongCoversAvicci[0] = loadImage("./assets/theNights.jpg");
  mySongCoversAvicci[1] = loadImage("./assets/wakeMeUp.jpg");
  mySongCoversAvicci[2] = loadImage("./assets/levels.png");
  mySongCoversAvicci[3] = loadImage("./assets/heaven.jpg");



  myPlaylistsCovers[0] = loadImage("./assets/calvinHarris.jpg");
  myPlaylistsCovers[1] = loadImage("./assets/avicci.jpg");

  //Sounds

  mySongs[0] = loadSound("./music/song.mp3");
  mySongs[1] = loadSound("./music/song1.mp3");
  mySongs[2] = loadSound("./music/song2.mp3");
  mySongs[3] = loadSound("./music/song3.mp3");

  mySongsAvicci[0] = loadSound("./music/theNights.mp3");
  mySongsAvicci[1] = loadSound("./music/wakeMeUp.mp3");
  mySongsAvicci[2] = loadSound("./music/levels.mp3");
  mySongsAvicci[3] = loadSound("./music/heaven.mp3");
}

//Songs Info
mySongsInfo[0] = new songInfo("My Way", "Calvin Harris", "3:46");
mySongsInfo[1] = new songInfo("Outside", "Calvin Harris FT. Ellie Goulding ", "3:46");
mySongsInfo[2] = new songInfo("Feel So Close", "Calvin Harris","3:23");
mySongsInfo[3] = new songInfo("Blame", "Calvin Harris FT. John Newman", "2:26");

mySongsInfoAvicci[0] = new songInfo("The Nights", "Avicci", "2:56");
mySongsInfoAvicci[1] = new songInfo("Wake Me Up", "Avicci ", "4:12");
mySongsInfoAvicci[2] = new songInfo("Levels(Radio Edit)", "Avicci","3:20");
mySongsInfoAvicci[3] = new songInfo("Heaven", "Avicci", "4:39");


function setup() {
  let canvas = createCanvas(1280, 720);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(130, 635);
  slider.style('width', '200px');
}

function draw() {
  background(220);
  image(reproBackGround,0,0)
  fill(255, 0, 0)

  //Dibujar Bottones
  /*
  playButton.draw();
  stopButton.draw();
  nextSongButton.draw();
  previousSongButton.draw();
*/

  //Posiciones mouse
  fill(255, 0, 0);
  text("X: " + mouseX + " Y: " + mouseY, mouseX, mouseY);

  //Muestra las playlist
  for (let i = 0; i < myPlaylists.length; i++) { 
    myPlaylists[i].draw(myPlaylistsCovers[i]);

    if (selectedIndex === myPlaylists.indexOf(myPlaylists[i])) {
      myPlaylists[i].setSelected(true)
    } else { 
      myPlaylists[i].setSelected(false)
    }
    
  }


  //Pone las imagenes en de las respectivas canciones y permite indicar cual esta en play 
  if (selectedIndex === 0) { 
    mySongsAvicci[songsIndex].stop();

    for (let i = 0; i < myQueue.length; i++) { 
    myQueue[i].draw(mySongCovers[i]);

      if (myQueue[i] === myQueue[songsIndex]) {
      myQueue[i].setSelected(true);
      } else { 
      myQueue[i].setSelected(false);
    }
    }
    
  //Show info and album img.
  mySongsInfo[songsIndex].draw(mySongCovers[songsIndex]);
 
  //Show volume slider
  mySongs[songsIndex].setVolume(slider.value());

  }

  if (selectedIndex === 1) { 

    mySongs[songsIndex].stop();

    for (let i = 0; i < myQueue.length; i++) { 
    myQueueAvicci[i].draw(mySongCoversAvicci[i]);

      if (myQueueAvicci[i] === myQueueAvicci[songsIndex]) {
      myQueueAvicci[i].setSelected(true);
      } else { 
      myQueueAvicci[i].setSelected(false);
    }
    }
    
  //Show info and album img.
  mySongsInfoAvicci[songsIndex].draw(mySongCoversAvicci[songsIndex]);
 
  //Show volume slider
  mySongsAvicci[songsIndex].setVolume(slider.value());

  }
 

  counter();
  timeIndicator.draw(timer);

  
  
}

function mousePressed() {

  //Play
  if (dist(playButton.getX(), playButton.getY(), mouseX, mouseY) < 25) {
    play();
  }

  //Stop
  if (dist(stopButton.getX(), stopButton.getY(), mouseX, mouseY) < 25) {
    pause();
  }

  //Next
  if (dist(nextSongButton.getX(), nextSongButton.getY(), mouseX, mouseY) < 25) {
    nextSong();
  }

  //Previous
  if (dist(previousSongButton.getX(), previousSongButton.getY(), mouseX, mouseY) < 25) {
    previousSong();
  }

  //Change Song by Reproductor
  for (let i = 0; i < myQueue.length; i++) {

    if (dist(myQueue[i].getX(), myQueue[i].getY(), mouseX, mouseY) < 80) {
      stop();
      songsIndex = myQueue.indexOf(myQueue[i]);
      play();
    }

  }

  //selectPlayList

   for (let i = 0; i < myPlaylists.length; i++) {

    if (dist(myPlaylists[i].getX(), myPlaylists[i].getY(), mouseX, mouseY) < 80) {
      
      selectedIndex = myPlaylists.indexOf(myPlaylists[i]);
      console.log("Selected index: " + selectedIndex);
    }

  }


}   

function play() { 
  if (selectedIndex === 0) { 
    mySongs[songsIndex].play();
  timer = 0;
  }

  if (selectedIndex === 1) { 
    mySongsAvicci[songsIndex].play();
    timer = 0;
  }
}

function pause() { 
  if (selectedIndex === 0) {
    mySongs[songsIndex].pause();
  }
  
  if (selectedIndex === 1) {
    mySongsAvicci[songsIndex].pause();
  }
}

function stop() { 
  if (selectedIndex === 0) {
    mySongs[songsIndex].stop();
  }

  if (selectedIndex === 1) {
    mySongsAvicci[songsIndex].stop();
   }
}

function nextSong() { 

  if (selectedIndex === 0) {
    timeIndicator.setX();
  timer = 0;
   stop();
  if(songsIndex<mySongs.length-1){
  songsIndex+=1;
  }
  else{
    songsIndex=0;
  }
  play();
  }
  
  if (selectedIndex === 1) {
    timeIndicator.setX();
  timer = 0;
   stop();
  if(songsIndex<mySongsAvicci.length-1){
  songsIndex+=1;
  }
  else{
    songsIndex=0;
  }
  play();
   }
  
}

function previousSong() { 

  if (selectedIndex === 0) { 

  timeIndicator.setX();
  timer = 0;
   stop();
  if(songsIndex>0){
  songsIndex-=1;
  }
  else{
    songsIndexe= mySongs.length;
  }
  play();

  }

  if (selectedIndex === 1) { 

  timeIndicator.setX();
  timer = 0;
   stop();
  if(songsIndex>0){
  songsIndex-=1;
  }
  else{
    songsIndex= mySongsAvicci.length;
  }
  play();

  }
  
}

function counter() { 
  if (frameCount % 60 === 0 ) { 
      timer++;
    }
}


