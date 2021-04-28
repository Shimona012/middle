
function setup() {
  createCanvas(1000,600);
  text("Click on the buttons below to"+
  " play/pause the video or go to the next surprise ;)", 20, 20);

vidElement = createVideo("song.mp4");
vidElement.position(20, 0);
vidElement.size(600);

playBtn = createButton("Play Video");
playBtn.position(30, 40);
playBtn.mouseClicked(playVideo);

pauseBtn = createButton("Next..");
pauseBtn.position(150, 40);
pauseBtn.mouseClicked(nextVideo);

nextBtn = createButton("Pause Video");
nextBtn.position(300, 40);
nextBtn.mouseClicked(pauseVideo);
}



function draw() {
  background("purple");  

}
function playVideo() {
  vidElement.play();
  }
  
  function pauseVideo() {
  vidElement.pause();
  }
  function nextVideo(){
//open(,"happybday")
window.location.href = "https://shimona012.github.io/middle/index.html";
window.location.replace("https://shimona012.github.io/end/index.html");

  }