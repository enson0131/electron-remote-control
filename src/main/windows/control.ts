// 控制窗口

import { BrowserWindow } from 'electron';
import { join } from 'path'

function createControlWindow(): void {
  // Create the browser window.
  const controlWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
  })

  controlWindow.loadFile(join(__dirname, '../renderer/control/index.html'));
}

export default createControlWindow;
 