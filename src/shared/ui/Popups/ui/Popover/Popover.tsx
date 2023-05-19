import { Popover as HPopover } from '@headlessui/react';
import { memo } from 'react';
import { PopoverProps } from './Popover.types';
import popupsCls from '../../styles/Popups.module.scss';
import cls from './Popover.module.scss';
import { classNames } from '../../../../config/helpers/classNames';

export const Popover = memo(({ item, buttonItem, position = 'bottomLeft' }: PopoverProps) => {
  return (
    <HPopover className={popupsCls.popups}>
      <HPopover.Button>{buttonItem}</HPopover.Button>

      <HPopover.Panel className={classNames(popupsCls.items, {}, [cls.items, popupsCls[position]])}>
        {item}
      </HPopover.Panel>
    </HPopover>
  );
});
