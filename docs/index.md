import React from 'react';
import Icon from '../lib/icon/Icon';
const fn: React.MouseEventHandler<Element> = (e) => {
    console.log(e.target)
    console.log((e.target as SVGUseElement).href)
}
const IconExample: React.FunctionComponent = () => {
    return (
        <div>
        
        </div>
    )
}
export default IconExample;