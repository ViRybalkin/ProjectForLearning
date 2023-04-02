import './styles/index.scss';
import { classNames, useAppDispatch } from 'app';
import { AppRouter } from 'shared/config/routes/ui/AppRouter';
import { NavBar, SideBar } from 'widget/ui';
import { Suspense, useEffect } from 'react';
import { userAction } from 'entities';
import { useSelector } from 'react-redux';
import { getInited } from 'entities/User/selectors/getInited';

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
