// import {Outlet} from 'react-router-dom';
import classes from './GTASAMP.module.css';
import Games from '../Games';
import React from 'react';

function GTASAMP() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default GTASAMP;
