import { Icon } from "../index";
import Mask from "./Mask";
import React, { MouseEventHandler, ReactNode, useEffect, useLayoutEffect } from "react";
import "./style/dialog.scss";
import ReactDOM from "react-dom";
interface DialogProps extends ModalProps {
  visible: boolean;
}
interface ModalProps  extends ConfirmProps{
  footer?: ReactNode;
}
interface ConfirmProps {
  title: string;
  onCancel?: MouseEventHandler;
  onOk?: MouseEventHandler;
  content?:ReactNode;
  okText?:ReactNode;
  cancelText?:ReactNode;
  width?:string;
  maskClosable?:boolean
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { visible,title, footer, onCancel, onOk ,children,okText,cancelText,width,maskClosable=true} = props;
  const close = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (onCancel) {
      onCancel(e);
    }
  };
  const ok = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (onOk) {
      onOk(e);
    }
  };
  const onClickMask =(e: React.MouseEvent<Element, MouseEvent>)=>{
    if(maskClosable){
      if (onCancel) {
        onCancel(e);
      }
     
    }
  }
  useLayoutEffect(()=>{
    //打卡对话框时页面不滚动
    if(visible){
      document.body.style.overflowY='hidden';
      console.log('hidden')

    }else{
      document.body.style.overflowY='auto';
      console.log('auto')
    }
  },[visible])

  const dialog = (
    <>
      <Mask  onClick={onClickMask}/>
      <div className="koala-dialog" style={{width}} >
        <div className="koala-dialog-header">
          <span className="koala-dialog-header-title">{title}</span>
          <Icon
            name="close"
            className="koala-dialog-header-close"
            onClick={close}
          ></Icon>
        </div>
        <div className="koala-dialog-content">
          {children}
        </div>
        {footer!==null&&<div className="koala-dialog-footer">
          {footer ? (
            footer
          ) : (
            <>
              <button className="canclebutton" onClick={close}>
               {cancelText ||'取消'}
              </button>
              <button className="okbutton" onClick={ok}>
                {okText ||'确认'}
              </button>
            </>
          )}
        </div>}
      </div>
    </>
  );
  return  visible?  ReactDOM.createPortal(dialog, document.body):<></>;
};

const modal = (props:ModalProps) => {
  const { title, onCancel, content,onOk,footer=null  } = props;
  const ok = (e: React.MouseEvent<Element, MouseEvent>) => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove(); 
    onOk&& onOk(e);
  };
  const close = (e: React.MouseEvent<Element, MouseEvent>) => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onCancel &&onCancel(e)
    document.body.style.overflowY='auto';

  };

  const component = (
    <Dialog visible={true} title={title} footer={footer} onCancel={close} onOk={ok} >{content}</Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return close
};

const confirm =(props:ConfirmProps)=>{
  const confirmFooter = [
    <button className="canclebutton" onClick={(e)=>(close(e))}>
      取消
    </button>,
    <button className="okbutton"onClick={(e)=>(close(e))} >
      确认
    </button>,
  ];
 const close= modal({
    ...props,
    footer:confirmFooter
  })
}
const alert =(props:ConfirmProps)=>{
  const alertFooter = [
    <button className="okbutton"  onClick={(e)=>close(e)}>
      确认
    </button>,
  ];
 const close= modal({
    ...props,
    footer:alertFooter
  })
}
export { confirm,modal ,alert};
export default Dialog;
