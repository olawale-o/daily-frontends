const video = document.querySelector('video');
const playPause = document.querySelector('#play-pause');

const START_TIME = 2;

video.currentTime = START_TIME;

playPause.addEventListener('click', playVideo);

function playVideo() {
  if (video.paused) {
    video.play()
  } else {
    video.pause();
  }
}

function startPreview() {
  video.muted = true;
  video.currentTime = 0;
  video.playbackRate = 0.5;
  video.play();
}

function stopPreview() {
  video.currentTime = START_TIME;
  video.playbackRate = 1;
  video.pause();
}

let previewTimeOut = null;

video.addEventListener('mouseenter', () => {
  startPreview();
  previewTimeOut = setTimeout(stopPreview, 4000);
});

video.addEventListener('mouseleave', () => {
  clearTimeout(previewTimeOut);
  previewTimeOut = null;
  stopPreview();
})