import { Menu } from '@headlessui/react';
import { Fragment, memo } from 'react';
import { classNames } from '../../config/helpers/classNames';
import { AppLink } from '../AppLink';
import { DropDownProps } from './DropDown.types';
import cls from './DropDown.module.scss';

export const Dropdown = memo(({ items, buttonItem, position = 'bottomLeft' }: DropDownProps) => {
  return (
    <Menu as='div' className={cls.dropdown}>
      <Menu.Button className={cls.button}>{buttonItem}</Menu.Button>
      <Menu.Items className={classNames(cls.items, {}, [cls[position]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button className={classNames(cls.item, { [cls.active]: active })} onClick={item.onClick}>
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
