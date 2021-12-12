// import {Outlet} from 'react-router-dom';
import classes from './Paladins.module.css';
import Games from '../Games';
import React from 'react';

function Paladins() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Paladins;
