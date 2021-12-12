import './App.css';
import React from 'react';

import Header from './components/gamePages/Header';
import Cards from './components/breastplate/Buttons/Cards';
import Legs from './components/gamePages/Legs';

function App() {
   return (
      <div className="App">
         <Header className="heading" />
         <Cards />
         <Legs className="footer_down" />
      </div>
   );
}

export default App;
