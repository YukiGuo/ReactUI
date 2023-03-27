import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router, Routes, Link, Route
} from "react-router-dom";
import IconDemo from './demo/IconDemo';
import Dialog, {confirm, modal,alert} from './lib/dialog/Dialog';

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
ReactDOM.render(
    <div>
        <button onClick={a}> confirm</button>
        <button onClick={b}> modal</button>
        <button onClick={c}> alert</button>
        {/* <Dialog visible={true} title="test">
            <p>JJJJn</p>
            <p>ghioeueueu</p>
        </Dialog> */}
    </div>
    // <Router>
    //     < div >
    //         <header>头部</header>
    //         <div>
    //             <aside>
    //                 <ul>
    //                     <li>
    //                         <Link to="/icon">Icon</Link>
    //                     </li>
    //                 </ul>
    //             </aside>
    //             <main>
    //                 <Routes>
    //                     <Route path="/icon" Component={IconDemo}></Route>
    //                 </Routes>
    //             </main>
    //         </div>

    //     </div >
    // </Router>
    , document.querySelector('#root'))