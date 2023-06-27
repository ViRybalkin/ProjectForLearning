import { Loader } from '@/shared/ui/Loader';
import { classNames } from '@/shared/helpers/classNames';
import cls from './PageLoader.module.scss';

const PageLoader = () => {
  return (
    <div
      data-testid='pageLoaderTestId'
      className={classNames(cls.pageLoader)}>
      <Loader />
    </div>
  );
};

export { PageLoader };
