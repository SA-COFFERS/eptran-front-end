// import React, { createContext, useEffect, useState } from 'react';
// import api from '../api/api';

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const login = async (email, password) => {
//     try {
//       const response = await api.post('users/login', {
//         email, password,
//       });

//       api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       setUser(response.data.user);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logout = () => {
//     localStorage.clear();
//     api.defaults.headers.Authorization = '';

//     setUser(null);
//   };

//   const checkingToken = async () => {
//     const recoveredUser = localStorage.getItem('user');
//     const token = localStorage.getItem('token');

//     if (token && recoveredUser) {
//       try {
//         api.defaults.headers.common.Authorization = `Bearer ${token}`;
//         const tokenResponse = await api.get('checktoken');

//         if (tokenResponse.status === 200) {
//           setUser(JSON.parse(recoveredUser));
//         } else {
//           logout();
//         }
//       } catch (error) {
//         logout();
//       }
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     checkingToken();
//   }, []);

//   return (
//     <AuthContext.Provider value={{
//       user,
//       signed: !!user,
//       loading,
//       login,
//       logout,
//     }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }
