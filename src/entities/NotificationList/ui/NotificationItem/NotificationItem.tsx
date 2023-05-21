import { memo } from 'react';
import { Card } from 'shared/ui/Card';
import { Typography } from 'shared/ui/Typography';
import { AppLink } from 'shared/ui/AppLink';
import { VStack } from 'shared/ui/VStack';
import { NotificationItemProps } from './NotificationItem.types';

export const NotificationItem = memo(({ item, classname }: NotificationItemProps) => {
  const content = (
    <Card classname={classname}>
      <VStack align='start' gap='10'>
        <Typography variant='h3'>{item.title}</Typography>
        <Typography variant='h3'>{item.description}</Typography>
      </VStack>
    </Card>
  );

  if (item.href) {
    return (
      <AppLink className={classname} target='_blank' to={item.href}>
        {content}
      </AppLink>
    );
  }
  return content;
});
