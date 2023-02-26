import './styles/index.scss';
import { classNames } from 'app/helpers';
import { AppRouter } from 'shared/config';
import { NavBar, SideBar } from 'widget/ui';
import { Suspense } from 'react';

export const App = () => {
  return (
    <div className={classNames('app', {})}>
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
