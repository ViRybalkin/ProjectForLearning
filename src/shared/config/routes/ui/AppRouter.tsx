import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from 'widget';
import {routerConfig} from '../Routes';

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
