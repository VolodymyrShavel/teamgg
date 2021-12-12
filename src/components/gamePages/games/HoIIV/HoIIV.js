// import {Outlet} from 'react-router-dom';
import classes from './HoIIV.module.css';
import Games from '../Games';
import React from 'react';

function HoIIV() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default HoIIV;
