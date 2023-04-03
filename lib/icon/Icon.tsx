import React, { SVGAttributes } from "react";
import './importIcons.js';
import './icon.scss';
import mergeClassName from "../tools/classes";

interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
    return <svg className={mergeClassName('koala-icon', className)} aria-hidden="true" {...restProps}>
        <use xlinkHref={`#${name}`} />
    </svg>

}
export default Icon;