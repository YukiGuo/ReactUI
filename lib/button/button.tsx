import React, { HTMLAttributes } from "react";
import './button.scss';
import mergeClassName from "../tools/mergeClassName";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: 'default' | 'primary' | 'text'|'success'|'warning';
    size?: 'middle' | 'small' | 'large';
    loading?: string;
    // icon: ReactNode;
    disabled?: boolean;
}
const Button: React.FunctionComponent<ButtonProps> = ({ type = "default", size = "middler", loading, disabled, children ,...restProps }) => {

    return <button className={mergeClassName('koala-button', `koala-${type}-button`, `koala-${size}-button`)} {...restProps} >
        {children}
    </button>

}
export default Button;