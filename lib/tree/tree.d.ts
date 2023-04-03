interface ItemProps{
    target: any;
    value: string,
    children?:ItemProps[],
    label:string,
}

interface TreeProps{
    treeData:ItemProps[],
    value?:string|string[],
    multiple?:boolean,
    disabled?:boolean,
    onChange: (value:string|string[])=>void
}