import { Popover as HPopover } from '@headlessui/react';
import { memo } from 'react';
import { PopoverProps } from './Popover.types';
import popupsCls from '../../styles/Popups.module.scss';
import { classNames } from '@/shared/helpers/classNames';

export const Popover = memo(
  ({ buttonItem, children, childrenLength, classname, position = 'bottomLeft' }: PopoverProps) => {
    return (
      <HPopover data-content={childrenLength} className={classNames(popupsCls.popups, {}, [classname])}>
        <HPopover.Button className={popupsCls.button}>{buttonItem}</HPopover.Button>

        <HPopover.Panel className={classNames(popupsCls.items, {}, [popupsCls.verticalItems, popupsCls[position]])}>
          {children}
        </HPopover.Panel>
      </HPopover>
    );
  }
);
