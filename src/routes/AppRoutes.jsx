import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import { AuthProvider } from '../context/auth';
import PrivateRoute from './PrivateRoutes';
import AddContact from '../pages/AddContact/AddContact';
import EditContact from '../pages/EditContact/EditContact';
import Contact from '../pages/Contact/Contact';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            )}
          />
          <Route
            path="/add"
            element={(
              <PrivateRoute>
                <AddContact />
              </PrivateRoute>
            )}
          />
          <Route
            path="/contact/:contactId"
            element={(
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
)}
          />
          <Route
            path="/contact/edit/:contactId"
            element={(
              <PrivateRoute>
                <EditContact />
              </PrivateRoute>
          )}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>

  );
}

export default App;