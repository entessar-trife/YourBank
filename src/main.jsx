import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Note: I used HashRouter because it's the only way to make the app work on github pages without 404 errors */}
    <HashRouter> 
      <App />
    </HashRouter>
  </React.StrictMode>
);
