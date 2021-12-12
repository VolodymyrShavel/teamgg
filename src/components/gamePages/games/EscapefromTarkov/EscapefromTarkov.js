// import {Outlet} from 'react-router-dom';
import classes from './EscapefromTarkov.module.css';
import Games from '../Games';
import React from 'react';

function EscapefromTarkov() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default EscapefromTarkov;
