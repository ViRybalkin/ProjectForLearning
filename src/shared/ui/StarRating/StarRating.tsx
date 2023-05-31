import React, { memo, useState } from 'react';
import { StarRatingProps } from './StarRating.types';
import cls from './StarRating.module.scss';
import Star from '../../assets/icons/star.svg';
import { Icon } from '../Icon';
import { classNames } from '@/shared/config/helpers/classNames';

export const StarRating = memo(({ size, onSelect, selectedStar = 0, starNumber = 5 }: StarRatingProps) => {
  const [hoveredCount, setHoveredCount] = useState<number>(selectedStar);
  const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStar));
  const ratingNumbers = Array.from({ length: starNumber }, (value, index) => index + 1);

  const onMouseEnter = (starCount: number) => {
    if (!isSelected) {
      setHoveredCount(starCount);
    }
  };

  const onMouseLeave = () => {
    if (!isSelected) {
      setHoveredCount(0);
    }
  };

  const onSelectStar = (starCount: number) => {
    if (!isSelected) {
      onSelect(starCount);
      setIsSelected(true);
      setHoveredCount(starCount);
    }
  };

  return (
    <div>
      {ratingNumbers.map((starCount) => {
        return (
          <Icon
            key={starCount}
            onMouseEnter={() => onMouseEnter(starCount)}
            onMouseLeave={onMouseLeave}
            onClick={() => onSelectStar(starCount)}
            Svg={Star}
            height={size}
            width={size}
            classname={classNames(cls.starRating, {
              [cls.hovered]: hoveredCount >= starCount,
              [cls.selected]: isSelected,
            })}
          />
        );
      })}
    </div>
  );
});
