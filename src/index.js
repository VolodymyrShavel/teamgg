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
//1. git add .
//2. git commit -m "Some comment on update"
//3. git push origin master
//4. npm run deploy?
