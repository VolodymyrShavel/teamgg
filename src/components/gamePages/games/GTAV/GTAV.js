// import {Outlet} from 'react-router-dom';
import classes from './GTAV.module.css';
import Games from '../Games';
import React from 'react';

function GTAV() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default GTAV;
