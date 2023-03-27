import React from 'react';
import {alert} from '../../lib/dialog/Dialog';

const Alert: React.FunctionComponent = () => {
    const fn =()=>{
        alert({
            title:'alert',
        })
    }
    return (
        <>
        <button onClick={fn}> alert</button>
        <p>利用 alter方法</p>
        </>
    )
}
export default Alert;