import React, { memo, useState } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { NotificationList } from '@/entities/NotificationList';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { MobileComponent } from '@/shared/ui/MobileComponent';
import { DesktopComponent } from '@/shared/ui/DesktopComponent';
import { Drawer } from '@/shared/ui/Drawer';
import { classNames } from '@/shared/config/helpers/classNames';
import { AnimationProvider } from '@/shared/providers/AnimationProvider';
import cls from './NotificationButton.module.scss';
import { useGetNotificationsQuery } from '../../config/service/getNotifications.service';

export const NotificationButton = memo(() => {
  const { data, isLoading } = useGetNotificationsQuery(undefined, { pollingInterval: 5000 });
  const childrenLength = data?.length ? String(data.length) : '';
  const [isOpen, setIsOpen] = useState(false);

  const Button = (
    <Icon
      onClick={() => setIsOpen(true)}
      width={30}
      height={30}
      data-content={childrenLength}
      classname={classNames(cls.icon, {}, [cls.itemLength])}
      Svg={NotificationIcon}
    />
  );

  return (
    <div>
      <DesktopComponent>
        <Popover childrenLength={childrenLength} classname={cls.itemLength} buttonItem={Button}>
          <NotificationList classname={cls.notification} items={data} isLoading={isLoading} />
        </Popover>
      </DesktopComponent>
      <MobileComponent classname={cls.mobileItemLength}>
        <div data-content={childrenLength} className={cls.itemLength}>
          {Button}
          <AnimationProvider>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <NotificationList classname={cls.mobileNotification} items={data} isLoading={isLoading} />
            </Drawer>
          </AnimationProvider>
        </div>
      </MobileComponent>
    </div>
  );
});
