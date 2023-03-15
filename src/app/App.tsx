import './styles/index.scss';
import { classNames, useAppDispatch } from 'app';
import { AppRouter } from 'shared/config';
import { NavBar, SideBar } from 'widget/ui';
import { Suspense, useEffect } from 'react';
import { userAction } from 'entities';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userAction.initUserData());
  }, [dispatch]);

  return (
    <div data-testid='appId' className={classNames('app', {})}>
      <Suspense fallback=''>
        <NavBar />
        <main className={classNames('mainWrapper')}>
          <SideBar />
          <div className={classNames('contentWrapper')}>
            <AppRouter />
          </div>
        </main>
      </Suspense>
    </div>
  );
};
