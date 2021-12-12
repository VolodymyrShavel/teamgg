// import {Outlet} from 'react-router-dom';
import classes from './GeometryDash.module.css';
import Games from '../Games';
import React from 'react';

function GeometryDash() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default GeometryDash;
