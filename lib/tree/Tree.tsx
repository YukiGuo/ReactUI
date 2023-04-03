import React, { ChangeEventHandler, useState } from 'react';
import './tree.scss';
import TreeItem from './TreeItem';
import { classes } from '../tools/classes';

const className = classes('koala-tree')

const Tree: React.FC<TreeProps> = (props) => {

    return (
        <div className={className('')}>
            {props.treeData.map(ele => <TreeItem item={ele} treeProps={props} />)}
        </div>
    )
}
export default Tree;