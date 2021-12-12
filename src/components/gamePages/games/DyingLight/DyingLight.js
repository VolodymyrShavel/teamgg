// import {Outlet} from 'react-router-dom';
import classes from './DyingLight.module.css';
import Games from '../Games';
import React from 'react';

function DyingLight() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default DyingLight;
