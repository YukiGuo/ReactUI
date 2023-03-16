import React, { SVGAttributes } from "react";
import './importIcons';
import './icon.scss';

interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return <svg className="koala-icon" aria-hidden="true" {...props}>
        <use xlinkHref={`#${props.name}`} />
    </svg>

}
export default Icon;