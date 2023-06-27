import { ChangeEvent, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Rating.module.scss';
import { RatingProps } from './Rating.types';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/HStack';
import { VStack } from '@/shared/ui/VStack';

export const Rating = memo(({ feedbackTitle, hasFeedback = false, onAccept, rate = 0, ratingTitle }: RatingProps) => {
  const { t } = useTranslation('articlesDetails');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [starCount, setStarCount] = useState<number>(rate);
  const [feedback, setFeedback] = useState<string>('');

  const onStarSelect = useCallback(
    (count: number) => {
      setStarCount(count);
      if (hasFeedback) {
        setIsOpen(true);
      }
    },
    [hasFeedback]
  );

  const onAcceptHandler = useCallback(() => {
    onAccept(starCount, feedback);
    setIsOpen(false);
  }, [feedback, onAccept, starCount]);

  const onCancelHandler = useCallback(() => {
    setIsOpen(false);
    onAccept(starCount);
  }, [onAccept, starCount]);

  return (
    <>
      <VStack
        fullWidth
        classname={cls.rating}
        gap='20'>
        <Typography variant='h3'>{ratingTitle}</Typography>
        <StarRating
          onSelect={(count) => onStarSelect(count)}
          size={30}
          selectedStar={starCount}
        />
      </VStack>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen((prevState) => !prevState)}>
        <VStack gap='10'>
          <Typography variant='h4'>{feedbackTitle}</Typography>
          <Input
            placeholder={t('enterText')}
            fullWidth
            onInput={(event: ChangeEvent<HTMLInputElement>) => setFeedback(event.target.value)}
          />
          <HStack
            gap='10'
            justify='end'>
            <Button
              theme='contained'
              onClick={onAcceptHandler}>
              Отправить
            </Button>
            <Button
              theme='outlined'
              onClick={onCancelHandler}>
              Закрыть
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </>
  );
});
