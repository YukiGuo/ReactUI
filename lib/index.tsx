import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon'
const fn: React.MouseEventHandler<Element> = (e) => {
    console.log(e.target)
    console.log((e.target as SVGUseElement).href)
}
ReactDOM.render(<div>
    <Icon name="add" onClick={fn}></Icon>
    <Icon name="close"></Icon>
    <Icon name="location"></Icon>

</div>, document.querySelector('#root'))