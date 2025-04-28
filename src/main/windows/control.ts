// 控制窗口

// TODO enson 控制弹窗没有添加到 out/renderer/control/index.html 里面需要自己先 COPY
import { BrowserWindow } from 'electron';
import { join } from 'path'

function createControlWindow(): void {
  // Create the browser window.
  const controlWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  controlWindow.on('ready-to-show', () => {
    controlWindow.show()
    controlWindow.webContents.openDevTools();
    console.log(controlWindow.webContents);
  })


  controlWindow.loadFile(join(__dirname, '../renderer/control/index.html'));
}

export default createControlWindow;
