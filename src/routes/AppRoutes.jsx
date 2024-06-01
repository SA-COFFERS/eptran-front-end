import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import Games from '../pages/Games/Games';
import Account from '../pages/Account/Account';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import AboutUs from '../pages/AboutUs/AboutUs';
// import { AuthProvider } from '../context/auth';
// import PrivateRoute from './PrivateRoutes';

function AppRoutes() {
  return (
    <Router>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/jogos" element={<Games />} />
        <Route path="/conta" element={<Account />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default AppRoutes;
