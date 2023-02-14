import React, {FC} from 'react';
import cls from './button.module.scss'
import {ButtonProps} from "./Button.types";
import {classNames} from "app";

const Button:FC<ButtonProps> = ({className,theme, children, ...otherProps}) => {
    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};

export {Button};