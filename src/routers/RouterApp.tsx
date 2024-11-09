import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Functions
import { IRoute } from '../interfaces/common.ts';
import { publicRouters, privateRouters } from "./define.ts"

//Components
import NotFoundComp from '../pages/NotFound/index.tsx';
import ProtectRoute from '../pages/ProtectRoute/index.tsx';

const RouterApp = () => {
  const renderRouter = (routers: IRoute[]) => {
    return (
      routers &&
      !!routers.length &&
      routers.map((route, index) => {
        const Layout = route.layout || React.Fragment;
        const Comp = route.element;

        return (
          <Route key={index} path={route.path} element={<Layout><Comp /></Layout>}>
            {route.children && renderRouter(route.children)}
          </Route>
        );
      })
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* public router */}
        {renderRouter(publicRouters)}

        {/* private router */}
        <Route element={<ProtectRoute />}>{renderRouter(privateRouters)}</Route>

        {/* not found */}
        <Route path="*" element={<NotFoundComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
