// import {Outlet} from 'react-router-dom';
import classes from './Overwatch.module.css';
import Games from '../Games';
import React from 'react';

function Overwatch() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default Overwatch;
