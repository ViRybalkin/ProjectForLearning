import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared';

const AppRouter = () => (
  <Suspense fallback={<div>Loading ...</div>}>
    <Routes>
      {Object.values(routerConfig).map((rout) => <Route key={rout.path} element={rout.element} path={rout.path} />)}
    </Routes>
  </Suspense>
);

export { AppRouter };
