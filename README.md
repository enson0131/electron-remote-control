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

### 桌面控制

使用 robotjs 控制桌面

```bash
$ yarn add robotjs
```

鼠标移动: robotjs.moveMouse(x, y)

鼠标点击: robotjs.mouseClick([button], [double])

键盘按键: robotjs.keyTap(key)

https://www.npmjs.com/package/robotjs

robotjs 是基于 C++ 写的 node 库，需要对它进行编译

手动编译方式:
npm rebuild-runtime=electron -disturl=https://atom.io/download/atom-shell \
-target=<electron版本> -abi=<对应版本abi>


process.versions.electron => '35.2.1'
process.versions.node => '22.14.0'

// node - abi对照表 👉 https://github.com/mapbox/node-pre-gyp/blob/master/lib/util/abi_crosswalk.json

22.14.0 => napi: "127"

```bash
// process.versions
acorn: "8.14.0"
ada: "2.9.2"
amaro: "0.3.0"
ares: "1.34.4"
brotli: "1.0.9"
chrome: "134.0.6998.205"
cjs_module_lexer: "1.4.1"
cldr: "44.1"
electron: "35.2.1"
icu: "74.2"
llhttp: "9.2.1"
modules: "133"
napi: "10"
nbytes: "0.1.1"
ncrypto: "0.0.1"
nghttp2: "1.64.0"
node: "22.14.0"
openssl: "0.0.0"
simdjson: "3.10.1"
simdutf: "6.0.2"
sqlite: "3.47.2"
tz: "2025a"
undici: "6.21.1"
unicode: "15.1"
uv: "1.49.2"
uvwasi: "0.0.21"
v8: "13.4.114.21-electron.0"
zlib: "1.3.0.1-motley"
```




