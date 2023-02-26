import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'shared/config';
import {PageLoader} from 'widget';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {Object.values(routerConfig).map((rout) => <Route key={rout.path} element={rout.element} path={rout.path}/>)}
      </Routes>
    </Suspense>
  )
}

export {AppRouter};
