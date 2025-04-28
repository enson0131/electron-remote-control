
import { memo, useState, useEffect } from 'react';
import { Button, Input } from 'antd';
// import './index.scss';
const ControlPanel = (): React.JSX.Element => {
  const [controlCode, setControlCode] = useState(''); // 自身控制码
  const [targetControlCode, setTargetControlCode] = useState(''); // 目标控制码

  const handleConfirm = (): void => {
    window.electron.ipcRenderer.send('control', targetControlCode);
  }

  const handleGenerateControlCode = async (): Promise<void> => {
    const controlCode = await window.electron.ipcRenderer.invoke('generateControlCode');
    setControlCode(controlCode);
  }

  useEffect(() => {
    handleGenerateControlCode();
  }, []);

  return (
    <div className="control-panel">
      <h1>当前控制码：{controlCode}</h1>
      <Input
        placeholder="请输入控制码"
        value={targetControlCode}
        onChange={(e) => setTargetControlCode(e.target.value)}
      />
      <Button type="primary" onClick={handleConfirm}>确认</Button>
    </div>
  )
}

export default memo(ControlPanel)
