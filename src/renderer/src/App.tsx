import ControlPanel from './components/ControlPanel'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <ControlPanel />
    </>
  )
}

export default App
