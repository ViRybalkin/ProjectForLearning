import React, {useCallback, useState} from 'react';
import {classNames} from "app";
import cls from './SideBar.module.scss'
import {SideBarProps} from "widget/ui/SideBar/SideBar.types";
import { Button } from 'shared';
import SideBarIcon from 'shared/assets/icons/side-bar.svg'

const SideBar = ({className}: SideBarProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    const onToggle = useCallback(() => {
        setIsCollapsed(prevState => !prevState)
    }, []);

    return (
        <aside className={classNames(cls.navBar, {[cls.collapsed]: isCollapsed}, [className])}>
            <Button theme={'clear'} className={cls.collapseBtn} onClick={onToggle}>
                <SideBarIcon fill={isCollapsed ? '#000' : '#fff'} width={30} height={30} />
            </Button>
        </aside>
    );
};

export {SideBar};