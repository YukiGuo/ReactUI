import React, { useState } from 'react';
import { classes } from '../tools/classes';
import './tree.scss';

interface treeItemProps {
  item: ItemProps;
  level?: number;
  treeProps: TreeProps;
}
const className = classes('koala-tree-item');
const TreeItem: React.FC<treeItemProps> = (props) => {
  const { item, treeProps } = props;
  const level = props.level || 0;
  const [open, setOpen] = useState(false);
  //展开子项
  const expand = () => {
    setOpen(true);
  };
  //折叠子项
  const collapse = () => {
    setOpen(false);
  };
  //当前项是否选中
  const isChecked = (item: ItemProps) => {
    if (treeProps.multiple) {
      return treeProps.value?.includes(item.value);
    }
    return item.value === treeProps.value;
  };
  const onChange = (item: ItemProps, checked: boolean) => {
    if (treeProps.multiple) {
      const values = (treeProps.value as string[]) || [];
      if (checked) {
        treeProps.onChange([...values, item.value]);
      } else {
        treeProps.onChange(values.filter((value) => value !== item.value));
      }
    } else {
      const value = checked ? item.value : '';
      treeProps.onChange(value);
    }
  };
  return (
    <div className={className({ '': true, collapse: !open })} key={item.value}>
      <div className={className('content')}>
        {item.children && item.children.length ? (
          open ? (
            <span onClick={collapse}>
              {/* <Icon name="close"></Icon> */}
              --
            </span>
          ) : (
            <span onClick={expand}> --</span>
          )
        ) : null}

        <span
          className={className('indent')}
          style={{ width: `${24 * level}px` }}
        ></span>
        <input
          type="checkbox"
          checked={isChecked(item)}
          onChange={(e) => onChange(item, e.target.checked)}
        />
        {item.label}
      </div>
      {item.children &&
        item.children.map((ele) => (
          <div className={className('children')}>
            <TreeItem
              item={ele}
              level={level + 1}
              treeProps={treeProps}
            ></TreeItem>
          </div>
        ))}
    </div>
  );
};
export default TreeItem;
