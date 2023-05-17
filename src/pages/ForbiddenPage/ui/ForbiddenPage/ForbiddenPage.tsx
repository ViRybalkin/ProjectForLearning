import React from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/HStack';
import { Typography } from 'shared/ui/Typography';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');
  return (
    <HStack>
      <Typography variant='h1' align='center'>
        {t('title')}
      </Typography>
    </HStack>
  );
};

export default ForbiddenPage;
