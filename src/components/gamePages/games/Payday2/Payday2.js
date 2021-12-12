// import {Outlet} from 'react-router-dom';
import classes from './Payday2.module.css';
import Games from '../Games';
import React from 'react';

function Payday2() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Payday2;
