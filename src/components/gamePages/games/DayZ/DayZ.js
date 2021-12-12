// import {Outlet} from 'react-router-dom';
import classes from './DayZ.module.css';
import Games from '../Games';
import React from 'react';

function DayZ() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default DayZ;
