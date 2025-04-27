# electron-remote-control

使用 electron 开发的远程控制应用 App

通过 electron-vite 初始化项目

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```


### 如何捕获桌面流

1. desktopCapturer.getSources({
  types: ['window', 'screen'],
}) 提取chromeMediaSourceId

2. navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
    mandatory: {
      chromeMediaSource: 'desktop',
      chromeMediaSourceId: chromeMediaSourceId,
      width,
      height,
    },
  },
})