import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal';
import { getUserSettings, saveUserSettingsService } from '@/entities/User';
import { useAppDispatch } from '@/shared/helpers/useAppDispatch';
import { Typography } from '@/shared/ui/Typography';
import cls from './GreetingModal.module.scss';
import { DesktopComponent } from '@/shared/ui/DesktopComponent';
import { MobileComponent } from '@/shared/ui/MobileComponent';
import { Drawer } from '@/shared/ui/Drawer';

export const GreetingModal = memo(() => {
  const { t } = useTranslation('articlesDetails');
  const dispatch = useAppDispatch();
  const { isFirstVisit } = useSelector(getUserSettings);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isFirstVisit) {
      setIsOpen(true);
      dispatch(
        saveUserSettingsService({
          isFirstVisit: false,
        })
      );
    }
  }, [dispatch, isFirstVisit]);

  return (
    <div>
      <DesktopComponent>
        <Modal
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}>
          <Typography
            align='center'
            variant='h3'
            classname={cls.text}>
            {t('greeting')}
          </Typography>
        </Modal>
      </DesktopComponent>
      <MobileComponent>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}>
          <Typography
            align='center'
            variant='h3'
            classname={cls.text}>
            {t('greeting')}
          </Typography>
        </Drawer>
      </MobileComponent>
    </div>
  );
});
