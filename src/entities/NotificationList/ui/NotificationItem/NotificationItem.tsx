import { memo } from 'react';
import { Card } from 'shared/ui/Card';
import { Typography } from 'shared/ui/Typography';
import { AppLink } from 'shared/ui/AppLink';
import { VStack } from 'shared/ui/VStack';
import { classNames } from 'shared/config/helpers/classNames';
import { NotificationItemProps } from './NotificationItem.types';

export const NotificationItem = memo(({ item, classname }: NotificationItemProps) => {
  const content = (
    <Card>
      <VStack align="start" classname={classNames('', {}, [classname])} gap='10'>
        <Typography variant='h3'>{item.title}</Typography>
        <Typography variant='h3'>{item.description}</Typography>
      </VStack>
    </Card>
  );

  if (item.href) {
    return (
      <AppLink target='_blank' to={item.href}>
        {content}
      </AppLink>
    );
  }
  return content;
});
