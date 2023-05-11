import { useTranslation } from 'react-i18next';
import { ListBox, Typography } from 'shared';
import { Page } from 'widget';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  const people = [
    { id: 1, value: 'Durward Reynolds', unavailable: false },
    { id: 2, value: 'Kenton Towne', unavailable: false },
    { id: 3, value: 'Therese Wunsch', unavailable: false },
    { id: 4, value: 'Benedict Kessler', unavailable: true },
    { id: 5, value: 'Katelyn Rohan', unavailable: false },
  ];

  return (
    <Page testId='mainPageTestId'>
      <Typography>{t('title')}</Typography>
      <ListBox label="asdas" options={people} fullWidth />
    </Page>
  );
};

export default MainPage;
