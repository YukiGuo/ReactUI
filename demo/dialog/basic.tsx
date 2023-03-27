import React, { useState } from 'react';
import Dialog from '../../lib/dialog/Dialog';

const Alert: React.FunctionComponent = () => {
    const [visible ,setVisible] =useState<boolean>(false)
    const openDialog = ()=>{
        setVisible(true);
    }
   const  onOk  =()=>{
    console.log('确认');
    setVisible(false);
   }
   const  onCancel  =()=>{
    console.log('取消');
    setVisible(false);
   }
    return (
        <div>
            <button onClick={openDialog}> 打开对话框</button>
            <p>基础对话框</p>
             <Dialog visible={visible} title="提示" onCancel ={onCancel} onOk ={onOk}>
            <p>这是第一段话</p>
            <p>这是第二段话</p>
        </Dialog>
        </div>
        
    )
}
export default Alert;