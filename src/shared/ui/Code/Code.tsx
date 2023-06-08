import { memo, useCallback } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import { Button } from '../Button/Button';
import Copy from '../../assets/icons/copy.svg';
import { Icon } from '../Icon';
import { CodeProps } from './Code.types';
import cls from './Code.module.scss';

export const Code = memo(({ code }: CodeProps) => {
  const onCopyClickHandler = useCallback(async () => {
    await navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <div className={classNames(cls.code, {})}>
      <div className={cls.svg}>
        <Button theme='clear'>
          <Icon onClick={onCopyClickHandler} width={20} height={20} Svg={Copy} />
        </Button>
      </div>
      <pre>{code}</pre>
    </div>
  );
});
