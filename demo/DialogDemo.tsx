import React from 'react';
import Dialog,{alert,confirm,modal} from '../lib/dialog/Dialog';
const fn: React.MouseEventHandler<Element> = (e) => {
    console.log(e.target)
    console.log((e.target as SVGUseElement).href)
}
const DialogDemo: React.FunctionComponent = () => {
    const a =()=>{
        confirm({
            title:'confirm',
            content:'确认提交数据大女女妇女',
            onCancel:()=>{console.log('onCancel')},
            onOk:()=>{console.log('onOk')},
        })
    }
    const b =()=>{
        modal({
            title:'modal',
          
        })
    }
    const c =()=>{
        alert({
            title:'alert',
          
        })
    }
    return (
        <div>
          <button onClick={a}> confirm</button>
        <button onClick={b}> modal</button>
        <button onClick={c}> alert</button>
        </div>
    )
}
export default DialogDemo;