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
import DetailedNews from '../pages/DetailedNews/DetailedNews';
import MemoryGamePage from '../pages/MemoryGamePage/MemoryGamePage';
import MemoryGame from '../pages/MemoryGame/MemoryGame';
import AccountInfos from '../pages/AccountInfos/AccountInfos';
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
        <Route path="/jogos/jogo-da-memoria" element={<MemoryGamePage />} />
        <Route path="/jogo-da-memoria" element={<MemoryGame />} />
        <Route path="/conta" element={<Account />} />
        <Route path="/conta/detalhes" element={<AccountInfos />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/noticias/:id" element={<DetailedNews />} />
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default AppRoutes;
