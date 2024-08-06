import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import ko_KR from "antd/es/locale/ko_KR";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import View from "./pages/view";
import Manage from "./pages/manage";
import Navbar from "./components/layout/Navbar";
dayjs.locale("ko");

const Layout: React.FC = () => (
  <ConfigProvider locale={ko_KR}>
    <Navbar>
      <Outlet />
    </Navbar>
  </ConfigProvider>
);

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/view" />} />
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<View />} />
          <Route path="view" element={<View />} />
          <Route path="manage" element={<Manage />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
