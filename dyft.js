// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;



function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    host: "https://www.youtube.com",
    /* no need to specify player 
    size here since it is handled 
    by the player-size div */
    videoId: "7YZCUpnaTfg",
    playerVars: {
      enablejsapi: 1,
      playsinline: 1,
      start: 0,
      disablekb: 0
    },
    events: {
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  console.log("player state: " + player.getPlayerState());
}

function updateVideoId() {
  let videoId = document.getElementById("videoId").value;
  
    const myArray = videoId.split("youtu.be/");
    var final = myArray[1];
  
  player.loadVideoById(final, -1);
}

function stopVideo() {
  player.stopVideo();
}



function openFullscreen() {

elem = document.getElementById("player-size");

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  } 
}




  

