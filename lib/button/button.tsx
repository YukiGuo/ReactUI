import React, { HTMLAttributes } from "react";
import './button.scss';
import mergeClassName from "../tools/mergeClassName";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: string;
    size?: string;
    loading?: string;
    // icon: ReactNode;
    disabled?: boolean;
}
const Button: React.FunctionComponent<ButtonProps> = ({ type = "default", size = "middler", loading, disabled, children }) => {

    return <button className={mergeClassName('koala-button', `koala-${type}-button`, `koala-${size}-button`)}>
        {children}
    </button>

}
export default Button;