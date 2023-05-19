import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/NotificationList';
import { Icon } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import cls from './NotificationButton.module.scss';
import { useGetNotificationsQuery } from '../../config/service/getNotifications.service';

export const NotificationButton = memo(() => {
  const { data, isLoading } = useGetNotificationsQuery(undefined, { pollingInterval: 5000 });
  const childrenLength = data?.length ? String(data.length) : '';

  return (
    <div>
      <Popover
        childrenLength={childrenLength}
        classname={cls.itemLength}
        buttonItem={<Icon width={30} height={30} classname={cls.icon} Svg={NotificationIcon} />}>
        <NotificationList classname={cls.notification} items={data} isLoading={isLoading} />
      </Popover>
    </div>
  );
});
