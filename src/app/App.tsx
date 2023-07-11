import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SideBar } from '@/widget/SideBar';
import { NavBar } from '@/widget/NavBar';
import { AppRouter } from './providers/RouterProvider';
import { getInited, initAuthDataService } from '@/entities/User';
import { classNames } from '@/shared/helpers/classNames';
import { useAppDispatch } from '@/shared/helpers/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';
import { Flex } from '@/shared/ui/Flex';

export const App = () => {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getInited);

  useEffect(() => {
    dispatch(initAuthDataService());
  }, [dispatch]);

  if (!isInited) {
    return (
      <Flex
        justify='between'
        fullWidth
        fullHeight
        align='center'>
        <Loader />
      </Flex>
    );
  }

  return (
    <div
      data-testid='appId'
      className={classNames('app', {})}>
      <Suspense fallback=''>
        <NavBar />
        <main className={classNames('mainWrapper')}>
          <SideBar />
          <div className={classNames('contentWrapper')}>{isInited ? <AppRouter /> : null}</div>
        </main>
      </Suspense>
    </div>
  );
};
