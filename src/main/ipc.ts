import { ipcMain } from 'electron'
import { desktopCapturer } from 'electron'
const initIpc = (): void => {
  // 生成控制码
  ipcMain.handle('generateControlCode', () => {
    const controlCode = Math.floor(Math.random() * (999999 - 100000)) + 100000
    return controlCode
  })
  // 根据控制码，获取桌面流
  ipcMain.handle('control', (event, controlCode) => {
    console.log(controlCode)
  })

  ipcMain.handle(
    'DESKTOP_CAPTURER_GET_SOURCES',
    (event, opts) => desktopCapturer.getSources(opts)
  )
}

export default initIpc
