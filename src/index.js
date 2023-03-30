<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthProvider}  from './component/context/UserContext';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>
);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthProvider}  from './component/context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>
);
>>>>>>> e8a2ec44fb783062fde35a4a03f1316a956ca67c
