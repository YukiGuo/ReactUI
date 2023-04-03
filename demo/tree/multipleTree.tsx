import React, { useState } from 'react';
import { Tree } from '../../lib/index';

const Basic: React.FunctionComponent = () => {
  const [value, setValue] = useState([]);
  const change = (a) => {
    setValue(a)
  }
  const [treeData, setTreeData] = useState([
    {
      label: '北京',
      value: '1',
    },
    {
      label: '上海',
      value: '2',
      children: [
        {
          label: '闵行',
          value: '2-1',
          children: [{
            label: '',
            value: '2-1-1',
          },
          {
            label: '',
            value: '2-1-3',
          },
          {
            label: '',
            value: '2-1-3',
          }
          ]
        },
        {
          label: '浦东',
          value: '2-2',
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
  ]);
  return <div>
    <p>多选</p>
    <p>选中值： {value.join(' ')}</p>

    <Tree treeData={treeData} value={value} onChange={change} multiple autoSelectChildren ></Tree>
  </div>
};
export default Basic;
