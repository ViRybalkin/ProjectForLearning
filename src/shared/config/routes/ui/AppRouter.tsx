import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "shared";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
                {Object.values(routerConfig).map((rout) => {
                    return <Route key={rout.path} element={rout.element} path={rout.path} />
                })}
            </Routes>
        </Suspense>
    );
};

export {AppRouter};