import peer from './peer-control';

function play(stream) {
  const video = document.getElementById('screen-video');
  video.srcObject = stream;
  video.onloadedmetadata = () => {
    video.play();
  };
}

peer.on('screen-stream', (stream) => {
  play(stream);
});
