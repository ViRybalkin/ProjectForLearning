import { Menu } from '@headlessui/react';
import { Fragment, memo } from 'react';
import { AppLink } from 'shared';
import { classNames } from 'app';
import { DropDownProps } from './DropDown.types';
import cls from './DropDown.module.scss';

export const Dropdown = memo(({ items, buttonItem }: DropDownProps) => {
  return (
    <Menu as='div' className={cls.dropdown}>
      <Menu.Button className={cls.button}>{buttonItem}</Menu.Button>
      <Menu.Items className={cls.items}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button className={classNames(cls.item, { [cls.active]: active })} onClick={item.onClick}>
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item disabled={item.disabled} as={AppLink} to={item.href} className={cls.item}>
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item disabled={item.disabled} as={Fragment}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
