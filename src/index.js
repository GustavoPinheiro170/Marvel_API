import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import './index.css';
import { UserStorage } from './UserContext';



ReactDOM.render(
  <React.StrictMode>
      <UserStorage>
        <Header />
          <App />
        <Footer />
      </UserStorage>
  </React.StrictMode>,
  document.getElementById('root')
);
