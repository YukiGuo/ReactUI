import React, { useState } from 'react';
import { Tree } from '../../lib/index';

const Basic: React.FunctionComponent = () => {
  const [value,setValue]=useState(['beijing','minhang']);
  const change =(a)=>{
    setValue(a)
  }
  const [treeData, setTreeData] = useState([
      {
        label: '北京',
        value: 'beijing',
      },
      {
        label: '上海',
        value: 'shanghai',
        children: [
          {
            label: '闵行',
            value: 'minhang',
          },
          {
            label: '浦东',
            value: 'pudong',
          },
        ],
      },
      {
        label: '山西',
        value: 'shanxi',
        children: [
          {
            label: '太原',
            value: 'taiyuan',
          },
          {
            label: '大同',
            value: 'datong',
          },
        ],
      },
    ],
  );
  return <div>
    <p>多选</p>
    <p>选中值： {value.join(' ')}</p>
   
      <Tree treeData={treeData} value={value} onChange ={change} multiple ></Tree>
         </div>
};
export default Basic;
