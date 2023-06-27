import { memo } from 'react';
import { VStack } from '@/shared/ui/VStack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/helpers/classNames';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { NotificationListProps } from './NotificationList.types';

export const NotificationList = memo(({ classname, isLoading, items }: NotificationListProps) => {
  if (isLoading) {
    return (
      <VStack gap='8'>
        <Skeleton
          width='200px'
          height='80'
          borderRadius='5px'
        />
        <Skeleton
          width='200px'
          height='80'
          borderRadius='5px'
        />
        <Skeleton
          width='200px'
          height='80'
          borderRadius='5px'
        />
      </VStack>
    );
  }

  return (
    <VStack gap='8'>
      {items?.map((item) => (
        <NotificationItem
          key={item.id}
          classname={classNames('', {}, [classname])}
          item={item}
        />
      ))}
    </VStack>
  );
});
