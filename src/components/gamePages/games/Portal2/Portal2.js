// import {Outlet} from 'react-router-dom';
import classes from './Portal2.module.css';
import Games from '../Games';
import React from 'react';

function Portal2() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Portal2;
