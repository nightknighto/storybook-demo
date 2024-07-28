import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = {
    variant: 'primary' | 'secondary' | 'success' | 'danger';
    children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ variant, children, ...rest }: ButtonProps) {
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    );
}

export default Button;