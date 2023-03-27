import React, { useState } from 'react';
import Dialog from '../../lib/dialog/Dialog';

const Customfooter: React.FunctionComponent = () => {
    const [visible ,setVisible] =useState<boolean>(false)
    const openDialog = ()=>{
        setVisible(true);
    }
   const  onOk  =()=>{
    console.log('确认');
    setVisible(false);
   }
   const  onSave  =()=>{
    console.log('保存');
    setVisible(false);
   }
   const  onCancel  =()=>{
    console.log('取消');
    setVisible(false);
   }
    return (
        <div>
            <button onClick={openDialog}> 定制footer</button>
            <p>自定义底部</p>
             <Dialog visible={visible} title="提示"  footer={[
                 <button className="canclebutton" onClick={onCancel}>
                    取消
                  </button>,
                  <button className="okbutton"onClick={onSave} >
                    保存
                  </button>,
                   <button className="okbutton"onClick={(e)=>(onOk)} >
                   提交
                 </button>,
             ]}>
            <p>这是第一段话</p>
            <p>这是第二段话</p>
        </Dialog>
        </div>
        
    )
}
export default Customfooter;