import React from 'react';
import cls from './navBar.module.scss'
import {NavBarProps} from "./NavBar.types";
import {classNames} from "app";
import {CustomLink} from "shared";

const NavBar = ({className, links}:NavBarProps) => {
    return (
        <header className={classNames(cls.navBar, {}, [className])}>
            {links.map((elem) => {
                return <CustomLink key={elem.path} to={elem.path} name={elem.name}/>
            })}
        </header>
    );
};

export {NavBar};