import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/Icon'
const fn: React.MouseEventHandler<Element> = (e) => {
    console.log(e.target)
    console.log((e.target as SVGUseElement).href)
}
ReactDOM.render(<div>
    <Icon name="add" className='icon1' onClick={fn}></Icon>
    <Icon name="close" className='icon2'></Icon>
    <Icon name="location"></Icon>

</div>, document.querySelector('#root'))