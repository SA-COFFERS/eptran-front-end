import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home/Home';
// import { AuthProvider } from '../context/auth';
// import PrivateRoute from './PrivateRoutes';

function AppRoutes() {
  return (
    <Router>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default AppRoutes;
