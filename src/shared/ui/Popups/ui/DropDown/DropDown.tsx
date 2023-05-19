import { Menu } from '@headlessui/react';
import { Fragment, memo } from 'react';
import { classNames } from '../../../../config/helpers/classNames';
import { AppLink } from '../../../AppLink';
import { DropDownProps } from './DropDown.types';
import cls from './DropDown.module.scss';
import popupsCls from '../../styles/Popups.module.scss';

export const Dropdown = memo(({ items, buttonItem, position = 'bottomLeft' }: DropDownProps) => {
  return (
    <Menu as='div' className={popupsCls.popups}>
      <Menu.Button className={cls.button}>{buttonItem}</Menu.Button>
      <Menu.Items className={classNames(popupsCls.items, {}, [popupsCls[position], cls.items])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button className={classNames(cls.item, { [popupsCls.active]: active })} onClick={item.onClick}>
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item key={index} disabled={item.disabled} as={AppLink} to={item.href}>
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item key={index} disabled={item.disabled} as={Fragment}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
