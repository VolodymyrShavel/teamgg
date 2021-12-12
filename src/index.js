import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import Navigation from './Navigation';

ReactDOM.render(
   <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="*" element={<Navigation />} />
      </Routes>
   </BrowserRouter>,
   document.getElementById('root')
);
