import React from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, Typography } from 'shared';

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
