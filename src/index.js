import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import './index.css';
import { UserStorage } from './UserContext';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserStorage>
          <Header />
             <App />
          <Footer />
        </UserStorage>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
