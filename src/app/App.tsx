import './styles/index.scss';
import { AppRouter } from 'shared/config/routes/ui/AppRouter';
import { SideBar } from 'widget/ui/SideBar';
import { NavBar } from 'widget/ui/NavBar';
import { Suspense, useEffect } from 'react';
import { getInited, userAction } from 'entities/User';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/config/helpers/classNames';
import { useAppDispatch } from './providers/StoreProvider';

export const App = () => {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getInited);

  useEffect(() => {
    dispatch(userAction.initUserData());
  }, [dispatch]);

  return (
    <div data-testid='appId' className={classNames('app', {})}>
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
