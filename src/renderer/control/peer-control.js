import EventEmitter from 'events';
import { ipcRenderer } from 'electron';
const peer = new EventEmitter();

async function getScreenStream() {
  const sources = await ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', {
    types: ['screen'],
  });


  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: sources[0].id,
        width: window.screen.width,
        height: window.screen.height,
      },
    },
  }).then(stream => {
    peer.emit('screen-stream', stream);
  }).catch(err => {
    console.error(err);
  });
}

getScreenStream();


export default peer;