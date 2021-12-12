// import {Outlet} from 'react-router-dom';
import classes from './CoDMobile.module.css';
import Games from '../Games';
import React from 'react';

function CoDMobile() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default CoDMobile;
