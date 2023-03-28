import {memo, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from 'widget';
import {useSelector} from "react-redux";
import {getIsAuth} from "entities";
import {routerConfig} from '../Routes';

const AppRouter = memo(() => {
  const isAuth = useSelector(getIsAuth);
  const filteredRoutes = Object.values(routerConfig).filter((el) => {
    return !(el.isAuth && !isAuth);

  })
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {filteredRoutes.map((rout) => <Route key={rout.path} element={rout.element} path={rout.path}/>)}
      </Routes>
    </Suspense>
  )
})

export {AppRouter};
