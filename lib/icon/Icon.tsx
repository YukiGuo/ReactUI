import React, { SVGAttributes } from "react";
import './importIcons';
import './icon.scss';
import mergeClassName from "../tools/mergeClassName";

interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
    return <svg className={mergeClassName('koala-icon', className)} aria-hidden="true" {...restProps}>
        <use xlinkHref={`#${name}`} />
    </svg>

}
export default Icon;