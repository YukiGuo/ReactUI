import React from 'react';
import {confirm} from '../../lib/dialog/Dialog';

const Confirm: React.FunctionComponent = () => {
    const fn =()=>{
        confirm({
            title:'提示',
            content:'确认提交此数据？'
        })
    }
    return (
        <>
        <button onClick={fn}> confirm</button>
        <p>利用 confirm 方法</p>
        </>
    )
}
export default Confirm;